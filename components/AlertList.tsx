"use client"

import {alerts} from "@/lib/alerts-data"
import AlertCard from "./AlertCard"

export default function AlertList(){
    return (
        <div className="space-y-2">
            {alerts.map(alert=>(
                <AlertCard key={alert.id} alert={alert}/>
            ))}
        </div>
    )
}