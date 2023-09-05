'use client';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Carbohydrates', value: 45 },
  { name: 'Proteins', value: 30 },
  { name: 'Fats', value: 25 },
];

const COLORS = ['#3182ce', '#E53E3E', '#805AD5'];

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow">
        <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PieChartComponent = () => {
  return (
    <div className={"-mb-16 h-full w-full self-center overflow-visible"}>
    <ResponsiveContainer width="100%" height="100%" className={"self-center overflow-visible"}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx={"50%"}
          cy={"50%"}
          nameKey="name"
          outerRadius={"70%"}
          label={({ name }) => name}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
