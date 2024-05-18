import { AxiosResponse } from "axios";
import { client } from "../../shared/lib/axios";

export const getRegisteredUsers = (file: File) => {
    const form = new FormData();
    form.append('csv', file)

    return client.post("/users", form);
}

export const getSections = () => {
    return client.get<void, AxiosResponse<string[]>>("/sections");
}