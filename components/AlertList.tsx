"use client"

import {alerts} from "@/lib/alerts-data"
import {useState} from "react"
import AlertCard from "@/components/AlertCard"
import AlertModal from "@/components/AlertModal"

export default function AlertList(){
    const [activeAlert, setActiveAlert] = useState<null | typeof alerts[0]>(null)
    
    return (
        <div className="space-y-2">
            {alerts.map(alert=>(
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
    )
}