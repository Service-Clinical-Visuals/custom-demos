"use client";
import React from "react";

export default function SearchBar() {
  return (
    <section className="w-full bg-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--moove-text-dark)] mb-6">
          Search our entire catalogue
        </h3>
        <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter a keyword, such as a product name..."
            className="flex-1 px-4 py-3 text-sm text-gray-900 bg-[#F5F5F5] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-[var(--moove-text-dark)] text-white! font-bold px-8 py-3 hover:bg-[var(--moove-light-blue)] transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
