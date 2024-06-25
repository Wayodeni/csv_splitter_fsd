import { TabList, TabListProvider } from "simplify-dev";
import { useSectionStore } from "../entities/section/store";
import { GetUsersButton } from "../features/GetUsersButton";
import { useGetSections } from "../entities/section/hooks";
import { useEffect } from "react";

export const SectionsMenu = () => {
    const { sections } = useSectionStore();

    const getSections = useGetSections();

    useEffect(() => void getSections(), []);
    
    if (!sections?.length) return null;
    return <>
        <TabListProvider defaultSelectedId={sections[0]}>
            <TabList selectedVariant="secondary" className="flex flex-wrap gap-3 bg-grey-100 p-3 rounded-2xl m-2">
            {sections?.map((section) => <GetUsersButton section={section} variant="tertiary" />)}
            </TabList>
        </TabListProvider>
    </>
}