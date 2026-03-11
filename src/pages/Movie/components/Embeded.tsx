import { STREAM_SERVERS } from "./servers";

type EmbedPlayerProps = {
  movieId: number;
  server: number;
};

const EmbedPlayer = ({ movieId, server }: EmbedPlayerProps) => {

  const selectedServer = STREAM_SERVERS[server];

  if (!selectedServer) {
    return <div>Server not available</div>;
  }

  const src = selectedServer.movie(movieId);

  return (
   <iframe
  src={src}
  className="h-full w-full"
  allowFullScreen
  referrerPolicy="no-referrer"
  sandbox={server === 2 ? "allow-scripts allow-same-origin allow-forms allow-presentation" : undefined}
/>
  );
};

export default EmbedPlayer;