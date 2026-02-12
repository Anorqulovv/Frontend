import { logo } from '../assets/images'

const Footer = () => {
  return (
    <footer className='py-12 px-8 bg-white'>
      <div className="w-400 mx-auto bg-[#F9FFF6] py-16 px-12 rounded-lg">
        <div className='flex gap-8 justify-between'>
          <div className='flex flex-col gap-6 w-83.75 '>
            <img src={logo} alt='logo' className='w-52' />
            <p className='font-normal text-sm leading-relaxed text-[#757575]'>
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
              Kecamatan Setiabudi, Kota Jakarta Selatan, 
              Daerah Khusus Ibukota Jakarta 12950
            </p>
            
            <div className="flex gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full text-[#6d8a31] hover:text-white hover:bg-[#6d8a31] transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-[#8BAC3E] text-[#8BAC3E] hover:bg-[#8BAC3E] hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-[#8BAC3E] text-[#8BAC3E] hover:bg-[#8BAC3E] hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-lg text-gray-800'>Categories</h3>
            <ul className='flex flex-col gap-3 text-[#757575] text-sm'>
              <li className='hover:text-[#8BAC3E] cursor-pointer transition-colors'>Cupcake</li>
              <li className='hover:text-[#8BAC3E] cursor-pointer transition-colors'>Pizza</li>
              <li className='hover:text-[#8BAC3E] cursor-pointer transition-colors'>Kebab</li>
              <li className='hover:text-[#8BAC3E] cursor-pointer transition-colors'>Salmon</li>
              <li className='hover:text-[#8BAC3E] cursor-pointer transition-colors'>Dougnut</li>
            </ul>
          </div>

          <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-lg text-gray-800'>About Us</h3>
            <ul className='flex flex-col gap-3 text-[#757575] text-sm'>
              <li className='hover:text-[#8BAC3E] cursor-pointer transition-colors'>About Us</li>
              <li className='hover:text-[#8BAC3E] cursor-pointer transition-colors'>FAQ</li>
              <li className='hover:text-[#8BAC3E] cursor-pointer transition-colors'>Report Problem</li>
            </ul>
          </div>

          <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-lg text-gray-800'>Newsletter</h3>
            <p className='text-[#757575] text-sm'>
              Get now free 50% discount for all products on your first order
            </p>
            
            <div className='flex border border-gray-300 rounded-lg overflow-hidden'>
              <input 
                type="email" 
                placeholder="Your email address" 
                className='flex-1 px-4 py-2.5 text-sm outline-none'
              />
              <button className='bg-[#8BAC3E] text-white px-6 py-2.5 font-semibold hover:bg-[#6d8a31] transition-colors'>
                SEND
              </button>
            </div>
            
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2 text-sm text-[#757575]'>
                <svg className="w-4 h-4 text-[#8BAC3E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>elemesid@gmail.com</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-[#757575]'>
                <svg className="w-4 h-4 text-[#8BAC3E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>0888 1111 2222</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer