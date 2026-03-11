import type { MovieDetails } from "../../types/movie";
import MovieCard from "../movie/MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Loader from '../common/Loader'

type Props = {
  row: {
    title: string;
    movies: MovieDetails[];
  };
  isLoading:boolean
};

const MovieRow = ({ row, isLoading }: Props) => {

  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`row-${row.title}`);
    if (container) {
      const scrollAmount = direction === "left" ? -500 : 500;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const skelton = Array(10).fill(0)

  return (
    <section className="relative px-6 md:px-12 py-6 overflow-x-hidden">
      <div className="mb-4 flex items-center justify-between">
  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">
    {row.title}
  </h2>

  <div className="flex items-center gap-2">
    <button
      onClick={() => scroll("left")}
      className="w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/60 rounded-l-3xl"
    >
      <ChevronLeft className="h-6 w-6 text-white" />
    </button>

    <button
      onClick={() => scroll("right")}
      className="w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/60 rounded-r-3xl"
    >
      <ChevronRight className="h-6 w-6 text-white" />
    </button>
  </div>
</div>

      <div className="relative">
        {/* Scroll Arrows */}

        <div 
          id={`row-${row.title}`}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {isLoading?skelton.map((_,idx)=>{
              return (
              <div key={idx} className="w-36 sm:w-48 md:w-56 shrink-0">
              <Loader/>
              </div>
              )
          })
          
          :row.movies.map((movie) => {
            return (
            <div key={movie.id} className="w-36 sm:w-48 md:w-56 shrink-0">
              <MovieCard
                title={movie.title || movie.original_title}
                posterPath={movie.poster_path}
                releaseYear={movie.release_date?.split("-")[0] || "N/A"}
                rating={movie.vote_average}
                popularity={movie.popularity}
                voteCount={movie.vote_count}
                tmdbId={movie.id}
                onClick={(id) =>  navigate(`/browse/${id}`)}
              />
            </div>)
}
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieRow;

