import { useEffect, useState } from "react";
import { Box, Button, FileUploader } from "simplify-dev";
import { useSendCSV } from "../entities/registered-user/hooks";
import { useGetSections } from "../entities/section/hooks";

export const Uploader = () => {
    const [files, setFiles] = useState<File[]>([]);

    const sendCSV = useSendCSV(files[0]);
    const getSections = useGetSections();

    useEffect(() => void getSections(), []);

    const sendCSVAndRenderSections = () => {
        sendCSV().then(() => getSections())
    }
 
    return <Box className="flex flex-col gap-4 max-w-80">
        <FileUploader title={"Загрузите файл"} acceptedFileTypes={["text/csv"]} files={files} setFiles={setFiles} description="Поддерживаются только файлы CSV"/>
        <Button onClick={sendCSVAndRenderSections} >Получить выгрузку</Button>
        </Box>
}