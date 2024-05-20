import LoadingContext from "@/context/utils"; // import loading
import { CATEGORYLIST, TYPELIST } from "@/data/combo";
import { axiosGet, axiosPut } from "@/services";
import InputCurrency from "@/widgets/input-currency";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
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
import { FormControl, MenuItem, Select } from "@mui/material";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { t, i18n } = useTranslation();
  const loading = useContext(LoadingContext); // get state & function loading
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState(null);
  const [valid, setValid] = useState({
    name: true,
    username: true,
    role: true,
    phone: true,
    email: true,
  });
  const [invalidMsg, setInvalidMsg] = useState({
    name: "",
    username: "",
    role: "",
    phone: "",
    email: "",
  });
  const [category, setCategory] = useState("");
  const [tipe, settipe] = useState("");
  const [categoryList, setCategoryList] = useState([...CATEGORYLIST]);
  const [tipeList, setTipeList] = useState([...TYPELIST]);

  const getData = async () => {
    try {
      loading.setLoading(true);
      let response = await axiosGet(`crmv2/order/product/admin/${params.id}`);
      setData(response.data);
      // console.log(response.data);
      loading.setLoading(false);
    } catch (error) {
      loading.setLoading(false);
    }
  };

  const changeData = (val, key) => {
    // console.log(val);
    let tempData = { ...data };
    _.set(tempData, key, val);
    setData(tempData);
  };

  const saveData = async () => {
    if (!validate()) return;
    try {
      loading.setLoading(true);
      let response = await axiosPut(
        `crmv2/order/product/admin/${params.id}`,
        data
      );
      setData(response.data);
      // console.log(response.data);
      await getData();
      loading.setLoading(false);
    } catch (error) {
      loading.setLoading(false);
    }
  };

  const validate = () => {
    let validTemp = {
      name: true,
      "credentialId.username": true,
      "credentialId.role": true,
      phone: true,
      email: true,
    };
    let invalidMsgTemp = {
      name: "",
      "credentialId.username": "",
      "credentialId.role": "",
      phone: "",
      email: "",
    };
    let ignore = ["phone", "email"];
    let arr = _.reject(_.keys(validTemp), (el) => ignore.includes(el));
    _.map(arr, (item) => {
      // console.log(t(item), t("credentialId.username"), item);
      if (!_.get(data, item)) {
        // console.log(item, "kosong");
        invalidMsgTemp[item] = `${t(item)} ${t("required")}`;
        validTemp[item] = false;
      }
    });
    setInvalidMsg(invalidMsgTemp);
    setValid(validTemp);
  };

  useEffect(() => {
    const ascynFx = async () => {
      await getData();
    };

    ascynFx();
  }, []);

  return (
    <>
      <Card className="mt-12 ">
        <CardBody className="">
          <div className="flex flex-row justify-between">
            <div>
              <Typography variant="h5">Product</Typography>
              <Typography variant="small">Manajement Product</Typography>
            </div>
          </div>
          <Typography variant="h5" className="mt-4">
            Informasi Umum
          </Typography>
          <div className=" flex w-full flex-row flex-wrap bg-white">
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className=" text-base font-semibold">Kategori</h3>
              <FormControl
                size="small"
                error={!valid["category"] && !_.get(data, "category")}
              >
                <Select
                  onChange={(e) => {
                    changeData(e.target.value, "category");
                  }}
                  value={data?.category}
                >
                  {categoryList.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className=" text-base font-semibold">Jenis Product</h3>
              <FormControl
                size="small"
                error={!valid["type"] && !_.get(data, "type")}
              >
                <Select
                  onChange={(e) => {
                    changeData(e.target.value, "type");
                  }}
                  value={data?.type}
                >
                  {tipeList.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className=" text-base font-semibold">Nama </h3>
              <Input
                color="blue"
                type="text"
                size="lg"
                className="w-full"
                onChange={(e) => {
                  changeData(e.target.value, "title");
                }}
                value={data?.title}
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className=" text-base font-semibold">Stok</h3>
              <Input
                color="blue"
                type="email"
                size="lg"
                className="w-full"
                onChange={(e) => {
                  changeData(e.target.value, "stock");
                }}
                value={data?.stock}
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className=" text-base font-semibold">SKU</h3>
              <Input
                color="blue"
                type="text"
                size="lg"
                className="w-full"
                onChange={(e) => {
                  changeData(e.target.value, "sku");
                }}
                value={data?.sku}
                name="column1"
              />
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className=" text-base font-semibold">Keterangan</h3>
              <Input
                color="blue"
                type="email"
                size="lg"
                className="w-full"
                onChange={(e) => {
                  changeData(e.target.value, "description");
                }}
                value={data?.description}
                name="column1"
              />
            </div>
          </div>
          <Typography variant="h5">Harga</Typography>

          <div className="mt-4 flex w-full flex-row flex-wrap bg-white">
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className=" text-base font-semibold">HPP </h3>
              <InputCurrency
                onValueChange={(e) => changeData(e, "hpp")}
              ></InputCurrency>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className=" text-base font-semibold">Harga Jual</h3>
              <InputCurrency
                onValueChange={(e) => changeData(e, "selling_price")}
              ></InputCurrency>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className=" text-base font-semibold">PPN</h3>
              <InputCurrency
                type="percentage"
                value={data?.tax}
                onValueChange={(e) => changeData(e, "tax")}
              ></InputCurrency>
              {/* {data?.tax} */}
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className=" text-base font-semibold">Total Harga</h3>
              <InputCurrency
                onValueChange={(e) => changeData(e, "price")}
              ></InputCurrency>
            </div>

            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <Switch color="purple" defaultChecked />
            </div>
          </div>
          <Typography variant="h5">Foto</Typography>
          <div className="flex flex-row gap-1">
            <Card className="flex aspect-square w-1/6 cursor-pointer items-center justify-center">
              <FontAwesomeIcon
                icon={faPlusSquare}
                className="fa-3x text-gray-700"
              />
            </Card>
            <Card className="flex aspect-square w-1/6 cursor-pointer items-center justify-center">
              <FontAwesomeIcon
                icon={faPlusSquare}
                className="fa-3x text-gray-700"
              />
            </Card>
            <Card className="flex aspect-square w-1/6 cursor-pointer items-center justify-center">
              <FontAwesomeIcon
                icon={faPlusSquare}
                className="fa-3x text-gray-700"
              />
            </Card>
            <Card className="flex aspect-square w-1/6 cursor-pointer items-center justify-center">
              <FontAwesomeIcon
                icon={faPlusSquare}
                className="fa-3x text-gray-700"
              />
            </Card>
            <Card className="flex aspect-square w-1/6 cursor-pointer items-center justify-center">
              <FontAwesomeIcon
                icon={faPlusSquare}
                className="fa-3x text-gray-700"
              />
            </Card>
            <Card className="flex aspect-square w-1/6 cursor-pointer items-center justify-center">
              <FontAwesomeIcon
                icon={faPlusSquare}
                className="fa-3x text-gray-700"
              />
            </Card>
          </div>
        </CardBody>
        <CardFooter className="flex flex-row-reverse gap-1">
          <Button
            onClick={() => navigate("/dashboard/product")}
            className=" rounded-3xl"
            size="lg"
            color="purple"
            variant="gradient"
          >
            Simpan
          </Button>
          <Button
            onClick={() => navigate("/dashboard/product")}
            className=" rounded-3xl"
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

export default EditProduct;
