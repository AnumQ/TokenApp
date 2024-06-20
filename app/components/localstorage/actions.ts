import { FAVORITE_LOCAL_STORAGE_KEY } from "@/app/contants";
import { FavoriteToken } from "@/app/types/FavoriteToken";

const updateLocalStorage = (data: FavoriteToken[]) => {
  localStorage.setItem(FAVORITE_LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const isCurentTokenFavorite = (favoriteId: string): boolean => {
  return getFavorites().some((fav: string) => fav === favoriteId);
};

export const getFavorites = (): FavoriteToken[] => {
  return JSON.parse(localStorage.getItem(FAVORITE_LOCAL_STORAGE_KEY) || "[]");
};

export const updateFavorites = (
  newFavorite: boolean,
  favorites: FavoriteToken[],
  favoriteId: string
) => {
  if (newFavorite) {
    const isFavAlreadySaved =
      favorites.filter((fav) => fav === favoriteId).length === 0;

    if (isFavAlreadySaved) {
      const newFavorites = [...favorites, favoriteId];
      updateLocalStorage(newFavorites);
    }
  } else {
    const isFavNotInList =
      favorites.filter((fav) => fav === favoriteId).length === 1;

    if (isFavNotInList) {
      const newFavorites = favorites.filter((fav) => fav !== favoriteId);
      updateLocalStorage(newFavorites);
    }
  }
};
