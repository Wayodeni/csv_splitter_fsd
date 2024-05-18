import {  useEffect, useState } from "react"
import {FileUploader, Button, Typography, TabListProvider, TabList } from "simplify-dev"
import { useGetSections, useSendCSV } from "../entities/registered-user/hooks";

export const Uploader = () => {
    const [files, setFiles] = useState<File[]>([]);

    const [sendCSV, csv] = useSendCSV(files[0]);
    const [getSections, sections] = useGetSections();

    useEffect(() => getSections(), []);

    console.log(sections);
 
    return <>
        <FileUploader title={"Загрузите файл"} acceptedFileTypes={["text/csv"]} files={files} setFiles={setFiles} description="Поддерживаются только файлы CSV"/>
        <Button onClick={sendCSV}>Получить выгрузку</Button>
        {sections && <TabListProvider defaultIndex={sections[0]}>
                <TabList selectedVariant="secondary">
                    {sections.map((section, index) => <Button key={index} id={index.toString()}>{section}</Button>)}
                </TabList>
            </TabListProvider>}
        {csv && <Typography>{JSON.stringify(csv)}</Typography>}
        
    </>
}