export default function DealCard({ deal }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-blue-700">{deal.title}</h3>
      <p className="text-gray-700">{deal.price_info}</p>

      <p className="text-sm text-gray-500">
        {deal.day_of_week}, {deal.start_time} – {deal.end_time}
      </p>

      <p className="text-xs text-gray-400">
        {deal.restaurant} • {deal.address}
      </p>
    </div>
  )
}
