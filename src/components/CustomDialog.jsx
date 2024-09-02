import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Textarea,
    Typography,
} from "@material-tailwind/react";

import groupInfo from "/Icons/Group-info.svg";


const CustomDialog = ({open, handleOpen, title, desc, btn, txtArea}) => {

    return(
        <>
            <Dialog 
            open={open} 
            size="md" 
            handler={handleOpen} 
            className="bg-color-white mt-12 left-1/4 max-w-[50vw] h-fit backdrop-blur-sm bg-opacity-90"
        >
            <div className="flex items-center justify-between">
                <DialogHeader className="flex flex-col items-start">
                    <img src={groupInfo} alt="" />
                </DialogHeader>
            </div>
            <DialogBody>
                <Typography className="mb-10 -mt-7 font-semibold" color="gray" variant="lead">
                    {title}
                </Typography>
                <Typography className="mb-10 -mt-7 text-base" color="gray" variant="lead">
                    {desc}
                </Typography>
                {txtArea && (
                    <div className="grid gap-6">
                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Alasan
                    </Typography>
                    <Textarea label="" />
                    </div>
                )}
            </DialogBody>
            <DialogFooter className="space-x-2 w-full flex justify-between">
                <Button variant="text" color="gray" className="border flex-1" onClick={handleOpen}>
                    Batal
                </Button>
                <Button variant="gradient" color="gray" className="bg-color-red text-color-white flex-1" onClick={handleOpen}>
                    {btn}
                </Button>
            </DialogFooter>
        </Dialog>
        </>
    )
}

export default CustomDialog