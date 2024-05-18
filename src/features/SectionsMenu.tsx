import { TabListProvider, TabList, Button } from "simplify-dev";

interface SectionsProps {
    sections?: string[];
}


export const SectionsMenu = ({ sections } : SectionsProps) => {
    if (sections?.length) return null;
    return <>
        <TabListProvider defaultIndex="">
            <TabList className='bg-red-100 flex gap-3 p-3 rounded-xl flex-wrap justify-between'>
                {sections?.map((section, index) => <Button className="w-auto" id={index.toString()} key={index}>{section}</Button>)}
            </TabList>
        </TabListProvider>
    </>
}