import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
const data = fetch('/booksData.json').then(res => res.json())

const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props;

  const path = `
    M${x},${y + height}
    L${x + width / 2},${y}
    L${x + width},${y + height}
    Z
  `;

  return <path d={path} fill={fill} />;
};
const Charts = () => {
    const fetchData = use(data)
    console.log(fetchData)
    return (
        <div>
            <h1>this i chart sections</h1>

            <BarChart width={700} height={400} data={fetchData}>
                <XAxis dataKey={'category'}/>
                <YAxis dataKey={'totalPages'}></YAxis>
                <Bar dataKey={'totalPages'}   fill="#8884d8" shape={<TriangleBar />}></Bar>
            </BarChart>
        </div>
    );
};

export default Charts;