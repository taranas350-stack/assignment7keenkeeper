"use client";
import { useActivity } from "@/context/ActivityContext";
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';

const StatsPage = () => {
    const { activities } = useActivity();

    const statsData = [
        { name: 'Calls', value: activities.filter(a => a.type === "call").length, fill: '#244d3f' },
        { name: 'Texts', value: activities.filter(a => a.type === "text").length, fill: '#7e35e1' },
        { name: 'Videos', value: activities.filter(a => a.type === "video").length, fill: '#37a163' },
    ];

    const chartData = statsData.filter(item => item.value > 0);

    return (
        <div className="container mx-auto min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Friendship Analytics</h2>

                <div className="border border-gray-300 rounded-lg bg-gray-50 shadow p-10">

                    <div className="justify-center items-center h-100 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData.length > 0 ? chartData : [{ name: 'Empty', value: 1, fill: '#959595' }]}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    cornerRadius="50%"
                                    paddingAngle={8}
                                    dataKey="value"
                                    isAnimationActive={true}
                                >
                                    {chartData.map((entry, i) => (
                                        <Cell key={`cell-${i}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip/>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;