
const Button = ({title, extraClass}) => {
  return (
      <button className={`duration-300 hover:scale-110 cursor-pointer bg-[#8BAC3E] px-4.5 py-2.5 rounded-full text-white font-medium text-[14px] leading-5.5 tracking-[0%] ${extraClass}`}>
        {title}
      </button>
  )
}

export default Button