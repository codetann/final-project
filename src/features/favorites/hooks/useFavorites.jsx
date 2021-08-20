import { useEffect } from "react";
import { useAppContext } from "../../../context/ContextProvider";
import { fetchFavorites, addFavorites, removeFavorites } from "../api";

export function useFavorites() {
  const { favorites, setFavorites } = useAppContext();

  useEffect(() => {
    if (favorites) return;
    const _ = async () => {
      const favorites = await fetchFavorites();
      setFavorites(favorites.data);
    };
    _();
  }, []);

  const onFavorite = async (isFavorite, business) => {
    if (!isFavorite) {
      const res = await addFavorites(business);
      setFavorites(res.data);
    }
    if (isFavorite) {
      const res = await removeFavorites(business);
      setFavorites(res.data);
    }
  };

  return { favorites, onFavorite };
}
