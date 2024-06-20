"use client";
import { useState } from "react";
import StarIcon from "./StarIcon";

type FavoriteButtonType = {};

function FavoriteButton({}: FavoriteButtonType) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`float-right ${
        isFavorite
          ? "bg-zinc-900 hover:bg-zinc-800"
          : "bg-zinc-900 hover:bg-zinc-800"
      } h-20 w-20 flex items-center justify-center rounded-3xl`}
    >
      <StarIcon isFavorite={isFavorite} />
    </button>
  );
}

export default FavoriteButton;
