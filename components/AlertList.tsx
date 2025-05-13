"use client"

import {alerts} from "@/lib/alerts-data"
import { useAlertStore } from "@/store/useAlertStore"
import {useState} from "react"
import AlertCard from "@/components/AlertCard"
import AlertModal from "@/components/AlertModal"

const signalTypes = [
    "Population Decline",
    "Policy Shock",
    "Energy Crunch",
    "Debt Spike"
]


export default function AlertList(){
    const [activeAlert, setActiveAlert] = useState<null | typeof alerts[0]>(null)
    const {selectedSignal, setSelectedSignal} = useAlertStore()

    const filteredAlerts = selectedSignal ? alerts.filter((a) => a.signalType === selectedSignal) : alerts
    
    return (
        <>
        <div className="mb-4">
            <select 
            value={selectedSignal ?? ""}
            onChange={(e)=> setSelectedSignal(e.target.value || null)}
            className="border p-2 rounded w-full sm:w-64"
            >
                <option value="">All Signals</option>
                {signalTypes.map((type)=>(
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
        <div className="space-y-2">
            {filteredAlerts.map(alert=>(
                <div key={alert.id} onClick={()=> setActiveAlert(alert)} className="cursor-pointer">
                    <AlertCard alert={alert}/>
                </div>
            ))}

            {activeAlert && (
                <AlertModal 
                    alert={activeAlert}
                    open={!!activeAlert}
                    onOpenChange={(open) => !open && setActiveAlert(null)}
                />
            )}
        </div>
        </>
    )
}