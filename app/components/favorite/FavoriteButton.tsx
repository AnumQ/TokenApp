"use client";
import { useEffect, useState } from "react";
import StarIcon from "./StarIcon";
import {
  isCurentTokenFavorite,
  updateFavorites,
} from "../localstorage/actions";

type FavoriteButtonType = {
  chainId: string;
  address: string;
  withBackground?: boolean;
  onUpdate?: () => void;
};

function FavoriteButton({
  chainId,
  address,
  withBackground = false,
  onUpdate,
}: FavoriteButtonType) {
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);

  const favoriteId = `${chainId}:${address}`;

  useEffect(() => {
    const isCurrentlyFavorite = isCurentTokenFavorite(favoriteId);
    setIsFavorite(isCurrentlyFavorite);
  }, [favoriteId]);

  const toggleFavorite = () => {
    const newFavorite = !isFavorite;
    updateFavorites(newFavorite, favoriteId);
    setIsFavorite(newFavorite);
    if (onUpdate) onUpdate();
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`float-right ${
        !withBackground ? "bg-zinc-900 hover:bg-zinc-800" : ""
      } h-20 w-20 flex items-center justify-center rounded-3xl`}
    >
      {isFavorite === undefined && (
        <div className="animate-pulse h-10 w-10 bg-zinc-500 blur-lg rounded-3xl"></div>
      )}
      {isFavorite !== undefined && <StarIcon isFavorite={isFavorite} />}
    </button>
  );
}

export default FavoriteButton;
