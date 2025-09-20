import Image from "next/image";
import { deals } from "../app/data/deals"
import DealCard from "../app/components/DealCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">Dealish</h1>
      </header>

      <main className="max-w-3xl mx-auto p-4">
        <div className="grid gap-4">
          {deals.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </main>
    </div>
  );
}
