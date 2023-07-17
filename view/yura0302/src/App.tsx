// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const App = () => {
  const svgRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [allData, setAllData] = useState([]);

  const data = `통화,2022-01-31,2022-02-28,2022-03-31,2022-04-29,2022-05-31,2022-06-30,2022-07-29,2022-08-31,2022-09-30,2022-10-31,2022-11-30,2022-12-30
USD,1202.4,1202.7,1210.8,1269.4,1245.8,1292.9,1304,1347.5,1434.8,1419.3,1331.5,1267.3
JPY,1042.8,1041.52,992.74,970.16,975.61,946.45,970.53,970.65,993.25,961.19,959.54,953.18
EUR,1340.07,1342.09,1351.13,1332.74,1342.29,1350.05,1329.3,1350.26,1408.83,1413.34,1374.31,1351.2
CNH,189.34,190.41,190.02,192.03,186.4,192.75,193.35,194.84,199.66,195.94,184.64,181.44
HKD,154.35,154.03,154.69,161.78,158.73,164.77,166.12,171.68,182.78,180.83,170.48,162.55`;

  useEffect(() => {
    const parseData = d3.csvParse(data);
    const formatData = parseData.map((d) => ({
      currency: d.통화,
      values: Object.keys(d)
        .filter((key) => key !== '통화')
        .map((key) => ({ date: new Date(key), value: +d[key] })),
    }));
  });
  setAllData(formatData);

  const x = d3
    .scaleUtc()
    .domain(d3.extent(data, (d) => d.date))
    .range([0, width])
    .nice();

  const xAxis = d3.axisBottom(x).tickFormat((d) => d3.timeFormat('%b %d')(d));
  svg.append('g').attr('transform', `translate(0, ${height})`).call(xAxis);

  const svg = d3.select;

  return <div></div>;
};

export default App;
