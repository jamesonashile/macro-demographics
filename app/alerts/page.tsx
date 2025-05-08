import AlertList from "@/components/AlertList";

export default function AlertsPage() {
    return(
      <main className="p-6">
        <h1 className="text-xl font-bold mb-4">Active Alerts</h1>
        <AlertList/>
      </main>
    );
  }
  