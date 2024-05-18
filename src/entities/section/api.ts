import { AxiosResponse } from "axios";
import { client } from "../../shared/lib/axios";
import { Section } from "./types";

export const getSections = () => {
    return client.get<void, AxiosResponse<Section[]>>("/sections");
}