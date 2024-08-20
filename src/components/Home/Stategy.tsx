import { TbCoinTaka, TbTruckDelivery } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";

const Stategy = () => {
  return (
    <div className="bg-fourth py-14 mb-10 md:mb-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        <div className="flex flex-col items-center gap-2">
          <TbTruckDelivery className="h-14 w-14 text-fifth" />
          <h1 className="text-xl font-semibold">Home Delivery</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TbCoinTaka className="h-14 w-14 text-fifth" />
          <h1 className="text-xl font-semibold">Cash On Delivery</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Ri24HoursLine className="h-14 w-14 text-fifth" />
          <h1 className="text-xl font-semibold">9AM-7PM Support</h1>
        </div>
      </div>
    </div>
  );
};

export default Stategy;
