import { logo } from '../assets/images'
import { Button, NavItem } from '../components'
function Header() {

  const navList = [
    {id:1,path:"#", name: "Home", badge: null},
    {id:1,path:"#", name: "About", badge: null},
    {id:1,path:"#", name: "Promotions", badge: "HOT"},
    {id:1,path:"#", name: "Blogs", badge: null},
    {id:1,path:"#", name: "Contact Us", badge: null}
  ]

  return(
    <header className='py-6'>
  <div className='container mx-auto flex items-center justify-between'>
    
    <img src={logo} alt="icon" width={240} height={50} className='cursor-pointer'/>

    <nav className='flex gap-8 items-center text-[#757575] font-medium'>
      {navList.map(item => ( <NavItem key={item.id} item={item}/>))}
    </nav>

    <div className='flex items-center gap-6'>
      <p className='text-sm font-medium'>Masuk</p>
      <Button title={"Daftar Sekarang"} />
    </div>

  </div>
</header>

  )
  
}

export default Header
