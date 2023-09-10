'use client';
import React, { Component } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const dataSteps = [
  {
    name: 'Steps',
    val: 8523,
    max: 14000,
    fill: '#db6a21',
  },
];

const dataCalories = [
  {
    name: 'Calories',
    val: 1200,
    max: 1200,
    fill: '#38a069',
  },
];

// @ts-ignore
const CustomLabel = ({ value, max, goalMet }) => {
  const text = goalMet? `${max} \n goal \n met!`  : `${value} of \n ${max} \n goal.`
  const lines = text.split('\n');
  const cx = "50%";
  return (
    <text cx={cx} textAnchor="middle" y="25%" fill="#000" className="text-center whitespace-normal font-semibold text-lg 2xl:text-xl 3xl:text-2xl">
            {lines.map((line, index) => (
              <tspan key={index} x={cx} dy="1.2em">
                {line}
              </tspan>
      ))}
    </text>
  );
};

class RadialChart extends Component {
  render() {
    // @ts-ignore
    const { steps } = this.props;
    const data = steps ? dataSteps : dataCalories;
    const goalMet = data[0].val === data[0].max;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="90%"
          outerRadius="110%"
          barSize={20}
          data={data}
          startAngle={225}
          endAngle={-45}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, data[0].max]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            label={<CustomLabel value={data[0].val} max={data[0].max} goalMet={goalMet} />}
            background={{ fill: "#d8dee9"}}
            dataKey="val"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

export default RadialChart;
