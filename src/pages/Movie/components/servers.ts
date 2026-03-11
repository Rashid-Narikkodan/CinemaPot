export const STREAM_SERVERS = [
    {
        name: "Filmxy",
        movie: (id: number) => `https://player.autoembed.cc/embed/movie/${id}`,
    tv: (id: number, s: number, e: number) =>
      `https://player.autoembed.cc/embed/tv/${id}/${s}/${e}`,
    isAd: true,
  },
  {
      name: "VidSrc",
    movie: (id: number) => `https://vidsrc.to/embed/movie/${id}`,
    tv: (id: number, s: number, e: number) =>
      `https://vidsrc.to/embed/tv/${id}/${s}/${e}`,
    isClickAd: true,
},
{
  name: "VikingEmbed",
  movie: (id: number) => `https://vembed.stream/play/${id}`,
  tv: (id: number, s: number, e: number) =>
    `https://vembed.stream/play/${id}_s${s}_e${e}`,
  isClickAd: true,
},
  {
    name: "2Embed",
    movie: (id: number) => `https://www.2embed.cc/embed/${id}`,
    tv: (id: number, s: number, e: number) =>
      `https://www.2embed.cc/embedtv/${id}&s=${s}&e=${e}`,
    isClickAd: true,
  },
  {
    name: "VidSrc Mirror",
    movie: (id: number) => `https://vidsrc.me/embed/movie/${id}`,
    tv: (id: number, s: number, e: number) =>
      `https://vidsrc.me/embed/tv/${id}/${s}/${e}`,
    isClickAd: true,
  },
  {
    name: "iEmbed",
    movie: (id: number) => `https://iembed.top/embed/movie/${id}`,
    tv: (id: number, s: number, e: number) =>
      `https://iembed.top/embed/tv/${id}/${s}/${e}`,
    isClickAd: true,
  },
  {
    name: "RiveStream",
    movie: (id: number) => `https://rivestream.org/embed?type=movie&id=${id}`,
    tv: (id: number, s: number, e: number) =>
      `https://rivestream.org/embed?type=tv&id=${id}&season=${s}&episode=${e}`,
    isClickAd: true,
  },
  {
    name: "VidLink",
    movie: (id: number) => `https://vidlink.pro/movie/${id}`,
    tv: (id: number, s: number, e: number) =>
      `https://vidlink.pro/tv/${id}/${s}/${e}`,
    isClickAd: true,
  },
];
