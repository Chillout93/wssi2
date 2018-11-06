import * as React from 'react';
import { Pie, PieChart, Tooltip, Cell } from 'recharts';

export const PieChart2 = (props: any) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <PieChart width={200} height={200}>
                <Pie dataKey={"value"} data={props.data} innerRadius={40} outerRadius={60} fill="#82ca9d">
                    {props.data.map((entry: any, index: any) => <Cell fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
}
