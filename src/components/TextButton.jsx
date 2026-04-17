'use client';
import { useActivity } from '@/context/ActivityContext';
import React from 'react';
import { BiCommentDots } from 'react-icons/bi';

const TextButton = ({ friend }) => {

    const { addActivity } = useActivity();

    const handleText = () => {
        addActivity({
            type: "text",
            name: friend.name,
            time: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })
        });
    };

    return (
        <button onClick={handleText} className="flex flex-col font-bold items-center justify-center p-4 bg-gray-100 shadow-lg border-gray-300 rounded-xl gap-2">
            <BiCommentDots className="font-bold text-2xl" />
            <span className="font-bold text-lg">Text</span>
        </button>
    );
};

export default TextButton;