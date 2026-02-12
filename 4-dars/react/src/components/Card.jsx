const Card = ({
  item,
  variant = "default"
}) => {

  const isTrending = variant === "trending";

  return (
    <div
      className={`
        ${item.color}
        ${isTrending ? "w-76.5 h-76.5 items-start gap-2" : "w-57.5 h-43.75 items-center gap-4"}
        flex flex-col justify-center
        rounded-[10px]
        p-5
        duration-300 hover:scale-105 cursor-pointer
      `}
    >
      <img
        src={item.img}
        alt={item.name}
        width={isTrending ? 120 : 47}
        height={isTrending ? 120 : 52}
      />

      <p className={`
        font-medium
        ${isTrending ? "text-[26px] text-black" : "text-[16px] text-[#333]"}
      `}>
        {item.name}
      </p>

      <span className={`
        ${isTrending ? "text-[18px] text-[#8BAC3E]" : "text-[14px] text-[#333]"}
      `}>
        {item.items}
      </span>

      {item.stars && (
        <img src={item.stars} alt="stars" className="mt-2" />
      )}
    </div>
  );
};

export default Card;
