import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    { id: 1001, name: 'A1', mark: 60 },
    { id: 1002, name: 'A2', mark: 60 },
    { id: 1003, name: 'A3', mark: 60 },
    { id: 1004, name: 'A4', mark: 60 },
    { id: 1005, name: 'A5', mark: 60 },
    { id: 1006, name: 'A6', mark: 60 },
    { id: 1007, name: 'A7', mark: 60 },
];

export default function App() {
    return (
        <AreaChart className="area-chart"
            width={500}
            height={400}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
}
