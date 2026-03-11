"use client";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_MOVIE_API_BACKEND_URL || "http://localhost:3001/api";

export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
  poster_url?: string;
  description?: string;
  // Add other fields as available
};

export async function fetchMovies(): Promise<Movie[]> {
  const res = await fetch(`${API_BASE_URL}/movies/`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return await res.json();
}

// PUBLIC_INTERFACE
export async function fetchMovie(id: number): Promise<Movie> {
  const res = await fetch(`${API_BASE_URL}/movies/${id}/`);
  if (!res.ok) throw new Error(`Failed to fetch movie ${id}`);
  return await res.json();
}

// PUBLIC_INTERFACE
export async function createMovie(movie: Partial<Movie>): Promise<Movie> {
  const res = await fetch(`${API_BASE_URL}/movies/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });
  if (!res.ok) throw new Error("Failed to create movie");
  return await res.json();
}

// PUBLIC_INTERFACE
export async function updateMovie(id: number, movie: Partial<Movie>): Promise<Movie> {
  const res = await fetch(`${API_BASE_URL}/movies/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });
  if (!res.ok) throw new Error(`Failed to update movie ${id}`);
  return await res.json();
}

// PUBLIC_INTERFACE
export async function deleteMovie(id: number): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/movies/${id}/`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`Failed to delete movie ${id}`);
}
