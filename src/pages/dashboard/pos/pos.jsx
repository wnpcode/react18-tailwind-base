import GetPath from "@/configs/access";
import { useMaterialTailwindController } from "@/context";
import CartList from "@/widgets/cards/cart";
import { StatisticsProduct } from "@/widgets/cards/static-product";
import { TapNafc } from "@/widgets/modal/modal-tap-nfc";
import { Chip, Input, typography } from "@material-tailwind/react";
import _ from "lodash";
import { useEffect, useState } from "react";
import LoadingContext from "@/context/utils"; // import loading
import { useContext } from "react";
import { axiosGet } from "@/services";
import { handleCombo } from "@/configs/utils";
import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

const Product = () => {
  const loading = useContext(LoadingContext); // get state & function loading
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType, openSidenav } = controller;
  const isMerchant = GetPath().startsWith("/merchant");
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const [size, setsize] = useState(10);
  const [sort, setsort] = useState("name");
  const [dir, setdir] = useState(1);
  const [pages, setpages] = useState(0);
  const [totalElements, settotalElements] = useState(0);
  const [title, settitle] = useState("");
  const [tags, settags] = useState([]);
  const [tipe, settipe] = useState("");
  const [category, setCategory] = useState("");
  const [status, setstatus] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");
  const [hasMore, sethasMore] = useState(true);
  // const [selectCategory, setSelectCategory] = useState([]);
  const handleCategory = (val) => {
    if (val == "All") return setSelectCategory("All");
    // let list = [...selectCategory];
    // _.remove(list, (item) => item == "All");
    // if (list.includes(val)) _.remove(list, (item) => item == val);
    // else list.push(val);
    setSelectCategory(val);
  };

  const getListCategory = async () => {
    try {
      loading.setLoading(true);
      let response = await axiosGet(`api/v1/admin/categories`);
      let list = _.map(response.data.content, handleCombo);
      list.unshift({ label: "All", value: "All" });
      setSelectCategory("All");
      setCategoryList(list);
      loading.setLoading(false);
    } catch (error) {
      loading.setLoading(false);
    }
  };
  const initialCart = [];
  const [cart, setCart] = useState(initialCart);
  const addCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const getData = async () => {
    let query = {};
    query["page"] = page - 1;
    query["size"] = size;
    query["sort"] = sort;
    query["dir"] = dir;
    if (title) query["name"] = title;
    console.log(selectCategory, "selectCategory");
    if (selectCategory !== "All") query["categoryId"] = selectCategory;
    if (status) query["status"] = status;
    if (tipe) query["type"] = tipe;
    if (tags) query["tags"] = tags.join(",");
    try {
      loading.setLoading(true);
      let response = await axiosGet(`api/v1/admin/products`, query);
      loading.setLoading(false);
      // setData([
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      //   ...response.data.content,
      // ]);
      setData(response.data.content);
      setpage(response.data.number + 1);
      setsize(response.data.size);
      settotalElements(response.data.totalElements);
      setpages(response.data.totalPages);
      console.log(response.data.number < response.data.totalPages);
      sethasMore(response.data.number + 1 < response.data.totalPages);
    } catch (error) {
      loading.setLoading(false);
    }
  };

  const getMoreData = async () => {
    let query = {};
    query["page"] = page - 1 + 1;
    query["size"] = size;
    query["sort"] = sort;
    query["dir"] = dir;
    if (title) query["title"] = title;
    if (category) query["category"] = category;
    if (status) query["status"] = status;
    if (tipe) query["type"] = tipe;
    if (tags) query["tags"] = tags.join(",");
    try {
      loading.setLoading(true);
      let response = await axiosGet(`api/v1/admin/products`, query);
      loading.setLoading(false);
      // setData(
      //   data.concat([
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //     ...response.data.content,
      //   ])
      // );
      setData(data.concat(response.data.content));
      setpage(response.data.number + 1);
      setsize(response.data.size);
      settotalElements(response.data.totalElements);
      setpages(response.data.totalPages);
      console.log(response.data.number < response.data.totalPages);
      sethasMore(response.data.number + 1 < response.data.totalPages);
    } catch (error) {
      loading.setLoading(false);
    }
  };
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  const updateQuantity = (itemId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? { ...item, quantity: parseInt(quantity) > 0 ? parseInt(quantity) : 0 }
        : item
    );
    setCart(updatedCart);
  };

  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    var tottal = 0;
    tottal = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotal(tottal);
    setOpen(!open);
  };

  const getCartList = async () => {
    try {
      loading.setLoading(true);
      let response = await axiosGet(`api/v1/cashier/shopping-cart`);
      loading.setLoading(false);
      console.log(response);
      // let list = _.map(response.data.content, handleCombo);
      // list.unshift({ label: "All", value: "All" });
      // setSelectCategory("All");
      // setCategoryList(list);
    } catch (error) {
      loading.setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getListCategory();
    getData();
    getCartList();
  }, []);

  useEffect(() => {
    getData();
  }, [selectCategory]);

  useEffect(() => {
    const timeOutId = setTimeout(() => getData(), 500);
    return () => clearTimeout(timeOutId);
  }, [title]);

  return (
    <div className="mt-12 flex flex-row justify-between">
      <div className="flex max-w-[52rem] flex-col">
        <div className="flex w-full flex-row md:flex-col ">
          <div className="w-3/4 md:w-full">
            <div className="w-72">
              <Input
                label="Search"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                icon={<i className="fas fa-search" />}
              />
            </div>
          </div>
          <div
            className={`my-2 flex w-1/4 ${
              isMerchant ? "max-w-[860px]" : "max-w-[630px]"
            } 
             justify-end gap-1 overflow-x-auto pb-3 md:w-full md:justify-start`}
          >
            {categoryList.map((el, key) => (
              <Chip
                key={`category-${key}`}
                color="purple"
                variant={
                  // selectCategory.includes(el.value) ? `filled` : `outlined`
                  selectCategory == el.value ? `filled` : `outlined`
                }
                onClick={() => {
                  handleCategory(el.value);
                }}
                value={el.label}
              />
            ))}
          </div>
        </div>
        <div
          className={`flex h-[640px] w-[52rem] flex-wrap justify-start overflow-y-auto`}
        >
          {data.map((element, key) => (
            <div key={`product-${key}`} className="m-1 h-72" onClick={() => {}}>
              <StatisticsProduct
                items={element}
                addCart={addCart}
                key={element}
                setTotal={setTotal}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {hasMore ? (
            <Button
              ripple={false}
              fullWidth={true}
              // onClick={() => addCart(items)}
              onClick={() => {
                getMoreData();
              }}
              className="w-fit bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:bg-purple-500 hover:text-white hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              <Typography className="text-xs font-medium ">
                Load More
              </Typography>
            </Button>
          ) : (
            <Typography className="text-xs font-extrabold"></Typography>
          )}
        </div>
      </div>

      <CartList
        items={cart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        handleOpen={handleOpen}
        setTotal={setTotal}
      />

      <TapNafc open={open} handleOpen={handleOpen} total={total} />
    </div>
  );
};
export default Product;
