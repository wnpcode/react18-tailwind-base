import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Button,
    Input,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
const RoleList = () => {
    const TABLE_HEAD = ["Nama Produk", "Jumlah", "Satuan", "Diskon", "Total Harga", "Aksi"];

    const TABLE_ROWS = [
        {
            name: "John Michael",
            qty: "Manager",
            satuan: "23/04/18",
            disc: "10%",
            total: "100000"

        },
        {
            name: "Alexa Liras",
            qty: "Developer",
            satuan: "23/04/18",
            disc: "10%",
            total: "100000"
        },
        {
            name: "Laurent Perrier",
            qty: "Executive",
            satuan: "19/09/17",
            disc: "10%",
            total: "100000"
        },
        {
            name: "Michael Levi",
            qty: "Developer",
            satuan: "24/12/08",
            disc: "10%",
            total: "100000"
        },
        {
            name: "Richard Gran",
            qty: "Manager",
            satuan: "04/10/21",
            disc: "10%",
            total: "100000"
        },
    ];
    const history = useParams()
    const navigate = useNavigate()

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">

            <Card className="px-2">

                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <div className="p-2 flex flex-row justify-between">
                        <div>

                            <Typography variant="h5">List Role</Typography>
                            <span>Manajement User</span>
                        </div>
                        <div>
                            <Button onClick={() => { navigate("/dashboard/user/role/add") }} color="purple">Tambah</Button>
                        </div>
                    </div>

                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map((item, index) => (
                                <tr key={index} className="even:bg-blue-gray-50/50">
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.name}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.satuan}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.qty}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.disc}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.total}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Button onClick={() => { navigate("/dashboard/user/role/add") }} className="mx-1" size="sm" color="white">

                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button className="mx-1" size="sm" color="white" onClick={() => { navigate("/dashboard/user/role/add") }} >
                                            <FontAwesomeIcon icon={faEye} />

                                        </Button>
                                        <Button className="mx-1" size="sm" color="white">

                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    )
}
export default RoleList;