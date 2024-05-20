import { getSessionStorage } from "@/configs/asyncSessionStorage";
import { checkRegex, generateRandomPassword } from "@/configs/utils";
import LoadingContext from "@/context/utils"; // import loading
import { roleList } from "@/data/combo";
import { axiosGet, axiosPost } from "@/services";
import {
  Button,
  Card,
  CardBody,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Switch,
  Typography,
} from "@material-tailwind/react";
import { Dialog, FormControl, MenuItem, Select } from "@mui/material";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  // console.log(
  //   getSessionStorage("login_data"),
  //   JSON.parse(getSessionStorage("login_data"))
  // );
  const { t, i18n } = useTranslation();
  const loading = useContext(LoadingContext); // get state & function loading
  const navigate = useNavigate();
  const params = useParams();
  const [login_data, setLoginData] = useState(
    JSON.parse(getSessionStorage("login_data")) || {}
  );
  const [data, setData] = useState({ active: false, roleType: "" });
  const [tempPass, setTempPass] = useState("");
  const [createModal, setCreateModal] = useState(false);
  const closeCreateModal = () => {
    setCreateModal(false);
    navigate("/dashboard/user/user-management", { replace: true });
  };
  const [valid, setValid] = useState({
    name: true,
    username: true,
    roleType: true,
    phone: true,
    email: true,
    password: true,
  });
  const [invalidMsg, setInvalidMsg] = useState({
    name: "",
    username: "",
    roleType: "",
    phone: "",
    email: "",
    password: "",
  });
  const [roles, setRoles] = useState([...roleList]);

  const [role, setRole] = useState("");

  const changeRole = (val) => {
    console.log(val.target.value);
    setRole(val.target.value);
  };

  const getData = async () => {
    try {
      loading.setLoading(true);
      let response = await axiosGet(`api/v1/admin/users/${params.id}`);
      setData(response.data);
      // console.log(response.data);
      loading.setLoading(false);
    } catch (error) {
      loading.setLoading(false);
    }
  };

  const changeData = (val, key) => {
    let tempData = { ...data };
    _.set(tempData, key, val);
    setData(tempData);
  };

  const saveData = async () => {
    // return console.log(validate());
    if (!validate()) return;
    // return console.log({
    //   ...data,
    //   companyId: login_data.companyId,
    //   merchantId: login_data.companyId,
    //   password: data.password || generateRandomPassword(8),
    // });
    try {
      loading.setLoading(true);
      let pass = data.password || generateRandomPassword(8);
      let response = await axiosPost(`api/v1/admin/users`, {
        ...data,
        companyId: login_data.companyId,
        merchantId: login_data.companyId,
        password: pass,
      });
      setTempPass(pass);
      setData(response.data);
      setCreateModal(true);
      // console.log(response.data);
      toast.success(t("successfully added"));
      // await getData();

      loading.setLoading(false);
    } catch (error) {
      loading.setLoading(false);
    }
  };

  const validate = () => {
    let validTemp = {
      name: true,
      username: true,
      roleType: true,
      phone: true,
      email: true,
      password: true,
    };
    let invalidMsgTemp = {
      name: "",
      username: "",
      roleType: "",
      phone: "",
      email: "",
      password: "",
    };
    let ignore = ["password"];
    let arr = _.reject(_.keys(validTemp), (el) => ignore.includes(el));
    _.map(arr, (item) => {
      // console.log(t(item), t("username"), item);
      if (!_.get(data, item)) {
        // console.log(item, "kosong");
        invalidMsgTemp[item] = `${t(item)} ${t("required")}`;
        validTemp[item] = false;
      }
    });
    setInvalidMsg(invalidMsgTemp);
    setValid(validTemp);
    return _.reduce(_.values(validTemp), (a, b) => a && b, true);
  };

  const checkPhone = (e) => {
    console.log(e.key, checkRegex(e.key));
    if (checkRegex(e.key)) e.preventDefault();
  };

  useEffect(() => {
    const ascynFx = async () => {
      await getData();
    };

    ascynFx();
  }, []);
  return (
    <>
      <Card className="mt-12">
        <CardBody className="overflow-x-scroll p-2 px-0 pt-0 pb-2">
          <div className="flex flex-row justify-between p-2">
            <div>
              <Typography variant="h5">{t("Add User")}</Typography>
              <Typography variant="small">Manajemen User</Typography>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-row flex-wrap bg-white">
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="required my-2 text-base font-semibold">
                {t("name")}
              </h3>
              <Input
                color="blue"
                type="text"
                size="sm"
                className="w-full"
                placeholder={t("name")}
                onChange={(e) => {
                  changeData(e.target.value, "name");
                }}
                value={data?.name}
                name="column1"
                error={!valid.name && !_.get(data, "name")}
                // error={valid["name"]}
              />
              <Typography className="text-xs text-red-500">
                {!_.get(data, "name") && invalidMsg["name"]}
              </Typography>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="required my-2 text-base font-semibold">
                {t("roleType")}
              </h3>

              <FormControl
                size="small"
                error={!valid["roleType"] && !_.get(data, "roleType")}
              >
                {/* {data?.roleType} */}
                <Select
                  placeholder={t("roleType")}
                  // label={t("roleType")}
                  key={data?.roleType}
                  onChange={(e) => {
                    changeData(e.target.value, "roleType");
                  }}
                  defaultValue={data?.roleType}
                  value={data?.roleType}
                >
                  <MenuItem value="" disabled selected>
                    {t("roleType")}
                  </MenuItem>
                  {roles.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography className="text-xs text-red-500">
                {!_.get(data, "roleType") && invalidMsg["roleType"]}
              </Typography>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className="required my-2 text-base font-semibold">
                {t("username")}
              </h3>
              <Input
                placeholder={t("username")}
                color="blue"
                type="text"
                size="sm"
                onChange={(e) => {
                  changeData(e.target.value, "username");
                }}
                value={data?.username}
                className="w-full"
                name="column1"
                error={!valid["username"] && !_.get(data, "username")}
              />
              <Typography className="text-xs text-red-500">
                {!_.get(data, "username") && invalidMsg["username"]}
              </Typography>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className="my-2 text-base font-semibold ">{t("password")}</h3>
              <Input
                placeholder={t("password")}
                color="blue"
                type="text"
                size="sm"
                onChange={(e) => {
                  changeData(e.target.value, "password");
                }}
                value={data?.password}
                className="w-full"
                name="column1"
                error={!valid["password"] && !_.get(data, "password")}
              />
              <Typography color="gray" className="text-[12px] font-light">
                Jika password tidak isi, akan digenerate secara otomatis
              </Typography>
              <Typography className="text-xs text-red-500">
                {!_.get(data, "password") && invalidMsg["password"]}
              </Typography>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="required my-2 text-base font-semibold">
                {t("phone")}
              </h3>
              <Input
                placeholder={t("phone")}
                color="blue"
                type="tel"
                size="sm"
                onKeyPress={checkPhone}
                onChange={(e) => {
                  console.log(e);
                  changeData(e.target.value, "phone");
                }}
                value={data?.phone}
                name="column1"
                error={!valid.phone && !_.get(data, "phone")}
              />
              <Typography className="text-xs text-red-500">
                {!_.get(data, "phone") && invalidMsg["phone"]}
              </Typography>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2">
              <h3 className="required my-2 text-base font-semibold">
                {t("email")}
              </h3>
              <Input
                placeholder={t("email")}
                color="blue"
                type="email"
                size="sm"
                onChange={(e) => {
                  changeData(e.target.value, "email");
                }}
                value={data?.email}
                name="column1"
                error={!valid.email && !_.get(data, "email")}
              />
              <Typography className="text-xs text-red-500">
                {!_.get(data, "email") && invalidMsg["email"]}
              </Typography>
            </div>
            <div className=" flex w-1/2 flex-col px-2 py-2 ">
              <h3 className="my-2 text-base font-semibold">{t("status")}</h3>
              <Switch
                color="purple"
                checked={data?.active}
                onChange={(e) => changeData(!data.active, "active")}
                label="Status"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-row-reverse gap-1">
            <Button
              onClick={() => {
                saveData();
                // navigate("/dashboard/user/user-management")
              }}
              className="mx-1 rounded-3xl"
              size="sm"
              color="purple"
              variant="gradient"
            >
              {t("save")}
            </Button>
            <Button
              onClick={() => navigate("/dashboard/user/user-management")}
              className="mx-1 rounded-3xl"
              size="sm"
              color="purple"
              variant="outlined"
            >
              {t("back")}
            </Button>
          </div>
        </CardBody>
      </Card>
      <Dialog
        // handler={() => (false)}
        open={createModal}
      >
        <DialogHeader>{t("user data")}</DialogHeader>
        <DialogBody>
          <div className="w-72">
            <code className="flex flex-col">
              <span>username : {data?.username}</span>
              <span>password : {tempPass}</span>
            </code>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button onClick={() => closeCreateModal()}>{t("close")}</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddUser;
