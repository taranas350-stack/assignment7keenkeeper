"use client";

import { useActivity } from "@/context/ActivityContext";
import { LuPhoneCall } from "react-icons/lu";
import { BiCommentDots } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { useState } from "react";

const TimelinePage = () => {
    const { activities } = useActivity();
    const [filter, setFilter] = useState("all");

    const activityConfig = {
        call: {
            icon: <LuPhoneCall className="text-2xl text-green-600" />,
            label: "Meetup",
        },
        text: {
            icon: <BiCommentDots className="text-2xl text-blue-600" />,
            label: "Text",
        },
        video: {
            icon: <IoVideocamOutline className="text-2xl text-purple-600" />,
            label: "Video",
        },
    };

    // --- MAIN FIX START ---
    // Filter logic: jodi 'all' hoy sob dekhabe, na hole type match korabe
    const filteredActivities = activities.filter((item) => {
        if (filter === "all") return true;
        return item.type === filter;
    });
    // --- MAIN FIX END ---

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Timeline</h2>

                <div className="mb-6">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2 border rounded-lg bg-white text-green-700 cursor-pointer"
                    >
                        <option value="all">All Activities</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                    </select>
                </div>

                {/* filteredActivities use korun activities er bodole */}
                {filteredActivities.length === 0 ? (
                    <p className="text-gray-400 text-center mt-10">
                        No {filter !== "all" ? filter : ""} activity yet...
                    </p>
                ) : (
                    filteredActivities.map((item, index) => {
                        const config = activityConfig[item.type];

                        return (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-xl shadow-sm mb-4 flex items-center gap-4 border border-slate-100 transition-all hover:shadow-md"
                            >
                                <div className="bg-slate-100 p-3 rounded-full">
                                    {config?.icon}
                                </div>

                                <div className="space-y-1">
                                    <p className="text-xl md:text-2xl space-x-2 text-gray-800">
                                        <span className="text-green-950 font-bold">
                                            {config?.label}
                                        </span>
                                        <span className="pr-2 text-slate-400 font-normal">with</span>
                                        <span className="font-semibold">{item.name}</span>
                                    </p>
                                    <p className="text-gray-500 text-sm md:text-lg">
                                        {item.time}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default TimelinePage;