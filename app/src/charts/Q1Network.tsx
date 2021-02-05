/*
 * @Author: Kanata You 
 * @Date: 2021-02-05 17:19:00 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-05 18:43:10
 */

import React, { useState } from "react";
import genres, { getGenreName, Genre } from "../constance/genres";
import influenceByYear, { influenceFlow } from "../constance/influenceByYear";
import Colors from "../constance/colors";


const WIDTH     = 700;
const HEIGHT    = 700;
const R         = 34;
const FONTSIZE  = 12;

type GenreNode = {
  gid:    number;
  name:   Genre;
  input:  influenceFlow[];
  output: influenceFlow[];
  x:      number;
  y:      number;
};

const nodes: GenreNode[] = genres.map(g => {
  const deg = Math.random() * Math.PI * 2;
  const dist = (1 - Math.random() * Math.random()) * (Math.min(
    WIDTH, HEIGHT
  ) / 2.1 - R);

  return {
    gid:    g.genre_id,
    name:   g.name,
    input:  [],
    output: [],
    x:      WIDTH / 2 + Math.cos(deg) * dist,
    y:      HEIGHT / 2 - Math.sin(deg) * dist
  };
}).sort((a, b) => a.gid - b.gid);

influenceByYear.forEach(influence => {
  influence.flow.forEach(flow => {
    nodes[flow.source_gid].output.push(flow);
    nodes[flow.target_gid].input.push(flow);
  });
});

let moving: SVGCircleElement | null = null;
let mouseX = 0;
let mouseY = 0;

const Q1Network: React.FC = () => {
  const [state, setState] = useState({ nodes, dragging: -1, focusing: -1 });

  const lineWidth = (val: number) => 2 + 6 * Math.log(val + 1) / 6.67;

  const getPath = (a: number, b: number) => {
    const pos = {
      x1: state.nodes[a].x,
      y1: state.nodes[a].y,
      x2: state.nodes[b].x,
      y2: state.nodes[b].y,
      x:  0,
      y:  0,
      deg:0
    };

    const dist = Math.sqrt(
      Math.pow(pos.x1 - pos.x2, 2)
      + Math.pow(pos.y1 - pos.y2, 2)
    );
    const dx = (pos.x2 - pos.x1) / dist * R;
    const dy = (pos.y2 - pos.y1) / dist * R;
    
    const dist2 = Math.sqrt(
      Math.pow(pos.x1 - pos.x2, 2)
      + Math.pow(pos.y1 - pos.y2, 2)
    );
    const dx2 = (pos.x2 - pos.x1) / dist2 * 6;
    const dy2 = (pos.y2 - pos.y1) / dist2 * 6;

    pos.deg = pos.y1 > pos.y2 ? Math.asin((pos.x2 - pos.x1) / dist) / Math.PI * 180
      : 180 - Math.asin((pos.x2 - pos.x1) / dist) / Math.PI * 180;

    pos.x1 += dx;
    pos.x2 -= dx;
    pos.y1 += dy;
    pos.y2 -= dy;
    pos.x = pos.x2;
    pos.x2 -= dx2;
    pos.y = pos.y2;
    pos.y2 -= dy2;

    return pos;
  };

  return (
    <svg width={ WIDTH } height={ HEIGHT }
      style={{
        background: "white",
        border:     "1px solid"
      }}
      onMouseMove={
        e => {
          if (moving) {
            moving.setAttribute("cx", e.clientX - mouseX + "");
            moving.setAttribute("cy", e.clientY - mouseY + "");
            moving.nextElementSibling!.setAttribute("x", e.clientX - mouseX + "");
            moving.nextElementSibling!.setAttribute("y", e.clientY - mouseY + "");
          }
        }
      }
      onMouseUp={
        e => {
          moving = null;
          setState({
            nodes: state.nodes.map((node, i) => {
              return i === state.dragging ? {
                ...node,
                x: e.clientX - mouseX,
                y: e.clientY - mouseY
              } : node;
            }),
            focusing: state.dragging,
            dragging: -1
          });
        }
      } >
        <g key="links" >
          {
            state.nodes.map(node => {
              const links: {[target: number]: number;} = {};
              node.output.forEach(flow => {
                if (flow.target_gid === node.gid) {
                  return;
                }
                links[flow.target_gid] = (links[flow.target_gid] || 0) + flow.count;
              });
              return Object.entries(links).map(link => {
                const b = parseInt(link[0]);
                const { x1, x2, y1, y2, x, y, deg } = getPath(node.gid, b);

                return (
                  <g key={ `${node.gid}->${link[0]}`} >
                    <path key={ 0 }
                      d={ `M${x1},${y1} L${x2},${y2}` }
                      style={{
                        fill:       "none",
                        stroke:     Colors.byGenre[getGenreName(node.gid)],
                        strokeWidth:`${lineWidth(link[1])}px`,
                        opacity:    state.focusing === -1 ? 0.5
                          : node.gid === state.focusing ? 0.9
                          : b === state.focusing ? 0.4 : 0.04,
                        transition: "opacity 0.3s"
                      }} />
                    <path key={ 1 }
                      d="M0,0 L-8,14 L8,14 Z"
                      style={{
                        transform:  `translate(${x}px,${y}px) rotate(${deg}deg)`,
                        fill:       Colors.byGenre[getGenreName(node.gid)],
                        opacity:    state.focusing === -1 ? 0.5
                          : node.gid === state.focusing || b === state.focusing ? 0.9 : 0.04,
                        transition: "opacity 0.3s"
                      }} />
                  </g>
                );
              });
            }).flat(Infinity)
          }
        </g>
        <g key="nodes" >
          {
            state.nodes.map((node, i) => {
              return (
                <g key={ node.gid } >
                  <circle
                    cx={ node.x } cy={ node.y } r={ R }
                    style={{
                      fill:         "white",
                      stroke:       Colors.byGenre[getGenreName(node.gid)],
                      strokeWidth:  "2px",
                      cursor:       state.dragging === i ? "grabbing" : "grab"
                    }}
                    onMouseDown={
                      e => {
                        mouseX = e.clientX - node.x;
                        mouseY = e.clientY - node.y;
                        moving = e.target as SVGCircleElement;
                        setState({
                          ...state,
                          focusing: -1,
                          dragging: i
                        });
                      }
                    } />
                  <text x={ node.x } y={ node.y }
                    textAnchor="middle"
                    // textLength={ getGenreName(node.gid).length >= 8 ? `${R*2-6}` : undefined }
                    style={{
                      fill:       Colors.byGenre[getGenreName(node.gid)],
                      fontSize:   getGenreName(node.gid).length >= 8 ? `${
                        FONTSIZE * Math.pow(8 / getGenreName(node.gid).length, 0.67)
                      }` : FONTSIZE,
                      fontWeight: 600,
                      transform:  `translateY(0.36em)`,
                      pointerEvents:  "none",
                      userSelect:   "none"
                    }} >
                      { getGenreName(node.gid) }
                  </text>
                </g>
              );
            })
          }
        </g>
    </svg>
  );
};


export default Q1Network;
