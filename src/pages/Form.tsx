import { SectionsMenu } from '../widgets/SectionsMenu';
import { Uploader } from '../widgets/Uploader';
import { UsersTable } from '../widgets/UsersTable';

export const Form = () => {
    return <>
        <Uploader />
        <SectionsMenu />
        <UsersTable />
    </>
}