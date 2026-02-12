import { Button } from '../components';
import { herobg } from '../assets/images'

export default function Hero() {
  return (
    <section>
        <div className="containers flex justify-between">
          <div className='w-120.5 flex flex-col gap-8 mt-21.5 '>
            <h1 className='font-medium text-[64px] leading-16 text-[#8BAC3E]'>Good Food Us Good Mood</h1>
            <p className='font-normal text-[18px] leading-7.25 text-[#757575]'>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
            <div className='flex gap-4'>
              <Button title={"Daftar Sekarang"}/>
              <Button title={"About Us"} extraClass={'!bg-[#F2F2F2] !text-[#333333] !font-medium !text-[14px] leading-[22px]'}/>
            </div>
            
          </div>
          <div className='heroImg'>
            <img src={herobg} alt='herobg' width={412} height={414}></img>
          </div>
          
        </div>
    </section>
  )
}
