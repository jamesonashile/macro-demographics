"use client"

import {Alert} from "@/types/alert"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"

type AlertModalProps = {
    alert: Alert
    open: boolean
    onOpenChange: (open:boolean)=> void

}

export default function AlertModal({alert, open, onOpenChange}: AlertModalProps){
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{alert.signalType}</DialogTitle>
                </DialogHeader>
                <div className="text-sm text-gray-700">
                    <p><strong>Country:</strong>{alert.countryCode}</p>
                    <p><strong>Confidence:</strong>{(alert.confidence * 100).toFixed(0)}%</p>
                    <p><strong>Triggered At:</strong>{new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(new Date(alert.triggeredAt))}</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}