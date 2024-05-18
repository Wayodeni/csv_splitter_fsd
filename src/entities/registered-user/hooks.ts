import { useState } from "react";
import { getRegisteredUsers, getSections } from "./api";

export const useSendCSV = (file: File): [() => void, unknown] => {
    const [response, setResponse] = useState<unknown>();
    const request = () => getRegisteredUsers(file).then(res => setResponse(res))
    return [request, response]
}

export const useGetSections = (): [() => void, string[]] => {
    const [response, setResponse] = useState<string[]>([]);
    const request = () => {
        getSections().then(res => setResponse(res.data))
    };
    return [request, response]
}