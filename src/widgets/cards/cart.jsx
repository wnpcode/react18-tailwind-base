import CurrencyFormat from "@/configs/curency";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

const CartList = ({
  items,
  onRemoveFromCart,
  onUpdateQuantity,
  handleOpen,
  setTotal,
}) => {
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + item.totalPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="mx-2 flex w-96 flex-col">
      <div className="rounded-md bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Item List</h2>
        <ul className="max-h-[450px] min-h-[200px] overflow-y-auto">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <div></div>
              <TrashIcon
                className=" cursor-pointer text-red-600"
                width={24}
                onClick={() => {
                  // onUpdateQuantity(item.id, item.quantity + 1);
                }}
              ></TrashIcon>
              <div className="flex flex-row">
                <div className=" w-20 items-center ">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="h-12 w-12 rounded object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className=" text-base">{item.name}</span>
                  <span className=" text-base text-purple-300">
                    <CurrencyFormat value={item.totalPrice} currency="IDR" />
                  </span>
                </div>
              </div>
              <div>
                <div className=" items-center self-end">
                  <div className="flex flex-row gap-2">
                    <MinusCircleIcon
                      className={` ${
                        item.quantity == 1 ? "cursor-pointer text-red-600" : ""
                      }`}
                      width={24}
                      onClick={() => {
                        item.quantity == 1
                          ? onRemoveFromCart(item.id)
                          : onUpdateQuantity(item.id, item.quantity - 1);
                      }}
                    ></MinusCircleIcon>
                    {item.quantity}
                    <PlusCircleIcon
                      className="cursor-pointer"
                      width={24}
                      onClick={() => {
                        onUpdateQuantity(item.id, item.quantity + 1);
                      }}
                    ></PlusCircleIcon>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-base font-semibold">
          Total :{" "}
          <CurrencyFormat value={calculateTotalPrice()} currency="IDR" />
        </div>
        <div>
          <Button
            hidden={items.length !== 0 ? false : true}
            variant="gradient"
            onClick={() => handleOpen()}
            size="lg"
            className="w-full"
            color="purple"
          >
            Bayar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
