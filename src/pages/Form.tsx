import { Typography } from 'simplify-dev';
import { useUsersStore } from '../entities/registered-user/store';
import { SectionsMenu } from '../widgets/SectionsMenu';
import { Uploader } from '../widgets/Uploader';

export const Form = () => {
    const { users } = useUsersStore();
    return <>
        <Uploader />
        <SectionsMenu />
        {users.map((user) => <Typography>{JSON.stringify(user)}</Typography>)}
    </>
}