import { AxiosResponse } from "axios";
import { client } from "../../shared/lib/axios";
import { UserDto } from "./types";

export const sendRegisteredUsers = (file: File) => {
    const form = new FormData();
    form.append('csv', file)
    return client.post<{csv: File}, AxiosResponse<UserDto[]>>("/users", form);
}

export const getRegisteredUsers = (section: string = "") => {
    return client.get<void, AxiosResponse<UserDto[]>>(`/users?section=${section}`);
}