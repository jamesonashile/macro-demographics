import {create} from "zustand"

type AlertStore = {
    selectedSignal: string | null
    setSelectedSignal: (signal: string | null) => void
}

export const useAlertStore = create<AlertStore>((set)=>({
    selectedSignal: null,
    setSelectedSignal: signal => set ({ selectedSignal: signal})
}))