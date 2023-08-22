'use client';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Carbohydrates', value: 45 },
  { name: 'Proteins', value: 30 },
  { name: 'Fats', value: 25 },
];

const COLORS = ['#3182ce', '#E53E3E', '#805AD5'];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" className={"self-end -mb-8"}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={({ name }) => name}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
