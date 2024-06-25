import { FC } from "react";
import { Button, ButtonProps } from "simplify-dev";
import { useGetRegisteredUsers } from "../entities/registered-user/hooks";

type GetUsersButtonProps = {
    section: string;
    onClick?: () => void;
} & Omit<ButtonProps, 'id' | 'children'>

export const GetUsersButton:FC<GetUsersButtonProps> = ({
    section,
    ...props
}) => {
    const getUsers = useGetRegisteredUsers();
    const onClick = () => {
        getUsers(section);
        props.onClick?.();
    }
    return <Button {...props as ButtonProps} id={section} onClick={onClick} className="w-auto">{section}</Button>
}