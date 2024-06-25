import { useUsersStore } from "../entities/registered-user/store"

export const UsersTable = () => {
    const {users} = useUsersStore();
    if (!users.length) return null;
    return <>
        <table className="w-full text-left table-auto min-w-max">
            <thead>
                <tr>
                    {Object.keys(users[0]).map(key => <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr>
                    {Object.values(user).map(value => <td className="p-4 border-b border-blue-gray-50">{value}</td>)}
                </tr>)}
            </tbody>
        </table>
    </>
}