/*
 * @Author: Kanata You 
 * @Date: 2021-02-06 15:55:19 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-08 13:46:53
 */

import React, { useState } from "react";
import Colors from "../constance/colors";
import allArtists from "../constance/allArtists";
import changeAll from "../constance/changeAll";
import allDev from "../constance/allDev";
import { getGenreName } from "../constance/genres";


const WIDTH   = 1300;
const HEIGHT  = 840;
const FONTSIZE  = 13;
const LEFTSPAN  = 190;
const RIGHTSPAN = 10;
const TOPSPAN   = 30;
const H         = [140, 260, 346];
const PADDING   = 17;

let sumPerYear: number[] = [];
let riverPerYear: {[aid: number]: [number, number];}[] = [];
let countPerYear: number[] = [];
for (let y = 1925; y <= 2020; y++) {
  sumPerYear.push(0);
  riverPerYear.push({});
}

const artists = allArtists;

let isArtistActive: {[aid: number]: boolean;} = {};

const mr = (val: number) => Math.pow(val, 1);

artists.forEach(d => {
  d.data.forEach(e => {
    sumPerYear[e[0] - 1925] += mr(e[1]);
  });
});
const max = Math.max(...sumPerYear);
const proj = (val: number) => val / max;
for (let y = 1925; y <= 2020; y++) {
  // countPerYear.push(0);
  countPerYear.push((1 - proj(sumPerYear[y - 1925])) / 2);
}

artists.forEach(d => {
  const data = d.data.sort((a, b) => a[0] - b[0]);
  const dict: {[year: number]: number;} = {};
  data.forEach(e => {
    dict[e[0]] = mr(e[1]);
  });
  const start = Math.max(
    1925,
    data[0][0] - 1
  );
  const end = Math.min(
    2020,
    data[data.length - 1][0] + 1
  );
  for (let j = start; j <= end; j++) {
    const year = j - 1925;
    const h = proj(dict[j] ?? 0);
    if (h >= proj(sumPerYear[year]) * 0.05) {
      isArtistActive[d.aid] = true;
    }
    riverPerYear[year][d.aid] = [countPerYear[year], countPerYear[year] + h];
    countPerYear[year] += h;
  }
});


const popularity = allDev;
const sumPopularity: {genre:string;value:number[][];} = {
  genre:  "all",
  value:  []
};
for (let y = 1925; y <= 2020; y++) {
  let sum = 0;
  const i = y - 1925;
  popularity.forEach(p => {
    sum += p.value[i][1];
  });
  sumPopularity.value.push([y, sum]);
}
const maxPopularity = Math.max(
  ...sumPopularity.value.map(d => d[1])
);


const Q5Development: React.FC = () => {
  const [state, setState] = useState({
    label: changeAll.map(_ => true),
    genre: popularity.map(_ => true)
  });

  const fx = (year: number) => LEFTSPAN + (year - 1925) / 100 * WIDTH;
  const fy1 = (val: number) => val === -1 ? NaN : TOPSPAN + (1 - Math.pow(
    val / maxPopularity, 0.667
  )) * H[0];
  const fy2 = (val: number) => val === -1 ? NaN : TOPSPAN + H[0] + PADDING + (1 - val) * H[1];
  const fy3 = (val: number) => val === -1 ? NaN : TOPSPAN + H[0] + H[1] + PADDING * 2 + (
    0.5 + (
      val >= 0.5 ? Math.sqrt((val - 0.5) * 2) : -Math.sqrt((0.5 - val) * 2)
    ) / 2
  ) * H[2];

  return (
    <svg width={ WIDTH + LEFTSPAN + RIGHTSPAN } height={ HEIGHT }
      style={{
        background: "white",
        border:     "1px solid",
        fontSize:   FONTSIZE
      }} >
        {/* x axis */}
        <g key="xAxis" >
          {
            popularity[0].value.map(d => {
              return (
                <line key={ d[0] }
                  x1={ fx(d[0]) } x2={ fx(d[0]) }
                  y1={ TOPSPAN } y2={ HEIGHT - TOPSPAN }
                  style={{
                    stroke: d[0] % 10 ? "#9996" : "#999f"
                  }} />
              );
            })
          }
          {
            popularity[0].value.filter(d => d[0] % 10 === 0).map(d => {
              return (
                <text key={ "text-top-" + d[0] }
                  textAnchor="middle"
                  x={ fx(d[0]) } y={ TOPSPAN }
                  dy="-0.5em"
                  style={{
                    fill: "#444"
                  }} >
                    { d[0] }
                </text>
              );
            })
          }
        </g>
        {/* genre popularity */}
        <g key="genre-popularity" >
          <line key="top"
            x1={ fx(1925) } x2={ fx(2020.5) }
            y1={ TOPSPAN } y2={ TOPSPAN }
            style={{
              stroke: "#000"
            }} />
          <line key="bottom"
            x1={ fx(1925) } x2={ fx(2020.5) }
            y1={ TOPSPAN + H[0] } y2={ TOPSPAN + H[0] }
            style={{
              stroke: "#000"
            }} />
          {
            popularity.map((genre, j) => {
              const path = genre.value.map((d, i) => {
                return `${i?"L":"M"}${fx(d[0])},${fy1(d[1])}`;
              }).join(" ");
              return (
                <path key={ genre.genre }
                  d={ path }
                  style={{
                    fill: "none",
                    stroke: (Colors.byGenre as any)[genre.genre],
                    strokeWidth:  2,
                    opacity: state.genre[j] ? 1 : 0,
                    transition: "opacity 0.3s"
                  }} />
              );
            })
          }
          {
            [sumPopularity].map(genre => {
              const path = `M${fx(1925)},${fy1(0)} ` + genre.value.map(d => {
                return `L${fx(d[0])},${fy1(d[1])}`;
              }).join(" ") + ` V${fy1(0)} Z`;
              return (
                <path key={ genre.genre }
                  d={ path }
                  style={{
                    fill: "rgba(255,103,1,0.1)"
                  }} />
              );
            })
          }
          {
            popularity[0].value.filter(d => d[0] % 10 === 0).map(d => {
              return (
                <text key={ "text-bottom-" + d[0] }
                  textAnchor="middle"
                  x={ fx(d[0]) } y={ TOPSPAN + H[0] }
                  dy="1em"
                  style={{
                    fill: "#444"
                  }} >
                    { d[0] }
                </text>
              );
            })
          }
          <rect key="label"
            x={ 16 } y={ TOPSPAN + H[0] * 0.005 }
            width="220" height={ H[0] * 0.99 }
            rx="8" ry="8"
            style={{
              fill: "#fffd",
              stroke: "#999"
            }} />
          {
            popularity.map((p, i) => {
              const y = TOPSPAN + H[0] * (0.07 + 0.92 * ~~(i / 2) * 2 / (popularity.length - 1));
              const dx = (i % 2) * 24;

              return (
                <g key={ "label-" + p.genre } >
                  <text
                    x={ 96 + dx + (i % 2) * 22 } y={ y }
                    textAnchor={ i % 2 ? "start" : "end" }
                    dy="0.3em"
                    style={{
                      fill: "#444",
                      fontSize: "95%",
                      userSelect: "none"
                    }} >
                      { p.genre }
                  </text>
                  <path
                    d={ `M${102+dx},${y} h12` }
                    style={{
                      fill: "none",
                      stroke: (Colors.byGenre as any)[p.genre],
                      strokeWidth:  6
                    }} />
                  <rect
                    x={ 18.5 + (i % 2) * 103 } y={ y - 6 }
                    width={ 100 + (i % 2) * 12 } height={ 12 }
                    style={{
                      fill: "#fff",
                      opacity: state.genre[i] ? 0.05 : 0.6,
                      transition: "opacity 0.3s",
                      cursor: "pointer"
                    }}
                    onClick={
                      () => {
                        state.genre[i] = !state.genre[i];
                        setState({
                          ...state
                        });
                      }
                    } />
                </g>
              );
            })
          }
        </g>
        {/* style change */}
        <g key="style-change" >
          <line key="top"
            x1={ fx(1925) } x2={ fx(2020.5) }
            y1={ TOPSPAN + PADDING + H[0] } y2={ TOPSPAN + PADDING + H[0] }
            style={{
              stroke: "#000"
            }} />
          <line key="bottom"
            x1={ fx(1925) } x2={ fx(2020.5) }
            y1={ TOPSPAN + PADDING + H[0] + H[1] } y2={ TOPSPAN + PADDING + H[0] + H[1] }
            style={{
              stroke: "#000"
            }} />
          {
            changeAll.map((d, i) => {
              const min = Math.min(...d.data.map(p => p[1]));
              const max = Math.max(...d.data.map(p => p[1]));
              const style = labelPath(i);
              const path = d.data.filter(p => p[0] >= 1925).map((p, j) => {
                return `${j?"L":"M"}${fx(p[0])},${fy2((p[1]-min)/(max-min))}`
              }).join(" ");

              return (
                <path key={ d.label }
                  d={ path }
                  strokeDasharray={ style.dash }
                  style={{
                    fill: "none",
                    stroke: style.color,
                    strokeWidth:  style.w * 1.5,
                    opacity: state.label[i] ? 1 : 0.0,
                    transition: "opacity 0.3s"
                  }} />
              );
            })
          }
          <rect key="label"
            x={ 16 } y={ fy2(0.97) }
            width="160" height={ fy2(0.07) - fy2(0.97) }
            rx="8" ry="8"
            style={{
              fill: "#fffd",
              stroke: "#999"
            }} />
          {
            changeAll.map((d, i) => {
              const y = fy2(0.91 - 0.85 * i / changeAll.length);
              const style = labelPath(i);

              return (
                <g key={ "label-" + d.label } >
                  <text
                    x={ 132 } y={ y }
                    textAnchor="end"
                    dy="0.3em"
                    style={{
                      fill: "#444",
                      fontSize: "110%",
                      userSelect: "none"
                    }} >
                      { d.label }
                  </text>
                  <path
                    d={ `M${140},${y} h24` }
                    strokeDasharray={ style.dash }
                    style={{
                      fill: "none",
                      stroke: style.color,
                      strokeWidth:  style.w * 1.5
                    }} />
                  <rect
                    x={ 26 } y={ y - 10 }
                    width="140" height={ fy2(0.93) - fy2(1) }
                    style={{
                      fill: "#fff",
                      opacity: state.label[i] ? 0.05 : 0.6,
                      transition: "opacity 0.3s",
                      cursor: "pointer"
                    }}
                    onClick={
                      () => {
                        state.label[i] = !state.label[i];
                        setState({
                          ...state
                        });
                      }
                    } />
                </g>
              );
            })
          }
          {
            popularity[0].value.filter(d => d[0] % 10 === 0).map(d => {
              return (
                <text key={ "text-bottom-" + d[0] }
                  textAnchor="middle"
                  x={ fx(d[0]) } y={ TOPSPAN + PADDING + H[0] + H[1] }
                  dy="1em"
                  style={{
                    fill: "#444"
                  }} >
                    { d[0] }
                </text>
              );
            })
          }
        </g>
        {/* artists activity */}
        <g key="artists-activity" >
          <line key="top"
            x1={ fx(1925) } x2={ fx(2020.5) }
            y1={ fy3(0) } y2={ fy3(0) }
            style={{
              stroke: "#000"
            }} />
          <line key="bottom"
            x1={ fx(1925) } x2={ fx(2020.5) }
            y1={ fy3(1) } y2={ fy3(1) }
            style={{
              stroke: "#000"
            }} />
          {
            artists.map((d, i) => {
              const start = Math.max(
                1925,
                Math.min(...d.data.map(e => e[0])) - 1
              );
              const end = Math.min(
                2020,
                Math.max(...d.data.map(e => e[0])) + 1
              );
              let data: [number, number, number][] = [];
              for (let j = start; j <= end; j++) {
                data.push([
                  j,
                  riverPerYear[j - 1925][d.aid][0],
                  riverPerYear[j - 1925][d.aid][1]
                ]);
              }
              const path = data.map((e, j) => {
                return `${j?"L":"M"}${fx(e[0])},${fy3(e[1])}`
              }).join(" ") + data.reverse().map(e => {
                return `L${fx(e[0])},${fy3(e[2])+0.1}`
              }).join(" ");
              const name = d.name;
              return (
                <path key={ d.aid }
                  d={ path }
                  style={{
                    fill: Colors.byGenre[getGenreName(d.gid)],
                    stroke: "rgb(174,175,173)",
                    strokeWidth: 0.4,
                    fillOpacity: isArtistActive[d.aid] ? 0.8 : 0.8
                  }}
                  onMouseMove={
                    e => {
                      document.getElementById("focusLine")!.setAttribute("x2", e.pageX - 11 + "");
                      document.getElementById("focusLine")!.setAttribute("y2", e.pageY + "");
                    }
                  }
                  onMouseOver={
                    e => {
                      document.getElementById("focusAid")!.innerHTML = name;
                      document.getElementById("focusLine")!.setAttribute("x2", e.pageX - 11 + "");
                      document.getElementById("focusLine")!.setAttribute("y2", e.pageY + "");
                      e.currentTarget.style.fillOpacity = "1";
                    }
                  }
                  onMouseOut={
                    e => {
                      e.currentTarget.style.fillOpacity = "0.8";
                    }
                  } />
              );
            })
          }
          {
            popularity[0].value.filter(d => d[0] % 10 === 0).map(d => {
              return (
                <text key={ "text-bottom-" + d[0] }
                  textAnchor="middle"
                  x={ fx(d[0]) } y={ TOPSPAN + PADDING * 2 + H[0] + H[1] + H[2] }
                  dy="1em"
                  style={{
                    fill: "#444"
                  }} >
                    { d[0] }
                </text>
              );
            })
          }
          <rect key="background"
            x={ fx(1925) + 65 } y={ fy3(0.2) }
            width="140" height="28"
            style={{
              fill: "white",
              stroke: "#999"
            }} />
          <text key="focus" id="focusAid"
            x={ fx(1925) + 135 } y={ fy3(0.2) + 14 }
            dy="0.33em" textAnchor="middle"
            style={{
              fontWeight: 600
            }} >
              hover to check artist name
          </text>
          <line key="focusLine" id="focusLine"
            x1={ fx(1925) + 205 } x2={ fx(1925) + 205 }
            y1={ fy3(0.2) + 14 } y2={ fy3(0.2) + 14 }
            strokeDasharray="3,3"
            style={{
              stroke: "#111",
              strokeWidth: 2
            }} />
        </g>
    </svg>
  );
};


const labelPath = (idx: number): {color:string;dash:string|undefined;w:number;} => {
  return [{
    //  danceability  节奏律动感
    color:  "rgb(131,133,149)",
    w:      1.5,
    dash:   undefined
  }, {
    //  energy        旋律冲击性
    color:  "rgb(158,139,198)",
    w:      1.5,
    dash:   undefined
  }, {
    //  valence       正向心理反馈
    color:  "rgb(30,120,238)",
    w:      1.5,
    dash:   undefined
  }, {
    //  tempo         bps
    color:  "rgb(241,2,209)",
    w:      1.5,
    dash:   undefined
  }, {
    //  loudness      响度（分贝）
    color:  "rgb(185,169,134)",
    w:      1.5,
    dash:   undefined
  }, {
    //  mode          旋律重复性
    color:  "rgb(110,110,110)",
    w:      1.5,
    dash:   undefined
  }, {
    //  key           曲调（由C起自增，无法识别为-1）
    color:  "rgb(192,13,46)",
    w:      1.5,
    dash:   undefined
  }, {
    //  acousticness  非合成音比例
    color:  "rgb(57,96,95)",
    w:      2,
    dash:   "4,3"
  }, {
    //  instrumentalness  乐器音比例
    color:  "rgb(193,92,0)",
    w:      2,
    dash:   "4,3"
  }, {
    //  liveness          临场感
    color:  "rgb(148,151,194)",
    w:      2,
    dash:   "4,3"
  }, {
    //  speechiness       朗诵比例
    color:  "rgb(36,52,60)",
    w:      2,
    dash:   "4,3"
  }, {
    //  explicit          歌词是否有限制级因素
    color:  "rgb(248,180,2)",
    w:      2,
    dash:   "4,3"
  }, {
    //  duration_ms       时长
    color:  "rgb(113,137,74)",
    w:      2,
    dash:   "2,2"
  }][idx];
};


export default Q5Development;
