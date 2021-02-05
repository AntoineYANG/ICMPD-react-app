/*
 * @Author: Kanata You 
 * @Date: 2021-02-05 13:24:03 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-05 20:36:22
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

  const yMemo: {[yIdx: number]: [number, {[gid: number]: number;}];} = {};

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
            yMemo[i] = [x, {}];
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
            genreList.forEach((g, j) => {
              const y = 10 + (HEIGHT - 56) / genreList.length * (j + 0.5);
              yMemo[i][1][g.genre_id] = y;
            });

            let base = 0;

            if (i) {
              influenceByYear[i - 1].flow.forEach(flow => {
                if (flow.count > base) {
                  base = flow.count;
                }
              });
              base = Math.log(base + 1);
            }

            const lineWidth = (val: number) => 2 + 12 * Math.log(val + 1) / base;

            return (
              <g key={ year } >
                {
                  i && influenceByYear[i - 1].flow.map((flow, j) => {
                    const [x1, y1] = [
                      yMemo[i - 1][0] + RECT_W / 2,
                      yMemo[i - 1][1][flow.source_gid]
                    ];
                    const [x2, y2] = [
                      yMemo[i][0] - RECT_W / 2,
                      yMemo[i][1][flow.target_gid]
                    ];

                    return (
                      <g key={ `flow_${j}` } >
                        <path
                          d={
                            `M${x1},${y1} L${x1+5},${y1}`
                            + ` C${(x1+x2)/2},${y1} ${(x1+x2)/2},${y2} ${x2-5},${y2} L${x2},${y2}`
                          }
                          style={{
                            fill:       "none",
                            stroke:     Colors.byGenre[getGenreName(flow.source_gid)],
                            strokeWidth:`${lineWidth(flow.count)}px`,
                            opacity:    checking === null ? 0.5
                              : flow.source_gid === checking ? 0.9
                              : flow.target_gid === checking ? 0.4 : 0.04,
                            transition: "opacity 0.3s"
                          }} />
                      </g>
                    );
                  })
                }
                {
                  i && influenceByYear[i - 1].flow.map((flow, j) => {
                    const [x1, y1] = [
                      yMemo[i - 1][0] + RECT_W / 2,
                      yMemo[i - 1][1][flow.source_gid]
                    ];
                    const [x2, y2] = [
                      yMemo[i][0] - RECT_W / 2,
                      yMemo[i][1][flow.target_gid]
                    ];

                    return (
                      <g key={ `flow_${j}++` } >
                        <circle
                          cx={
                            flow.source_gid === checking ? x2 - 9
                              : flow.target_gid === checking ? x1 + 9 : -100
                          }
                          cy={
                            flow.source_gid === checking ? y2
                              : flow.target_gid === checking ? y1 : -100
                          }
                          r={ 9 }
                          style={{
                            fill:       "white",
                            stroke:     Colors.byGenre[getGenreName(flow.source_gid)],
                            strokeWidth:"1.5px",
                            opacity:    checking === null ? 0
                              : flow.source_gid === checking ? 1
                              : flow.target_gid === checking ? 1 : 0,
                            transition: "opacity 0.3s"
                          }} />
                        <text
                          x={
                            flow.source_gid === checking ? x2 - 9
                              : flow.target_gid === checking ? x1 + 9 : -100
                          }
                          y={
                            flow.source_gid === checking ? y2
                              : flow.target_gid === checking ? y1 : -100
                          }
                          textAnchor="middle"
                          style={{
                            fill:       "black",
                            fontSize:   FONTSIZE * 0.9,
                            transform:  "translateY(0.36em)",
                            pointerEvents:  "none",
                            opacity:    checking === null ? 0
                              : flow.source_gid === checking ? 1
                              : flow.target_gid === checking ? 1 : 0,
                            transition: "opacity 0.3s"
                          }} >
                            { flow.count }
                        </text>
                      </g>
                    );
                  })
                }
                {
                  genreList.map(g => {
                    const tx = X_STEP * (i + 0.5);
                    const y = yMemo[i][1][g.genre_id];

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
                        <text key="0" x={ tx } y={ y }
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
                        {/* <text key="1" x={ tx + 52 } y={ y }
                          textAnchor="middle"
                          style={{
                            fill:       "black",
                            fontSize:   FONTSIZE,
                            transform:  "translateY(0.36em)",
                            pointerEvents:  "none"
                          }} >
                            {
                              i ? (
                                (g.flow.length / g.data[i - 1]).toFixed(2).replace(
                                  /-?[a-z]+/i, "-"
                                )
                              ) : ""
                            }
                        </text> */}
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
