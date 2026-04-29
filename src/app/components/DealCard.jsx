'use client'

import { useState } from "react"
import { Heart, ThumbsUp, Share2, Map, Info, X } from "lucide-react"

function getDealTime(status, start, end) {
  const now = new Date();
  const startTime = new Date(start);
  const endTime = new Date(end);
  if (status === 'upcoming') {
    const diff = startTime - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `Starts in ${hours}h ${minutes}m`;
  } else if (status === 'running') {
    const diff = endTime - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `Ends in ${hours}h ${minutes}m`;
  } else {
    return 'Expired';
  }
}

export default function DealCard({ deal }) {
  const [isOpen, setIsOpen] = useState(false);
  const time = getDealTime(deal.status, deal.start_time, deal.end_time);
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'running':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'past':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="relative bg-white rounded-2xl shadow p-5 items-start gap-3 pt-16 hover:shadow-md transition cursor-pointer"
      >
        {/* Image */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[88%]"> 
          <img
            src={deal.image}
            alt={deal.title}
            className="rounded-2xl
            shadow[0_20px_60px_rgba(0,0,0,0.35)]
            w-full h-24 object-cover 
            transition-all duration-300"
          />
        </div>

        {/* Deal Info */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-md font-bold text-gray-800">{deal.restaurant}</h3>
          <h2 className="text-lg font-semibold text-green-900">{deal.title}</h2>

          <p className="text-sm text-gray-700">
            {deal.start_time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {deal.end_time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}{" "}
            <span className="text-gray-500 text-xs">({time})</span>
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
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          {/* Modal Card */}
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end p-4 border-b">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Image */}
              {deal.image && (
                <div className="mb-6">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="rounded-xl w-full h-64 object-cover shadow-md"
                  />
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">{deal.restaurant}</h3>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{deal.title}</h1>
                
                {/* Status Badge */}
                <div className="inline-flex">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(deal.status)}`}>
                    {deal.status.charAt(0).toUpperCase() + deal.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t mb-6"></div>

              {/* Deal Details */}
              <div className="space-y-4 mb-6">
                {/* Timing */}
                <div>
                  <div className="space-y-1 text-gray-700">
                    <p className="text-sm"><span className="font-semibold">Start:</span> {formatDate(deal.start_time)} at {deal.start_time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p className="text-sm"><span className="font-semibold">End:</span> {formatDate(deal.end_time)} at {deal.end_time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <p className="text-sm text-green-700 font-semibold">{time}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Description</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{deal.description}</p>
                </div>

                {/* Engagement */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Engagement</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Heart size={20} className="text-red-500" />
                      <span className="text-sm text-gray-700">Likes: <span className="font-semibold">{deal.likes}</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button at Bottom */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
