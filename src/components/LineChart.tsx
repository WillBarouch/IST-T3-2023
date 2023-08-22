'use client';
import { useState, useEffect } from 'react';
import { LinePath } from '@visx/shape';
import { scaleLinear, scaleTime } from '@visx/scale';
import { curveMonotoneX } from '@visx/curve';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { ParentSize } from '@visx/responsive';
import { motion } from 'framer-motion';

const data = [
  { time: new Date(2023, 7, 22, 6, 0), calories: 300 },
  { time: new Date(2023, 7, 22, 7, 0), calories: 110 },
  { time: new Date(2023, 7, 22, 8, 0), calories: 240 },
  // Add more data points
  { time: new Date(2023, 7, 22, 9, 0), calories: 150 },
  { time: new Date(2023, 7, 22, 10, 0), calories: 210 },
  { time: new Date(2023, 7, 22, 11, 0), calories: 280 },
  { time: new Date(2023, 7, 22, 12, 0), calories: 180 },
  { time: new Date(2023, 7, 22, 13, 0), calories: 220 },
  { time: new Date(2023, 7, 22, 14, 0), calories: 120 },
  { time: new Date(2023, 7, 22, 15, 0), calories: 260 },
];

const LineChart = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const margin = { top: 20, right: 30, bottom: 50, left: 40 };

  const xScale = scaleTime({
    domain: [Math.min(...data.map(d => d.time)), Math.max(...data.map(d => d.time))],
    range: [margin.left, dimensions.width - margin.right],
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.calories))],
    range: [dimensions.height - margin.bottom, margin.top],
    nice: true,
  });

  useEffect(() => {
    const boundingRect = document.getElementById('lineChartContainer')?.getBoundingClientRect() || { width: 0, height: 0 };
    setDimensions({ width: boundingRect.width, height: boundingRect.height });
  }, []);

  return (
    <div id='lineChartContainer' className="w-full h-full">
      <ParentSize>
        {({ width, height }) => (
          <motion.svg width={width} height={height}>
            <AxisBottom
              scale={xScale}
              top={height - margin.bottom}
              left={margin.left}
              tickFormat={(value) => {
                const date = new Date(value);
                return `${date.getHours()}:00`;
              }}
              tickStroke="#777"
              tickLabelProps={() => ({
                fontSize: 10, // Adjust the font size as needed
                textAnchor: 'middle', // Center the tick labels
              })}
            />
            <AxisLeft
              scale={yScale}
              top={margin.top}
              left={margin.left}
              tickStroke="#777"
              tickLabelProps={() => ({
                fontSize: 10, // Adjust the font size as needed
                textAnchor: 'end', // Align tick labels to the end of the ticks
              })}
            />
            <LinePath
              data={data}
              x={d => xScale(d.time)}
              y={d => yScale(d.calories)}
              curve={curveMonotoneX}
              stroke="#f00"
              strokeWidth={3}
              strokeLinecap="round"
            />
          </motion.svg>
        )}
      </ParentSize>
    </div>
  );
};

export default LineChart;
