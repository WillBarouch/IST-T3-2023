'use client';
/* eslint-disable */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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


const formatAMPM = (date:Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  return `${(hours % 12) || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { time: Date } }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const timeLabel = formatAMPM(payload[0].payload.time);
    return (
      <div className="bg-white p-2 rounded shadow">
        <p>{`Time: ${timeLabel}`}</p>
        <p>{`Calories: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const LineChartComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-64"
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            tickFormatter={formatAMPM} // Format time labels
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="calories" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default LineChartComponent;