This is a [Next.js](https://nextjs.org) project for the Movie Organizer SPA.

## Modern Dashboard

- Uses a clean, light theme with blue/cyan dashboard accents (#3b82f6, #06b6d4)
- Responsive sidebar navigation (see `src/components/Sidebar.tsx`)
- Main dashboard surface for movie grid, list management, modals (WIP)

## Backend Integration

- The frontend calls a FastAPI backend at `NEXT_PUBLIC_MOVIE_API_BACKEND_URL` (defaults to http://localhost:3001/api).
- See `.env.example` to configure API URL as needed

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Be sure the backend (`movie_api_backend`) is also running on port 3001 for API connectivity.

Open [http://localhost:3000](http://localhost:3000) to view the SPA.

To edit the main dashboard, modify `app/page.tsx`.

