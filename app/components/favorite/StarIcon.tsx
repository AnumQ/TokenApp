const StarIcon = ({ isFavorite }: { isFavorite: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`size-12 transition-fill duration-500 ease-in-out ${
      isFavorite
        ? "fill-yellow-200 stroke-yellow-300 dark:fill-[#443084] dark:stroke-[#443084]"
        : "fill-none stroke-slate-200 dark:stroke-[#525252]"
    }`}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

export default StarIcon;

// const StarIcon = ({ isFavorite }: { isFavorite: boolean }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill={`${isFavorite ? favfillColor : "white dark:none"}`}
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke={`${isFavorite ? favStroke : defaultStroke}`}
//     className={`size-12 transition-fill duration-500 ease-in-out ${
//       isFavorite ? `${favfillColor} ${favStroke}` : `${defaultStroke}`
//     }`}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
//     />
//   </svg>
// );

// export default StarIcon;
