import { getRegisteredUsers, sendRegisteredUsers } from "./api";
import { useUsersStore } from "./store";

export const useSendCSV = (file: File): () => Promise<void> => {
    const { setUsers } = useUsersStore();
    const request = async () => await sendRegisteredUsers(file).then(res => setUsers(res.data))
    return request
}

export const useGetRegisteredUsers = (): (section: string) => Promise<void> => {
    const { setUsers } = useUsersStore();
    const request = async (section: string) => await getRegisteredUsers(section).then(res => setUsers(res.data))
    return request
}