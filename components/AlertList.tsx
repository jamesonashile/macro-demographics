"use client"

import {useState} from "react"

import type { Alert } from "@/types/alert"

import {alerts} from "@/lib/alerts-data"
import { countries } from "@/lib/countries-data"

import { useAlertStore } from "@/store/useAlertStore"
import { useCountryStore } from "@/store/useCountryStore"

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
    const {setActiveCountry} = useCountryStore()
    

    const filteredAlerts = selectedSignal ? alerts.filter((a) => a.signalType === selectedSignal) : alerts

    const handleAlertClick = (alert: Alert) => {
        const match = countries.find((c) => c.code === alert.countryCode)

        if (match){
            setActiveCountry(match)
            setActiveAlert(alert)
        }
    }
    
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
                <div key={alert.id} onClick={()=> handleAlertClick(alert)} className="cursor-pointer">
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