import { FC } from "react";
import { Button } from "simplify-dev";
import { useGetRegisteredUsers } from "../entities/registered-user/hooks";

type GetUsersButtonProps = {
    section: string
}

export const GetUsersButton:FC<GetUsersButtonProps> = ({
    section
}) => {
    const getUsers = useGetRegisteredUsers();
    return <Button id={section} onClick={() => getUsers(section)}>{section}</Button>
}