'use client';
import { useActivity } from '@/context/ActivityContext';
import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';

const VideoButton = ({ friend }) => {

    const { addActivity } = useActivity();

    const handleVideo = () => {
        addActivity({
            type: "video",
            name: friend.name,
            time: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })
        });
    };


    return (
        <button onClick={handleVideo} className="flex flex-col font-bold items-center justify-center p-4 bg-gray-100 shadow-lg border-gray-300 rounded-xl gap-2">
            <IoVideocamOutline className="font-bold text-2xl text-center" />
            <span className="block">Video</span>
        </button>
        // <button onClick={handleVideo}>
        //     <IoVideocamOutline className="font-bold text-2xl" /> Video
        // </button>
    );
};

export default VideoButton;