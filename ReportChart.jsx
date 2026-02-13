import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportChart = ({ income, expense }) => {
    const data = [
        { name: 'Income', value: income },
        { name: 'Expense', value: expense },
    ];

    const COLORS = ['#10B981', '#F43F5E']; // Emerald vs Rose

    if (income === 0 && expense === 0) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Financial Overview</h3>
                <p className="text-gray-400">Add transactions to see the report.</p>
            </div>
        )
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Financial Overview</h3>
            <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `LKR ${value.toLocaleString()}`} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ReportChart;
