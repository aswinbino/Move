import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext(null);

export const WatchListProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
  
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=7f604cf66d68b73133d1652eb9d5cd2b"
    )
      .then(res => res.json())
      .then(data => setGenreList(data.genres || []));
  }, []);

  const toggleWatchlist = (movie) => {
    setWatchlist(prev =>
      prev.some(m => m.id === movie.id)
        ? prev.filter(m => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  return (
    <WatchListContext.Provider value={{ watchlist, toggleWatchlist, genreList }}>
      {children}
    </WatchListContext.Provider>
  );
};

