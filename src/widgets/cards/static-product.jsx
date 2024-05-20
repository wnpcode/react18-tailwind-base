import CurrencyFormat from "@/configs/curency";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const StatisticsProduct = ({ addCart, items }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Card className="h-auto w-full">
        <CardHeader shadow={false} floated={false} className="h-28 w-28">
          {loading && (
            <>
              <div className="absolute top-0 left-0 z-[1000] flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50 ">
                <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-blue-500"></div>
              </div>
            </>
          )}
          <img
            src={items.images[0]}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-2">
          <div className="mb-2 flex flex-col items-center justify-between">
            <Typography color="blue-gray" className="text-sm font-medium">
              {items.name}
            </Typography>
            <Typography color="purple" className="my-1 text-sm font-medium">
              <CurrencyFormat value={items.totalPrice} currency="IDR" />
            </Typography>
            <Typography color="blue-gray" className="text-xs font-thin">
              Stock {items.stock}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="p-2 px-6 pt-0 ">
          <Button
            ripple={false}
            fullWidth={true}
            onClick={() => addCart(items)}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:bg-purple-500 hover:text-white hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            <Typography className="text-xs font-medium ">Add Item</Typography>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
