import React, { useEffect } from 'react';
import { useUserContext } from '../hooks/context';

function List() {
    const { getUsers, users, deleteUser, updateUser } = useUserContext();

    useEffect(() => {
        getUsers();
    }, []);

    const toggleAttendance = async (id, isPresent) => {
        const updatedUserData = { isPresent: !isPresent };
        await updateUser(id, updatedUserData);
    };

    return (
        <section>
            <div>
                <h1>List of users</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>First Name</th>
                                <th>Second Name</th>
                                <th>Attendance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((data) => {
                                const { id, firstName, secondName, isPresent } = data;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{firstName}</td>
                                        <td>{secondName}</td>
                                        <td>{isPresent ? 'Present' : 'Absent'}</td>
                                        <td>
                                            <button onClick={() => updateUser(id)}>Edit</button>
                                            <button onClick={() => deleteUser(id)}>Delete</button>
                                            <button onClick={() => toggleAttendance(id, isPresent)}>
                                                Toggle Attendance
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default List;
