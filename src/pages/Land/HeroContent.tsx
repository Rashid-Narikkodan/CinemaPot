import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { fetchMovies } from "../../utils/fetchMovies";
import type {MovieDetails} from "../../types/movie";
import Icon from '../../assets/icons/favicon.png'

interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  poster?: string;

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

    try {
      const data = await fetchMovies({
        title: "Search",
        mediaType: "movie",
        fetcher: "search",
        params: { query }
      });
      
      const formatted = data.results.map((m: MovieDetails) => ({
        id: m.id,
        title: m.title || m.name,
        year: (m.release_date || m.first_air_date || "").split("-")[0],
        genre: "Movie", // Simplified
        poster: m.poster_path
      }));

      setResults(formatted);
      setShowDropdown(true);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
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
    navigate(`/browse/${movie.id}`);
  };



  const handleSeeMore = () => {    
    setShowDropdown(false);

    if (!searchTerm.trim()){
      navigate("/browse");
      return;
    }
    navigate(`/browse?q=${encodeURIComponent(searchTerm.trim())}`);

  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const hasValue = searchTerm.trim().length > 0;

  return (
    <div className="relative z-10 flex h-full items-start justify-center px-4 pt-40">
      {/* Blur Overlay */}
      {hasValue && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40 transition-all duration-300"></div>
      )}

      <div className="w-full max-w-2xl text-center text-white relative z-50">

        {/* Logo */}
        <div className={`mb-4 flex items-center justify-center gap-3 transition-all duration-300 ${hasValue ? 'blur-sm opacity-50' : ''}`}>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500">
            <img src={Icon} alt="" />
          </div>
          <span className="text-3xl font-black tracking-tighter">
            CINEMA<span className="text-red-600">POT.</span>
          </span>
        </div>

        {/* Heading */}
        <h1 className={`text-3xl font-extrabold leading-tight md:text-4xl transition-all duration-300 ${hasValue ? 'blur-sm opacity-50' : ''}`}>
          Watch Free Movies Online<br/> & TV Shows in HD
        </h1>

        <p className={`mt-4 text-base text-zinc-400 transition-all duration-300 ${hasValue ? 'blur-sm opacity-50' : ''}`}>
          Baddies USA, Marina, War Machine, The Rookie, Cold Storage
        </p>

        {/* Search Module */}
        <div className={`relative mx-auto max-w-lg py-3 transition-all duration-300 ease-out ${hasValue ? '-mt-20' : 'mt-4'}`}>

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
                  <ul className="max-h-70 overflow-auto">

                    {results.slice(0, 5).map((movie) => (
                      <li
                        key={movie.id}
                        onClick={() => handleSelectResult(movie)}
                        className="flex cursor-pointer items-center gap-4 px-4 py-4 hover:bg-[#202020] transition-colors"
                      >
                        {movie.poster ? (
                          <img 
                            src={`https://image.tmdb.org/t/p/w92${movie.poster}`} 
                            alt={movie.title}
                            className="h-14 w-10 rounded object-cover shadow-lg"
                          />
                        ) : (
                          <div className="h-14 w-10 rounded bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-500">No Image</div>
                        )}


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