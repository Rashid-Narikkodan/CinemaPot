import type { MovieDetails } from "../../../types/movie";
import { MonitorPlayIcon as Play } from "lucide-react";
import {useNavigate} from 'react-router-dom'
import Icon from '../../../assets/icons/favicon.png'

type Props = {
  movie: MovieDetails | null;
};

const HeroContent = ({ movie }: Props) => {
  const navigate = useNavigate()
  if (!movie) return;
  const title = movie.title || movie.original_title;
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : null;

  const overview =
    movie.overview?.length > 180
      ? movie.overview.slice(0, 180) + "..."
      : movie.overview;

  return (
    <div className="pl-[5%] py-[30vh] text-white relative z-10 max-w-2xl">
      {/* Brand Overlay */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-red-600 shadow-lg shadow-red-600/20">
          <img src={Icon} alt='Logo'/>
        </div>
        <span className="text-sm font-black tracking-widest text-zinc-400 uppercase">
          Cinema<span className="text-red-600">Pot</span> Original
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter drop-shadow-2xl">
        {title}
      </h1>


      {/* Meta row */}
      <div className="mb-3 flex items-center gap-4 text-sm text-gray-200">
        {year && <span>{year}</span>}
        {rating && (
          <span className="rounded bg-white/20 px-2 py-0.5">★ {rating}</span>
        )}
      </div>

      {/* Overview */}
      {overview && (
        <p className="mb-6 max-w-xl text-md leading-relaxed text-gray-200">
          {overview}
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
        onClick={()=>navigate(`/browse/${movie.id}`)}
          className="flex items-center gap-2 rounded bg-gray-500/70 px-6 py-2 text-white font-semibold hover:bg-gray-500 transition"
      >
          <Play /> Watch Now
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
