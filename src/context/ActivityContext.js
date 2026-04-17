"use client";
import { createContext, useContext, useState } from "react";

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);

    const addActivity = (activity) => {
        setActivities(prev => [activity, ...prev]);
    };

    return (
        <ActivityContext.Provider value={{ activities, addActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};

export const useActivity = () => useContext(ActivityContext);