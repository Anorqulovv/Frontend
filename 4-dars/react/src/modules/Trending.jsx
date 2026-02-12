import { Button, Card } from '../components';
import { tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8, stars } from '../assets/images';

const Trending = () => {
  const cardList = [
    {id:1,img: tr1, name:'Pizza Paperoni', items:'Pizza', stars, color:"bg-[#E6F3F5]"},
    {id:2,img: tr2, name:'Pizza Meat', items:'Pizza', stars, color:"bg-[#E6F3F5]"},
    {id:3,img: tr3, name:'Doner Kebab', items:'Kebab', stars, color:"bg-[#EAEEFA]"},
    {id:4,img: tr4, name:'Salmon Roll', items:'Salmon', stars, color:"bg-[#F9EEF3]"},
    {id:5,img: tr5, name:'Cupcake Choco', items:'Cupcake', stars, color:"bg-[#F0FEEB]"},
    {id:6,img: tr6, name:'Doughnut Milk', items:'Doughnut', stars, color:"bg-[#F3F7D9]"},
    {id:7,img: tr7, name:'Doughnut Unicorn', items:'Doughnut', stars, color:"bg-[#F3F7D9]"},
    {id:8,img: tr8, name:'Kathi Kebab', items:'Kebab', stars, color:"bg-[#EAEEFA]"},
  ];

  return (
    <section className="py-16 bg-white">
      <div className="containers flex flex-col gap-14">
        
        <div>
          <h2 className="font-medium text-[38px] text-[#333]">Browser Our Trending</h2>
          <h3 className="font-medium text-[38px] text-[#8BAC3E]">Receipt</h3>
        </div>

        <div className="flex flex-wrap gap-10 justify-between">
          {cardList.map(item => (
            <Card
              key={item.id}
              item={item}
              variant="trending"
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button title="ALL Receipt" extraClass="!w-[160px] !h-[50px]" />
        </div>

      </div>
    </section>
  );
};

export default Trending;
