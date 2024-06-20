"use client";
import { useEffect, useState } from "react";
import StarIcon from "./StarIcon";
import { FAVORITE_LOCAL_STORAGE_KEY } from "@/app/contants";
import {
  getFavorites,
  isCurentTokenFavorite,
  updateFavorites,
} from "../localstorage/actions";
import { FavoriteToken } from "@/app/types/FavoriteToken";

type FavoriteButtonType = {
  chainId: string;
  address: string;
};

function FavoriteButton({ chainId, address }: FavoriteButtonType) {
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);
  const [favorites, setFavorites] = useState<FavoriteToken[]>([]);

  const favoriteId = `${chainId}:${address}`;

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
    const isCurrentlyFavorite = isCurentTokenFavorite(favoriteId);
    setIsFavorite(isCurrentlyFavorite);
  }, [favoriteId]);

  const toggleFavorite = () => {
    const newFavorite = !isFavorite;
    updateFavorites(newFavorite, favorites, favoriteId);
    setIsFavorite(newFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`float-right bg-zinc-900 hover:bg-zinc-800 h-20 w-20 flex items-center justify-center rounded-3xl`}
    >
      {isFavorite === undefined && (
        <div className="animate-pulse h-10 w-10 bg-zinc-500 blur-lg rounded-3xl"></div>
      )}
      {isFavorite !== undefined && <StarIcon isFavorite={isFavorite} />}
    </button>
  );
}

export default FavoriteButton;
