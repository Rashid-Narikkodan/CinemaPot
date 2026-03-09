import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
}

const HeroContent = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const performSearch = async (query: string) => {
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 350));

    const mockDatabase: Movie[] = [
      { id: 1, title: "Shadow Force", year: "2025", genre: "Action" },
      { id: 2, title: "Aurora Dawn", year: "2024", genre: "Sci-Fi" },
      { id: 3, title: "Titan's Fall", year: "2025", genre: "Thriller" },
      { id: 4, title: "Eclipse Protocol", year: "2024", genre: "Mystery" },
      { id: 5, title: "Vortex Edge", year: "2023", genre: "Fantasy" },
      { id: 6, title: "Neon Phantom", year: "2025", genre: "Action" },
      { id: 7, title: "Quantum Veil", year: "2024", genre: "Sci-Fi" },
      { id: 8, title: "Frostbite Legacy", year: "2025", genre: "Drama" }
    ];

    const filtered = mockDatabase.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered.length ? filtered : mockDatabase.slice(0, 8));
    setShowDropdown(true);
    setIsLoading(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchTerm(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (value.trim().length > 1) performSearch(value.trim());
      else {
        setResults([]);
        setShowDropdown(false);
      }
    }, 400);
  };

  const handleSelectResult = (movie: Movie) => {
    setShowDropdown(false);
    setSearchTerm("");
    navigate(`/movie/${movie.id}`);
  };

  const handleSeeMore = () => {    
    setShowDropdown(false);

    if (!searchTerm.trim()){
      navigate("/search");
      return;
    }
    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <div className="relative z-10 flex h-full items-start justify-center px-4 pt-40">
      <div className="w-full max-w-2xl text-center text-white">

        {/* Logo */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600">
            ▶
          </div>
          <span className="text-3xl font-bold tracking-tight">CinemaPot</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
          Watch Free Movies Online<br/> & TV Shows in HD
        </h1>

        <p className="mt-4 text-base text-zinc-400">
          Baddies USA, Marina, War Machine, The Rookie, Cold Storage
        </p>

        {/* Search Module */}
        <div className="relative mx-auto mt-4 max-w-lg py-3">

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#181818] shadow-xl">

            {/* Search Row */}
            <div className="flex items-center">

              <div className="flex flex-1 items-center gap-3 px-4 py-4">
                <span className="text-zinc-400"><Search /></span>

                <input
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search movies"
                  className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none"
                />
              </div>

              <button className="flex items-center gap-2 border-l border-zinc-800 px-4 py-4 text-sm text-zinc-300 hover:bg-[#202020]">
                ▼ Filter
              </button>

            </div>

            {/* Bottom CTA */}
            <Link to="/home">
            <button             
              className="w-full border-t border-zinc-800 bg-red-600 py-4 font-semibold text-white hover:bg-red-700"
              >
              View Full Site →
            </button>
                </Link>

          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute left-0 right-0 top-full z-50 overflow-hidden rounded-2xl border border-zinc-800 bg-[#181818] shadow-xl">

              {isLoading && (
                <div className="py-6 text-zinc-400">Searching...</div>
              )}

              {!isLoading && (
                <>
                  <ul className="max-h-50 overflow-auto">

                    {results.slice(0, 5).map((movie) => (
                      <li
                        key={movie.id}
                        onClick={() => handleSelectResult(movie)}
                        className="flex cursor-pointer items-center gap-4 px-4 py-4 hover:bg-[#202020]"
                      >
                        <div className="h-14 w-10 rounded bg-zinc-700" />

                        <div className="text-left">
                          <div className="font-semibold">{movie.title}</div>
                          <div className="text-xs text-zinc-400">
                            {movie.year} • {movie.genre}
                          </div>
                        </div>
                      </li>
                    ))}

                  </ul>

                  <div className="border-t border-zinc-800 p-2 flex justify-left items-center">
                    <button
                      onClick={handleSeeMore}
                      className="rounded-full text-[10px] border border-red-500 px-4 py-2 hover:bg-red-700 hover:text-white"
                    >
                      <span className="text-sm text-red-500 hover:text-white">
                      See More Results
                      </span>
                    </button>
                  </div>
                </>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default HeroContent;