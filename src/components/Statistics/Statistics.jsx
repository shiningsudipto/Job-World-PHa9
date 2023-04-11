import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {

    const data = [
        { id: 1001, name: 'A1', mark: 60 },
        { id: 1002, name: 'A2', mark: 60 },
        { id: 1003, name: 'A3', mark: 60 },
        { id: 1004, name: 'A4', mark: 60 },
        { id: 1005, name: 'A5', mark: 60 },
        { id: 1006, name: 'A6', mark: 60 },
        { id: 1007, name: 'A7', mark: 60 },
        // { id: 1008, name: 'A8', mark: 60 },
    ];
    return (
        <div className='flex justify-center mt-8'>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="name" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                {/* <Line type="monotone" dataKey="id" stroke="#ff7300" /> */}
                {/* <Scatter dataKey="cnt" fill="red" /> */}
            </ComposedChart>
        </div>
    );
};

export default Statistics;