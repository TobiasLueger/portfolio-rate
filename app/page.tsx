'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { portfolios } from "@/constants/portfolio";
import Stage from "@/components/stage";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [showTopPicks, setShowTopPicks] = useState(false); // New state for Top Pick filter

  const toggleRating = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const filteredPortfolios = portfolios.filter((portfolio) => {
    const matchesName = portfolio.title.toLowerCase().includes(search.toLowerCase());
    const matchesRating =
      selectedRatings.length > 0
        ? selectedRatings.includes(Math.floor(portfolio.rating))
        : true;
    const matchesTopPick = showTopPicks ? portfolio.recommended : true; // Filter by Top Pick if enabled

    return matchesName && matchesRating && matchesTopPick;
  });

  return (
    <div className="px-4">
      {/* Stage Section */}
      <Stage search={search} setSearch={setSearch} />

      {/* Portfolio Filters */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          {/* Star Rating Filter */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => toggleRating(star)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  selectedRatings.includes(star)
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#252525]"
                }`}
              >
                {star} Stern{star > 1 && "e"}
              </button>
            ))}
          </div>

          {/* Top Pick Filter */}
          <button
            onClick={() => setShowTopPicks(!showTopPicks)}
            className={`px-4 py-2 text-sm rounded-full transition-all bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-md cursor-pointer`}
          >
            {showTopPicks ? "Show All" : "Top Picks"}
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPortfolios.map((portfolio) => (
            <Card
              key={portfolio.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] shadow-md"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-100 filter brightness-50"
                />
                <div className="absolute top-4 left-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 bg-opacity-90 rounded-lg px-4 py-1 shadow-md">
                    {portfolio.title}
                  </h3>
                </div>
                {portfolio.recommended && (
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="relative bg-yellow-500 text-black dark:bg-yellow-400 dark:text-black rounded-lg px-3 py-1 shadow-lg"
                    >
                      Top Pick
                    </Badge>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100 dark:bg-[#1a1a1a]">
                <div className="flex justify-between items-center">
                  {/* Star Rating */}
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFull = star <= Math.floor(portfolio.rating);
                      const isHalf = star - portfolio.rating < 1 && star - portfolio.rating > 0;

                      return (
                        <div key={star} className="relative w-5 h-5">
                          <Star
                            className={`absolute top-0 left-0 w-5 h-5 ${
                              isFull
                                ? "text-yellow-400 fill-current"
                                : isHalf
                                ? "text-yellow-400"
                                : "text-gray-400 dark:text-gray-600"
                            }`}
                          />
                          {isHalf && (
                            <Star
                              className="absolute top-0 left-0 w-5 h-5 text-gray-400 dark:text-gray-600 overflow-hidden"
                              style={{ clipPath: "inset(0 0 0 50%)" }}
                            />
                          )}
                        </div>
                      );
                    })}
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-300 ml-3 pt-[0.09rem]">
                      {portfolio.rating.toFixed(1)}
                    </span>
                  </div>
                  {/* Visit Site */}
                  <a
                    href={portfolio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Visit Site
                    <ExternalLink className="w-4 h-4 ml-2 inline" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}