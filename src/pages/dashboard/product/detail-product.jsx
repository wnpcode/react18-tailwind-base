import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Switch,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const DetailProduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="mt-12">
        <CardBody className="overflow-x-scroll p-2 px-0 pt-0 pb-2">
          <div className="flex flex-row justify-between">
            <div>
              <Typography variant="h5">Product</Typography>
              <span>Manajement Product</span>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-row flex-wrap bg-white">
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="my-2 text-base font-semibold">Nama </h3>
              <Input
                disabled
                color="blue"
                type="text"
                size="lg"
                className="w-full"
                onChange={(e) => {}}
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className="my-2 text-base font-semibold">Jenis Product</h3>
              <Input
                disabled
                color="blue"
                type="text"
                size="lg"
                onChange={(e) => {}}
                className="w-full"
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="my-2 text-base font-semibold">Stok</h3>
              <Input
                disabled
                color="blue"
                type="email"
                size="lg"
                className="w-full"
                onChange={(e) => {}}
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className="my-2 text-base font-semibold">Kategori</h3>
              <Input
                disabled
                color="blue"
                type="number"
                onChange={(e) => {}}
                size="lg"
                className="w-full"
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="my-2 text-base font-semibold">SKU</h3>
              <Input
                disabled
                color="blue"
                type="text"
                size="lg"
                className="w-full"
                onChange={(e) => {}}
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="my-2 text-base font-semibold">Keterangan</h3>
              <Input
                disabled
                color="blue"
                type="email"
                size="lg"
                className="w-full"
                onChange={(e) => {}}
                name="column1"
              />
            </div>
          </div>
          <Typography variant="h5">Harga</Typography>

          <div className="mt-4 flex w-full flex-row flex-wrap bg-white">
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="my-2 text-base font-semibold">Harga Pembelian </h3>
              <Input
                disabled
                color="blue"
                type="text"
                size="lg"
                className="w-full"
                onChange={(e) => {}}
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className="my-2 text-base font-semibold">Harga Jual</h3>
              <Input
                disabled
                color="blue"
                type="text"
                size="lg"
                onChange={(e) => {}}
                className="w-full"
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="my-2 text-base font-semibold">PPN</h3>
              <Input
                disabled
                color="blue"
                type="email"
                size="lg"
                className="w-full"
                onChange={(e) => {}}
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className="my-2 text-base font-semibold">Total Harga</h3>
              <Input
                disabled
                color="blue"
                type="number"
                onChange={(e) => {}}
                size="lg"
                className="w-full"
                name="column1"
              />
            </div>

            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <Switch color="purple" defaultChecked />
            </div>
          </div>
          <Typography variant="h5">Foto</Typography>
          <div className="flex flex-row">
            <Card className="mx-1  h-52 w-52 ">
              <Button color="white" className="h-52  w-52 ">
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Card>
            <Card className="mx-1  h-52 w-52">
              <Button color="white" className="h-52  w-52 ">
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Card>
            <Card className="mx-1  h-52 w-52">
              <Button color="white" className="h-52  w-52 ">
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Card>
            <Card className="mx-1  h-52 w-52">
              <Button color="white" className="h-52  w-52 ">
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Card>
          </div>
        </CardBody>
        <CardFooter className="flex flex-row-reverse gap-1">
          <Button
            onClick={() => navigate("/dashboard/product")}
            className="mx-1 rounded-3xl"
            size="lg"
            color="purple"
            variant="gradient"
          >
            Simpan
          </Button>
          <Button
            onClick={() => navigate("/dashboard/product")}
            className="mx-1 rounded-3xl"
            size="lg"
            color="purple"
            variant="outlined"
          >
            Kembali
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default DetailProduct;
