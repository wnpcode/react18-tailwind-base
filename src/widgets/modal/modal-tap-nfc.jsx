import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import nfcIcon from "../../../public/img/nfc.svg"
import { useState } from "react";

export const TapNafc = ({ open, handleOpen, total }) => {
    const [nfc, setNfc] = useState(false)
    return (
        <Dialog open={open} handler={() => {
            handleOpen()
            setNfc(false)
        }} size="xs">
            {nfc ?
                <>
                    <DialogHeader>Konfirmasi</DialogHeader>
                    <DialogBody className="flex flex-col items-center">
                        <div className=" w-full justify-center items-center flex flex-col px-4 rounded-full">

                            <img
                                src='https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png'
                                className=" h-auto w-auto object-cover rounded-full"
                            />

                        </div>
                        <div className="w-full justify-between flex px-6">
                            <span className="text-black ">Nama</span>
                            <p>skkj</p>
                        </div>
                        <div className="w-full justify-between flex px-6">
                            <span className="text-black ">Id Kartu</span>
                            <p>skkj</p>
                        </div>
                        <div className="w-full justify-between flex px-6">
                            <span className="text-black ">Saldo</span>
                            <p>skkj</p>
                        </div>
                        <div className="w-full justify-between flex px-6">
                            <span className="text-black ">Total</span>
                            <p>skkj</p>
                        </div>
                        <div className="w-full justify-between flex px-6">
                            <span className="text-black ">PIN</span>

                        </div>
                        <div className="w-10/12">
                            <Input size="lg" className="text-right" type="text" />
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <div className="w-full justify-between flex flex-row px-6">

                            <span>Total</span>

                            <span className="font-bold text-purple-300">Rp {total}</span>
                        </div>

                        <div className="w-full flex-row flex items-end justify-center ">
                            <Button className="m-1 rounded-2xl" size="lg" color="purple" variant="outlined" onClick={() => setNfc(false)}>Kembali</Button>
                            <Button className="m-1 rounded-2xl" size="lg" color="purple" variant="gradient" onClick={() => {
                                handleOpen()
                                setNfc(false)
                            }}>Lanjut</Button>
                        </div>
                    </DialogFooter>
                </>
                :
                <>

                    <DialogHeader>Tap Kartu Anda</DialogHeader>
                    <DialogBody>
                        <div className=" w-full justify-center items-center flex flex-col px-4">

                            <img
                                src={nfcIcon}
                                className=" h-auto w-auto object-cover"
                            />
                            <span className="text-center">Silahkan Tap Kartu anda untuk melanjutkam pembayaran pos melalui kartu</span>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <div className="w-full justify-between flex flex-row px-6">

                            <span>Total</span>

                            <span className="font-bold text-purple-300">Rp {total}</span>
                        </div>

                        <div className="w-full">
                            <Button className="w-full" onClick={() => setNfc(true)}>Lanjutkan</Button>
                        </div>
                    </DialogFooter>
                </>
            }
        </Dialog>
    )
}