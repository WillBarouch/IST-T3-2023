'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const generateRandomHeartRateData = (startTime:any, endTime:any, intervalMinutes:number) => {
  const data = [];
  const intervalMilliseconds = intervalMinutes * 60000; // Convert minutes to milliseconds
  const numberOfDataPoints = Math.ceil((endTime - startTime) / intervalMilliseconds);

  for (let i = 0; i < numberOfDataPoints; i++) {
    const currentTime = new Date(startTime.getTime() + i * intervalMilliseconds);
    const heartRate = Math.floor(Math.random() * (123 - 82 + 1)) + 82; // Generate a random heart rate between 82 and 123 bpm

    data.push({ time: currentTime, heartRate });
  }

  return data;
};

const startTime = new Date(2023, 7, 22, 6, 0); // Start time
const endTime = new Date(2023, 7, 22, 6, 46); // End time (46 minutes later)
const intervalMinutes = 1; // Data collected at 1-minute intervals
// Generate 46 minutes of heart rate data with an average around 96 bpm
const data = generateRandomHeartRateData(startTime,endTime,intervalMinutes);



const formatElapsedTime = (date: Date) => {
  const minutes = date.getMinutes() - data[0].time.getMinutes();
  return `${minutes} min`;
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { time: Date } }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const timeLabel = formatElapsedTime(payload[0].payload.time);
    return (
      <div className="bg-white p-2 rounded-lg shadow">
        <p>{timeLabel}</p>
        <p>{`Heart Rate: ${payload[0].value} bpm`}</p>
      </div>
    );
  }
  return null;
};

const HRChart = () => {
  return (
      <div className={"h-1/4 3xl:h-1/3 -mt-16 3xl:-mt-36"}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            tickFormatter={formatElapsedTime}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="heartRate" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
  );
};


export default HRChart;