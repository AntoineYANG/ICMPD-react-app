/*
 * @Author: Kanata You 
 * @Date: 2021-02-05 13:24:03 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-05 15:39:17
 */

import React, { useState } from "react";
import genres, { genreInfo, getGenreName } from "../constance/genres";
import influenceByYear, { influenceFlow } from "../constance/influenceByYear";
import Colors from "../constance/colors";


const WIDTH   = 2000;
const HEIGHT  = 700;
const X_STEP  = WIDTH / 10;
const RECT_W  = 90;
const RECT_H  = 24;
const FONTSIZE  = 11;

const YEARS = [
  "before", "30s", "40s", "50s", "60s", "70s", "80s", "90s", "2000s", "2010s"
];

const Q1Sankey: React.FC = () => {
  const [checking, check] = useState<number | null>(null);

  const lastMemo: {[gid: number]: number;} = {};

  return (
    <svg width={ WIDTH } height={ HEIGHT }
      style={{
        background: "white",
        border:     "1px solid"
      }}
      onClick={
        () => {
          if (checking !== null) {
            check(null);
          }
        }
      } >
        {
          YEARS.map((year, i) => {
            const x = X_STEP * (i + 0.5);
            const start = 1930 + 10 * i;
            const genreList: Array<
              genreInfo & { flow: influenceFlow[]; }
            > = genres.filter(d => d.start <= start).map(
              d => {
                return {
                  ...d,
                  flow: []
                };
              }
            ).sort((a, b) => a.start - b.start);
            if (i) {
              influenceByYear[i - 1].flow.forEach(flow => {
                for (let j = 0; j < genreList.length; j++) {
                  if (genreList[j].genre_id === flow.source_gid) {
                    genreList[j].flow.push(flow);
                    return;
                  }
                }
              });
            }
            const curMemo: {[gid: number]: number;} = {};
            genreList.forEach((g, j) => {
              const y = 10 + (HEIGHT - 56) / genreList.length * (j + 0.5);
              curMemo[g.genre_id] = y;
            });
            return (
              <g key={ year } >
                {
                  i && influenceByYear[i - 1].flow.map((flow, j) => {
                    const x1 = x - X_STEP + RECT_W / 2;
                    const x2 = x - RECT_W / 2;
                    const y1 = lastMemo[flow.source_gid];
                    const y2 = curMemo[flow.target_gid];
                    return (
                      <path key={ `flow_${j}` }
                        d={
                          `M${x1},${y1}`
                          + ` C${(x1+x2)/2},${y1} ${(x1+x2)/2},${y2} ${x2},${y2}`
                        }
                        style={{
                          fill:       "none",
                          stroke:     Colors.byGenre[getGenreName(flow.source_gid)],
                          strokeWidth:"12.5px",
                          opacity:    checking === null ? 0.5
                            : flow.source_gid === checking ? 0.9
                            : flow.target_gid === checking ? 0.4 : 0.04,
                          transition: "opacity 0.3s"
                        }} />
                    );
                  })
                }
                {
                  genreList.map(g => {
                    const y = curMemo[g.genre_id];
                    lastMemo[g.genre_id] = y;

                    return (
                      <g key={ g.genre_id } >
                        <rect
                          x={ x - RECT_W / 2 }
                          y={ y - RECT_H / 2 }
                          width={ RECT_W } height={ RECT_H }
                          rx={ 3 } ry={ 3 }
                          style={{
                            fill:         "white",
                            stroke:       Colors.byGenre[getGenreName(g.genre_id)],
                            strokeWidth:  "2px",
                            cursor:       "pointer"
                          }}
                          onClick={
                            e => {
                              e.stopPropagation();
                              if (g.genre_id !== checking) {
                                check(g.genre_id);
                              }
                            }
                          } />
                        <text x={ x } y={ y }
                          textAnchor="middle"
                          style={{
                            fill:       Colors.byGenre[getGenreName(g.genre_id)],
                            fontSize:   FONTSIZE,
                            fontWeight: 600,
                            transform:  "translateY(0.36em)",
                            pointerEvents:  "none"
                          }} >
                            { getGenreName(g.genre_id) }
                        </text>
                      </g>
                    );
                  })
                }
                <text key="year" x={ x } y={ HEIGHT - 20 }
                  textAnchor="middle"
                  style={{
                    fill:       "black",
                    fontSize:   FONTSIZE * 1.2,
                    fontWeight: 600
                  }} >
                    { year }
                </text>
              </g>
            );
          })
        }
    </svg>
  );
};


export default Q1Sankey;
