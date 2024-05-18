import { getSections } from "./api";
import { useSectionStore } from "./store";

export const useGetSections = (): () => Promise<void> => {
    const { setSections } = useSectionStore();
    const request = async () => await getSections().then(res => setSections(res.data))
    return request
}