import { useEffect } from 'react';
import { SectionsMenu } from '../widgets/SectionsMenu';
import { UsersTable } from '../widgets/UsersTable';
import { useGetRegisteredUsers } from '../entities/registered-user/hooks';

export const Table = () => {
    const getUsers = useGetRegisteredUsers();
    useEffect(() => {getUsers()},[])
    return <>
        <SectionsMenu />
        <UsersTable />
    </>
}