# CinemaPot

CinemaPot is a modern **movie and TV streaming discovery platform** built with **React, Vite, and TMDB**.
It provides a Netflix-style interface for browsing movies and watching them using multiple embedded streaming providers.

The platform focuses on **clean UI, fast search, and multi-server streaming fallback**.

---

# Features

### Movie Discovery

* Browse trending, popular, and top-rated movies
* Detailed movie pages with ratings, genres, runtime, and release information
* High-resolution posters and backdrops powered by TMDB

### Streaming System

* Multiple streaming servers
* One-click server switching
* Embedded video players
* TMDB ID based playback

Supported streaming providers include:

* VidSrc
* AutoEmbed
* 2Embed
* MultiEmbed
* SuperEmbed
* VikingEmbed
* MKVEmbed
* iEmbed
* Rivestream
* VidLink

### Search

* Instant movie search
* Debounced API requests
* Search modal interface

### UI / UX

* Netflix-style browsing layout
* Horizontal movie rows
* Responsive design
* Server switching controls
* Fast navigation with React Router

---

# Tech Stack

### Frontend

* React
* Vite
* TailwindCSS
* React Router
* Lucide Icons

### Data Source

* TMDB API

### Streaming

* External iframe streaming providers

---

# Project Structure

```id="sm2r4o"
src/
├── api
│   └── tmdb.ts
├── app
│   └── App.tsx
├── assets
│   ├── icons
│   │   └── favicon.png
│   └── images
│       └── netflix-bg.jpg
├── components
│   ├── common
│   │   ├── Header.tsx
│   │   ├── Loader.tsx
│   │   └── Search.tsx
│   └── movie
│       ├── MovieCard.tsx
│       ├── MovieRow.tsx
│       └── RowContainer.tsx
├── config
│   └── rowConfig.ts
├── index.css
├── main.tsx
├── pages
│   ├── Browse
│   │   └── Browse.tsx
│   ├── Home
│   │   ├── components
│   │   │   ├── HeroBanner.tsx
│   │   │   └── HeroContent.tsx
│   │   └── Home.tsx
│   ├── Land
│   │   ├── HeroContent.tsx
│   │   └── LandPage.tsx
│   └── Movie
│       ├── components
│       │   ├── Details.tsx
│       │   ├── Embeded.tsx
│       │   ├── Row.tsx
│       │   └── servers.ts
│       └── Movie.tsx
├── services
│   └── tmdb.service.ts
├── styles
│   └── loading.css
├── types
│   ├── auth.ts
│   ├── fetcher.ts
│   ├── movie.ts
│   └── row.ts
└── utils
    ├── fetchMovies.ts
    └── fetchRow.ts
```

---

# Setup

### 1. Clone the repository

```id="9yldh0"
git clone https://github.com/Rashid-Narikkodan/CinemaPot.git
cd CinemaPot
```

### 2. Install dependencies

```id="xuh9iw"
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory.

```id="d98p6u"
VITE_TMDB_API_KEY=your_tmdb_api_key
```

You can get a free API key from:

https://www.themoviedb.org/settings/api

---

### 4. Run development server

```id="y23zow"
pnpm run dev
```

The app will run at:

```id="7j6hph"
http://localhost:5173
```

---

# Streaming Server Configuration

CinemaPot uses a configurable list of streaming providers.

Example:

```id="sefwfs3"
export const STREAM_SERVERS = [
  {
    name: "VidSrc",
    movie: (id) => `https://vidsrc.to/embed/movie/${id}`,
    tv: (id, s, e) => `https://vidsrc.to/embed/tv/${id}/${s}/${e}`
  }
]
```

Each server resolves media streams using **TMDB IDs**.

Users can switch servers if a stream fails.

---

# Disclaimer

CinemaPot **does not host or store any video files**.

* All video content is provided by **third-party streaming providers**
* TMDB is used only for **movie metadata and images**

If you are a copyright owner and want content removed, please contact the respective streaming provider.

---

# Roadmap

Planned improvements:

* TV episode selector
* Watch history
* Watchlists
* Continue watching
* Server health detection
* Subtitle support
* User authentication
* Backend streaming proxy

---

# License

License issued by Me😀
