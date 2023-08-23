'use client';
import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine, Cell
} from 'recharts';

const sampleData = [
  { time: new Date(2023, 7, 1, 12, 0), points: 30 },
  { time: new Date(2023, 7, 2, 14, 30), points: 20 },
  { time: new Date(2023, 7, 3, 9, 45), points: 20 },
  { time: new Date(2023, 7, 4, 8, 15), points: 15 },
  { time: new Date(2023, 7, 5, 11, 0), points: 28 },
  { time: new Date(2023, 7, 6, 16, 45), points: 40 },
  { time: new Date(2023, 7, 7, 10, 30), points: 12 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
      payload: any;
      time:Date,points:number }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow">
        <p>{payload[0].payload.time.toLocaleDateString('en-US', { weekday: 'short' })}</p>
        <p>{`Points: ${payload[0].payload.points}`}</p>
      </div>
    );
  }
  return null;
};

const goalValue = 30;

const averageValue = sampleData.reduce((sum, data) => sum + data.points, 0) / sampleData.length;

const HistogramChart = () => {
  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <BarChart data={sampleData} margin={{ top: 20, right: 0, left: 0, bottom: -10 }} barGap={0}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tickFormatter={(time) => time.toLocaleDateString('en-US', { weekday: 'short' })} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="points" fill="#8884d8" barSize={100} radius={[10, 10, 0, 0]}>
          {
            sampleData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.points >= goalValue ? '#38A169' : '#DD6B20'} />
            ))
          }
        </Bar>
        <ReferenceLine y={goalValue} label="Goal" stroke="#000" strokeDasharray="3 3" isFront />
        <ReferenceLine y={averageValue} label="Average" stroke="#000" strokeDasharray="3 3" isFront />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistogramChart;
