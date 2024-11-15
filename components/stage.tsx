'use client'

import { Briefcase } from "lucide-react";

export default function Stage({ search, setSearch }: { search: string; setSearch: (value: string) => void }) {
  return (
    <section className="relative w-full py-12 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Discover the Best Portfolios
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Browse and filter amazing portfolios to find your inspiration.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search portfolios by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-[#252525] rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Briefcase className="absolute right-4 top-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}