import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  Option,
  Select,
  Switch,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const AddRole = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="mt-12">
        <CardBody className="overflow-x-scroll p-2 px-0 pt-0 pb-2">
          <div className="flex flex-row justify-between">
            <div>
              <Typography variant="h5">Tambah Role</Typography>
              <span>Manajement User</span>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-row flex-wrap bg-white">
            <div className=" flex w-full flex-col px-2 py-2">
              <h3 className="my-2 text-base font-semibold">Nama Roles</h3>
              <Select
                color="blue"
                label="Pilih Roles"
                size="lg"
                className="w-full"
                onChange={(e) => {}}
                name="column1"
              >
                <Option>a</Option>
              </Select>
            </div>
            <div className=" flex w-1/2 flex-col px-2 ">
              <h3 className="my-2 text-base font-semibold">Menu</h3>
            </div>
            <div className=" flex w-full flex-row px-2 py-2">
              <div className=" flex w-1/2 flex-col px-2 py-2">
                <Checkbox
                  color="purple"
                  id="ripple-on"
                  label="Dashboard"
                  ripple={true}
                />
                <Checkbox
                  color="purple"
                  id="ripple-off"
                  label="User Management"
                  ripple={true}
                />
              </div>
              <div className=" flex w-1/2 flex-col px-2 py-2">
                <Checkbox
                  color="purple"
                  id="ripple-on"
                  label="Melihat Dashboard"
                  ripple={true}
                />
                <Checkbox
                  color="purple"
                  id="ripple-off"
                  label="Melihat User Management"
                  ripple={true}
                />
                <Checkbox
                  color="purple"
                  id="ripple-off"
                  label="Edit User Management"
                  ripple={true}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-row-reverse gap-1">
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
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default AddRole;
