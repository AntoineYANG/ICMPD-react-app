/*
 * @Author: Kanata You 
 * @Date: 2021-02-05 17:19:00 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-07 03:32:04
 */

import React, { useState } from "react";
import { getGenreName } from "../constance/genres";
import Colors from "../constance/colors";
import q1case from "../constance/q1case";


const WIDTH     = 700;
const HEIGHT    = 700;
const FONTSIZE  = 12;

const graph = {
  ...q1case,
  nodes: q1case.nodes.map(node => {
    const c = 0.5 * Math.sqrt(node.level);

    return {
      ...node,
      x: WIDTH / 2 + (node.level - 1.5) * WIDTH * 0.24,
      y: HEIGHT * ((1 - c) / 2 + c * Math.random())
    };
  })
};

let moving: SVGCircleElement | null = null;
let mouseX = 0;
let mouseY = 0;

const Q1Network: React.FC = () => {
  const [state, setState] = useState({ graph, dragging: -1, focusing: -1 });

  const lineWidth = (val: number) => 1 + 2.5 * val;
  const getR = (size: number) => size;

  const getNode = (id: number) => state.graph.nodes.filter(n => n.id === id)[0];

  const getPath = (a: number, b: number) => {
    const nodeA = state.graph.nodes.filter(n => n.id === a)[0];
    const nodeB = state.graph.nodes.filter(n => n.id === b)[0];
    const pos = {
      x1: nodeA.x,
      y1: nodeA.y,
      x2: nodeB.x,
      y2: nodeB.y,
      x:  0,
      y:  0,
      deg:0
    };

    // const dist = Math.sqrt(
    //   Math.pow(pos.x1 - pos.x2, 2) + Math.pow(pos.y1 - pos.y2, 2)
    // );
    // const dx = (pos.x2 - pos.x1) / dist * getR(nodeA.symbolSize);
    // const dy = (pos.y2 - pos.y1) / dist * getR(nodeB.symbolSize);
    
    // const dist2 = Math.sqrt(
    //   Math.pow(pos.x1 - pos.x2, 2)
    //   + Math.pow(pos.y1 - pos.y2, 2)
    // );
    // const dx2 = (pos.x2 - pos.x1) / dist2 * 6;
    // const dy2 = (pos.y2 - pos.y1) / dist2 * 6;

    // pos.deg = pos.y1 > pos.y2 ? Math.asin((pos.x2 - pos.x1) / dist) / Math.PI * 180
    //   : 180 - Math.asin((pos.x2 - pos.x1) / dist) / Math.PI * 180;

    // pos.x1 += dx;
    // pos.x2 -= dx;
    // pos.y1 += dy;
    // pos.y2 -= dy;
    // pos.x = pos.x2;
    // pos.x2 -= dx2;
    // pos.y = pos.y2;
    // pos.y2 -= dy2;

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
            // moving.setAttribute("cx", e.clientX - mouseX + "");
            moving.setAttribute("cy", e.clientY - mouseY + "");
            // moving.nextElementSibling!.setAttribute("x", e.clientX - mouseX + "");
            moving.nextElementSibling!.setAttribute("y", e.clientY - mouseY + "");
          }
        }
      }
      onMouseUp={
        e => {
          moving = null;
          setState({
            graph: {
              ...state.graph,
              nodes: state.graph.nodes.map((node, i) => {
                return i === state.dragging ? {
                  ...node,
                  // x: e.clientX - mouseX,
                  y: e.clientY - mouseY
                } : node;
              })
            },
            focusing: state.dragging,
            dragging: -1
          });
        }
      } >
        <g key="links" >
          {
            state.graph.links.map((link, i) => {
              const from = parseInt(link.source);
              const to = parseInt(link.target);
              const { x1, x2, y1, y2, x, y, deg } = getPath(from, to);
              const node = getNode(from);
              const g = getGenreName(node.category);
              const focusing = state.focusing === -1 ? null : state.graph.nodes[state.focusing].id;

              return (
                <g key={ i } >
                  <path key={ 0 }
                    d={ `M${x1},${y1} L${x2},${y2}` }
                    style={{
                      fill:       "none",
                      stroke:     Colors.byGenre[g],
                      strokeWidth:`${lineWidth(0)}px`,
                      opacity:    focusing === null ? 0.5
                        : node.id === focusing ? 0.9
                        : getNode(to).id === focusing ? 0.4 : 0.04,
                      transition: "opacity 0.3s"
                    }} />
                  {/* <path key={ 1 }
                    d="M0,0 L-8,14 L8,14 Z"
                    style={{
                      transform:  `translate(${x}px,${y}px) rotate(${deg}deg)`,
                      fill:       Colors.byGenre[g],
                      opacity:    focusing === null ? 0.5
                        : node.id === focusing || getNode(to).id === focusing
                        ? 0.9 : 0.04,
                      transition: "opacity 0.3s"
                    }} /> */}
                </g>
              );
            })
          }
        </g>
        <g key="nodes" >
          {
            state.graph.nodes.map((node, i) => {
              return (
                <g key={ node.name } >
                  <circle
                    cx={ node.x } cy={ node.y } r={ getR(node.symbolSize) }
                    style={{
                      fill:         Colors.byGenre[getGenreName(node.category)],
                      // stroke:       Colors.byGenre[getGenreName(node.category)],
                      // strokeWidth:  "2px",
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
                    style={{
                      // fill:       Colors.byGenre[getGenreName(node.category)],
                      fontSize:   FONTSIZE,
                      fontWeight: 600,
                      transform:  `translateY(0.36em)`,
                      pointerEvents:  "none",
                      userSelect:   "none"
                    }} >
                      { node.name }
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
