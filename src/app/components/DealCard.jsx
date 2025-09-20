import { Heart, ThumbsUp, Share2, Map, Info } from "lucide-react"

export default function DealCard({ deal }) {
  return (
    <div className="flex bg-white rounded-xl shadow p-3 items-start gap-3 border hover:shadow-md transition">
      {/* Image */}
      <img
        src={deal.image}
        alt={deal.title}
        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
      />

      {/* Deal Info */}
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-sm">
          <span className="text-green-600">{deal.title}</span>{" "}
          <span className="text-gray-800">@ {deal.restaurant}</span>
        </h3>

        <p className="text-sm text-gray-700">
          {deal.start_time} – {deal.end_time}{" "}
          <span className="text-gray-500 text-xs">({deal.ends_in})</span>
        </p>

        <p className="text-sm text-gray-600">{deal.description}</p>

        {/* Bottom Row */}
        <div className="flex justify-between items-center mt-2">
          {/* Left side: like & thumbs up */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-gray-700 hover:text-red-500">
              <Heart size={18} />
            </button>
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <ThumbsUp size={18} />
              <span className="text-sm">{deal.likes}</span>
            </button>
          </div>

          {/* Right side: actions */}
          <div className="flex items-center gap-3 text-gray-700">
            <button className="hover:text-blue-600">
              <Share2 size={18} />
            </button>
            <button className="hover:text-blue-600">
              <Map size={18} />
            </button>
            <button className="hover:text-blue-600">
              <Info size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
