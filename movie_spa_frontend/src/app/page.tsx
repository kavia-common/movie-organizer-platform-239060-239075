"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { fetchMovies, Movie } from "@/api/movieApi";
import React, { Suspense } from "react";
import Image from "next/image";

function MovieGridView({
  movies,
}: {
  movies: Movie[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 p-6 mt-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="rounded-xl overflow-hidden bg-white shadow group relative flex flex-col hover:ring-2 hover:ring-blue-300 transition"
        >
          {movie.poster_url ? (
            <Image
              src={movie.poster_url}
              alt={`${movie.title} poster`}
              className="w-full h-48 object-cover"
              width={276}
              height={192}
              style={{ objectFit: "cover" }}
              priority={false}
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-blue-50 text-blue-300 text-4xl">
              <span role="img" aria-label="Movie">
                🎬
              </span>
            </div>
          )}
          <div className="flex-1 px-4 py-3">
            <h2 className="font-bold text-lg text-gray-900">{movie.title}</h2>
            <div className="text-sm text-gray-500 mb-2">{movie.year}</div>
            <div className="truncate text-xs">{movie.genre}</div>
            {/* More movie info here */}
          </div>
          <Link
            href={`/${movie.id}`}
            className="absolute inset-0 focus:outline-2 focus:outline-cyan-500"
            tabIndex={0}
            aria-label={`View details for ${movie.title}`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  // NOTE: This composition uses client-side fetch in the child for SPA behavior.
  // Future: Can replace with React Query/SWR for caching, optimistic updates.

  // Defer loading of movie data for hydration and SPA navigation:
  const MoviesWrapper = () => {
    const [movies, setMovies] = React.useState<Movie[]>([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      fetchMovies()
        .then(setMovies)
        .finally(() => setLoading(false));
    }, []);
    if (loading)
      return (
        <div className="w-full flex flex-col items-center justify-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-400 mb-4" />
          <div className="text-blue-400">Loading movies…</div>
        </div>
      );
    return <MovieGridView movies={movies} />;
  };

  return (
    <div className="flex min-h-screen bg-[#f9fafb]">
      <Sidebar />
      <main className="flex-1 ml-56 relative">
        <header className="flex items-center justify-between px-8 py-7 bg-white shadow-sm">
          <h1 className="text-2xl font-semibold text-blue-900 tracking-tight">
            All Movies
          </h1>
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-600 active:bg-blue-700 transition"
            aria-label="Add new movie (opens modal)"
          >
            + Add Movie
          </button>
        </header>
        <section>
          <Suspense fallback={<div className="p-8">Loading movies…</div>}>
            <MoviesWrapper />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
