"use client"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

import { countrySignals } from "@/lib/signal-data";
import type {SignalType} from "@/types/signal"

type MacroChartProps = {
    countryCode: string;
    signalType: SignalType
}

export default function MacroChart({countryCode, signalType}: MacroChartProps){
    const country = countrySignals.find((c) => c.countryCode === countryCode);
    const data = country?.signals?.[signalType] ?? [];

    if(data.length === 0){
        return <div className="text-sm text-gray-500 italic">No signal data available</div>
    }

    return (
        <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis domain={[0, 1]}/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="score" stroke="#0ea5e9" strokeWidth={2} dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}