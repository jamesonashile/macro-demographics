"use client"

import React from 'react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog"

type Props = {
    open: boolean,
    onOpenChange: (open: boolean) => void
    name: string
    code: string
    phase: string
    shape: string
    policyScore: number
}

export default function CountryPanelModal({
    open,
    onOpenChange,
    name,
    code,
    phase,
    shape,
    policyScore
}: Props){
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{name} ({code})</DialogTitle>
                        <DialogDescription>
                            Demographic Phase: <strong>{phase}</strong><br/>
                            Shape: <strong>{shape}</strong><br/>
                            Policy Score: <strong>{policyScore}</strong>
                        </DialogDescription>
                    
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}