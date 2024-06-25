import { FC } from "react";
import { Button, ButtonProps } from "simplify-dev";
import { useGetRegisteredUsers } from "../entities/registered-user/hooks";

type GetUsersButtonProps = {
    section: string;
} & Omit<ButtonProps, 'id' | 'onClick' | 'children'>

export const GetUsersButton:FC<GetUsersButtonProps> = ({
    section,
    ...props
}) => {
    const getUsers = useGetRegisteredUsers();
    const onClick = () => {
        getUsers(section);
    }
    return <Button id={section} onClick={onClick} {...props as ButtonProps}>{section}</Button>
}