/*
 * @Author: Kanata You 
 * @Date: 2021-02-06 15:55:19 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-02-06 21:07:37
 */

import React, { useState } from "react";
import Colors from "../constance/colors";
import poprock from "../constance/poprock";
import poprockArtists from "../constance/poprockArtists";


const popularity: {year: number; value: number;}[] = [
  {"year": 1921, "value": 0},
	{"year": 1922, "value": 0},
	{"year": 1923, "value": 0},
	{"year": 1924, "value": 0},
	{"year": 1925, "value": 0.058823529411764705},
	{"year": 1926, "value": 0.0},
	{"year": 1927, "value": 0.0},
	{"year": 1928, "value": 0.0},
	{"year": 1929, "value": 0.0},
	{"year": 1930, "value": 0.03225806451612903},
	{"year": 1931, "value": 0.0},
	{"year": 1932, "value": 0.0},
	{"year": 1933, "value": 0.0},
	{"year": 1934, "value": 0.0},
	{"year": 1935, "value": 0.0},
	{"year": 1936, "value": 0.0},
	{"year": 1937, "value": 0.003610108303249098},
	{"year": 1938, "value": 0.0},
	{"year": 1939, "value": 0.0},
	{"year": 1940, "value": 0.0},
	{"year": 1941, "value": 0.007526881720430108},
	{"year": 1942, "value": 0.3463687150837989},
	{"year": 1943, "value": 0.0},
	{"year": 1944, "value": 0.0},
	{"year": 1945, "value": 0.0008987417615338526},
	{"year": 1946, "value": 0.0},
	{"year": 1947, "value": 0.0062266500622665},
	{"year": 1948, "value": 0.0},
	{"year": 1949, "value": 0.0},
	{"year": 1950, "value": 0.0012140833670578712},
	{"year": 1951, "value": 0.0017386264850767893},
	{"year": 1952, "value": 0.0},
	{"year": 1953, "value": 0.0},
	{"year": 1954, "value": 0.014575342465753425},
	{"year": 1955, "value": 0.0020876826722338203},
	{"year": 1956, "value": 0.04552555233206872},
	{"year": 1957, "value": 0.07931902955335222},
	{"year": 1958, "value": 0.13664945375346893},
	{"year": 1959, "value": 0.13525157716571784},
	{"year": 1960, "value": 0.16678995385536652},
	{"year": 1961, "value": 0.18208776015136077},
	{"year": 1962, "value": 0.2049511960754565},
	{"year": 1963, "value": 0.3333973971775301},
	{"year": 1964, "value": 0.3108860309068727},
	{"year": 1965, "value": 0.4221710370895347},
	{"year": 1966, "value": 0.5467164739948277},
	{"year": 1967, "value": 0.5591624910522548},
	{"year": 1968, "value": 0.5270075665878352},
	{"year": 1969, "value": 0.6604561763198358},
	{"year": 1970, "value": 0.7140841995667434},
	{"year": 1971, "value": 0.6469357929265045},
	{"year": 1972, "value": 0.5962968755430438},
	{"year": 1973, "value": 0.643575359053356},
	{"year": 1974, "value": 0.6535821380830232},
	{"year": 1975, "value": 0.5936286592159908},
	{"year": 1976, "value": 0.5948789387494917},
	{"year": 1977, "value": 0.6866331497885244},
	{"year": 1978, "value": 0.6152849524382701},
	{"year": 1979, "value": 0.6930431448386236},
	{"year": 1980, "value": 0.6548163988105183},
	{"year": 1981, "value": 0.6620239652916465},
	{"year": 1982, "value": 0.6594178169843193},
	{"year": 1983, "value": 0.7288830926552892},
	{"year": 1984, "value": 0.6564571351469866},
	{"year": 1985, "value": 0.6971440210011766},
	{"year": 1986, "value": 0.6586397315811547},
	{"year": 1987, "value": 0.6385671622924141},
	{"year": 1988, "value": 0.6729499150360002},
	{"year": 1989, "value": 0.654294687849944},
	{"year": 1990, "value": 0.5933100795993197},
	{"year": 1991, "value": 0.5339328713941717},
	{"year": 1992, "value": 0.5667057666764417},
	{"year": 1993, "value": 0.534288333988259},
	{"year": 1994, "value": 0.5984859766691485},
	{"year": 1995, "value": 0.5494001471821465},
	{"year": 1996, "value": 0.5402727786011716},
	{"year": 1997, "value": 0.5488210159835417},
	{"year": 1998, "value": 0.5189800822925389},
	{"year": 1999, "value": 0.5763506330337291},
	{"year": 2000, "value": 0.5922296124603897},
	{"year": 2001, "value": 0.5606062710993177},
	{"year": 2002, "value": 0.6094977386336586},
	{"year": 2003, "value": 0.6182536424085624},
	{"year": 2004, "value": 0.6042934281575135},
	{"year": 2005, "value": 0.5742623337792115},
	{"year": 2006, "value": 0.5926637502955782},
	{"year": 2007, "value": 0.6323450517546074},
	{"year": 2008, "value": 0.632769197875035},
	{"year": 2009, "value": 0.6026836133396533},
	{"year": 2010, "value": 0.5815215428509516},
	{"year": 2011, "value": 0.5802946981164613},
	{"year": 2012, "value": 0.656129967015013},
	{"year": 2013, "value": 0.639509640082939},
	{"year": 2014, "value": 0.5830196536229434},
	{"year": 2015, "value": 0.5891030452892951},
	{"year": 2016, "value": 0.5578483151534454},
	{"year": 2017, "value": 0.5798707944824737},
	{"year": 2018, "value": 0.5370897771301785},
	{"year": 2019, "value": 0.5364889002296505},
  {"year": 2020, "value": 0.4774215358337484}
];

const WIDTH   = 1400;
const HEIGHT  = 800;
const FONTSIZE  = 13;
const LEFTSPAN  = 70;
const TOPSPAN   = 30;
const H         = [100, 260, 346];
const PADDING   = 17;

let sumPerYear: number[] = [];
let riverPerYear: {[aid: number]: [number, number];}[] = [];
let countPerYear: number[] = [];
for (let y = 1921; y <= 2020; y++) {
  sumPerYear.push(0);
  riverPerYear.push({});
}

const artists = poprockArtists;

let isArtistActive: {[aid: number]: boolean;} = {};

const mr = (val: number) => Math.pow(val, 1);

artists.forEach(d => {
  d.data.forEach(e => {
    sumPerYear[e[0] - 1921] += mr(e[1]);
  });
});
const max = Math.max(...sumPerYear);
const proj = (val: number) => val / max;
for (let y = 1921; y <= 2020; y++) {
  // countPerYear.push(0);
  countPerYear.push((1 - proj(sumPerYear[y - 1921])) / 2);
}

artists.forEach(d => {
  const data = d.data.sort((a, b) => a[0] - b[0]);
  const dict: {[year: number]: number;} = {};
  data.forEach(e => {
    dict[e[0]] = mr(e[1]);
  });
  const start = Math.max(
    1921,
    data[0][0] - 1
  );
  const end = Math.min(
    2020,
    data[data.length - 1][0] + 1
  );
  for (let j = start; j <= end; j++) {
    const year = j - 1921;
    const h = proj(dict[j] ?? 0);
    if (h >= proj(sumPerYear[year]) * 0.05) {
      isArtistActive[d.aid] = true;
    }
    riverPerYear[year][d.aid] = [countPerYear[year], countPerYear[year] + h];
    countPerYear[year] += h;
  }
});


const Q6Popularity: React.FC = () => {
  const [state, setState] = useState<{label: boolean[];}>({
    label: Object.entries(labelPath).map(_ => true)
  });

  const fx = (year: number) => LEFTSPAN + (year - 1921) / 100 * (WIDTH - LEFTSPAN * 2);
  const fy1 = (val: number) => TOPSPAN + (1 - val) * H[0];
  const fy2 = (val: number) => TOPSPAN + H[0] + PADDING + (1 - val) * H[1];
  const fy3 = (val: number) => TOPSPAN + H[0] + H[1] + PADDING * 2 + (
    0.5 + (
      val >= 0.5 ? Math.sqrt((val - 0.5) * 2) : -Math.sqrt((0.5 - val) * 2)
    ) / 2
  ) * H[2];

  const pathPopu = popularity.map((d, i) => {
    return `${i?"L":"M"}${fx(d.year)},${fy1(d.value)}`;
  }).join(" ");
  const fillPopu = `M${fx(1921)},${fy1(0)} ` + popularity.map(d => {
    return `L${fx(d.year)},${fy1(d.value)+1}`;
  }).join(" ") + ` V${fy1(0)} Z`;

  return (
    <svg width={ WIDTH } height={ HEIGHT }
      style={{
        background: "white",
        border:     "1px solid",
        fontSize:   FONTSIZE
      }} >
        {/* x axis */}
        <g key="xAxis" >
          {
            popularity.map(d => {
              return (
                <line key={ d.year }
                  x1={ fx(d.year) } x2={ fx(d.year) }
                  y1={ TOPSPAN } y2={ HEIGHT - TOPSPAN }
                  style={{
                    stroke: d.year % 10 ? "#9996" : "#999f"
                  }} />
              );
            })
          }
          {
            popularity.filter(d => d.year % 10 === 0).map(d => {
              return (
                <text key={ "text-top-" + d.year }
                  textAnchor="middle"
                  x={ fx(d.year) } y={ TOPSPAN }
                  dy="-0.5em"
                  style={{
                    fill: "#444"
                  }} >
                    { d.year }
                </text>
              );
            })
          }
        </g>
        {/* genre popularity */}
        <g key="genre-popularity" >
          <line key="top"
            x1={ fx(1921) } x2={ fx(2020.5) }
            y1={ fy1(0) } y2={ fy1(0) }
            style={{
              stroke: "#000"
            }} />
          <line key="bottom"
            x1={ fx(1921) } x2={ fx(2020.5) }
            y1={ fy1(1) } y2={ fy1(1) }
            style={{
              stroke: "#000"
            }} />
          <path key="path1"
            d={ fillPopu }
            style={{
              fill: Colors.byGenre["Pop/Rock"],
              opacity: 0.3
            }} />
          <path key="path0"
            d={ pathPopu }
            style={{
              fill: "none",
              stroke: Colors.byGenre["Pop/Rock"],
              strokeWidth:  2
            }} />
          {
            popularity.filter(d => d.year % 10 === 0).map(d => {
              return (
                <text key={ "text-bottom-" + d.year }
                  textAnchor="middle"
                  x={ fx(d.year) } y={ TOPSPAN + H[0] }
                  dy="1em"
                  style={{
                    fill: "#444"
                  }} >
                    { d.year }
                </text>
              );
            })
          }
        </g>
        {/* style change */}
        <g key="style-change" >
          <line key="top"
            x1={ fx(1921) } x2={ fx(2020.5) }
            y1={ fy2(0) } y2={ fy2(0) }
            style={{
              stroke: "#000"
            }} />
          <line key="bottom"
            x1={ fx(1921) } x2={ fx(2020.5) }
            y1={ fy2(1) } y2={ fy2(1) }
            style={{
              stroke: "#000"
            }} />
          {
            poprock.map((d, i) => {
              const min = Math.min(...d.data.map(p => p[1]));
              const max = Math.max(...d.data.map(p => p[1]));
              const style = labelPath(i);

              return (
                <path key={ d.label }
                  d={
                    d.data.map((p, j) => {
                      return `${j?"L":"M"}${fx(p[0])},${fy2((p[1]-min)/(max-min))}`
                    }).join(" ")
                  }
                  strokeDasharray={ style.dash }
                  style={{
                    fill: "none",
                    stroke: style.color,
                    strokeWidth:  style.w * 1.5,
                    opacity: state.label[i] ? 1 : 0.2,
                    transition: "opacity 0.3s"
                  }} />
              );
            })
          }
          <rect key="label"
            x={ fx(1921) + 6 } y={ fy2(0.97) }
            width="160" height={ fy2(0.07) - fy2(0.97) }
            rx="8" ry="8"
            style={{
              fill: "#fffd",
              stroke: "#999"
            }} />
          {
            poprock.map((d, i) => {
              const y = fy2(0.91 - 0.85 * i / poprock.length);
              const style = labelPath(i);

              return (
                <g key={ "label-" + d.label } >
                  <text
                    x={ fx(1921) + 122 } y={ y }
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
                    d={ `M${fx(1921)+130},${y} h24` }
                    strokeDasharray={ style.dash }
                    style={{
                      fill: "none",
                      stroke: style.color,
                      strokeWidth:  style.w * 1.5
                    }} />
                  <rect
                    x={ fx(1921) + 16 } y={ y - 10 }
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
            popularity.filter(d => d.year % 10 === 0).map(d => {
              return (
                <text key={ "text-bottom-" + d.year }
                  textAnchor="middle"
                  x={ fx(d.year) } y={ TOPSPAN + H[0] + H[1] + PADDING }
                  dy="1em"
                  style={{
                    fill: "#444"
                  }} >
                    { d.year }
                </text>
              );
            })
          }
        </g>
        {/* artists activity */}
        <g key="artists-activity" >
          <line key="top"
            x1={ fx(1921) } x2={ fx(2020.5) }
            y1={ fy3(0) } y2={ fy3(0) }
            style={{
              stroke: "#000"
            }} />
          <line key="bottom"
            x1={ fx(1921) } x2={ fx(2020.5) }
            y1={ fy3(1) } y2={ fy3(1) }
            style={{
              stroke: "#000"
            }} />
          {
            artists.map((d, i) => {
              const start = Math.max(
                1921,
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
                  riverPerYear[j - 1921][d.aid][0],
                  riverPerYear[j - 1921][d.aid][1]
                ]);
              }
              const path = data.map((e, j) => {
                return `${j?"L":"M"}${fx(e[0])},${fy3(e[1])}`
              }).join(" ") + data.reverse().map(e => {
                return `L${fx(e[0])},${fy3(e[2])+0.1}`
              }).join(" ");
              const id = d.aid + "";
              return (
                <path key={ d.aid }
                  d={ path }
                  style={{
                    fill: Colors.rainbow[i % 6],
                    opacity: isArtistActive[d.aid] ? 1 : 0.33
                  }}
                  onClick={
                    () => {
                      document.getElementById("focusAid")!.innerHTML = id;
                    }
                  } />
              );
            })
          }
          {
            popularity.filter(d => d.year % 10 === 0).map(d => {
              return (
                <text key={ "text-bottom-" + d.year }
                  textAnchor="middle"
                  x={ fx(d.year) } y={ TOPSPAN + H[0] + H[1] + H[2] + PADDING * 2 }
                  dy="1em"
                  style={{
                    fill: "#444"
                  }} >
                    { d.year }
                </text>
              );
            })
          }
          <rect key="background"
            x={ fx(1921) + 80 } y={ fy3(0.2) }
            width="110" height="28"
            style={{
              fill: "white",
              stroke: "#999"
            }} />
          <text key="focus" id="focusAid"
            x={ fx(1921) + 135 } y={ fy3(0.2) + 14 }
            dy="0.33em" textAnchor="middle"
             >
              hover to see
          </text>
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


export default Q6Popularity;
