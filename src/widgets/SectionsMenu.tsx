import { TabList, TabListProvider } from "simplify-dev";
import { useSectionStore } from "../entities/section/store";
import { GetUsersButton } from "../features/GetUsersButton";

export const SectionsMenu = () => {
    const { sections } = useSectionStore();

    if (!sections?.length) return null;
    return <>
        <TabListProvider defaultSelectedId={sections[0]}>
            <TabList selectedVariant="secondary">
            {sections?.map((section) => <GetUsersButton section={section} />)}
            </TabList>
        </TabListProvider>
    </>
}