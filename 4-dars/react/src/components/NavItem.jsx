
const NavItem = ({item}) => {
  return (
    <a 
          className='relative text-sm leading-5 duration-300 hover:scale-110'
          href={item.path}
        >
          {item.name}

          {item.badge && (
            <span className='absolute text-[10px] -right-2 -top-4 px-0.5 py-0.2 bg-[#E7462D] text-white rounded-md'>
              {item.badge}
            </span>
          )}
        </a>
  )
}

export default NavItem
