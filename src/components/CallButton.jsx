"use client";
import { useActivity } from "@/context/ActivityContext";
import React from 'react';
import { LuPhoneCall } from "react-icons/lu";

const CallButton = ({ friend }) => {
    const { addActivity } = useActivity();

    const handleCall = () => {
        addActivity({
            type: "call",
            name: friend.name,
            time: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })
        });
    };

    return (

        <button onClick={handleCall} className="flex flex-col font-bold items-center justify-center p-4 bg-gray-100 shadow-lg border-gray-300 rounded-xl gap-2">
            <LuPhoneCall className="font-bold text-2xl" />
            <span className="font-bold text-lg">Call</span>
        </button>
    );
};

export default CallButton;