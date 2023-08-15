import { createContext, useContext, useState } from "react"
import axios from "../axios"


const UserContext = createContext()


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [error, setError] = useState(null)


    const addUser = async () => {
        const response = await axios.post(`/<resource>`,)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getUsers()
    }

    const getUsers = async () => {
        const response = await axios.get(`/<resource>`)
        setUser(response.data)
    }

    const updateUser = async (id, updatedUserData) => {
        try {
            const response = await axios.put(`/<resource>/${id}`, updatedUserData);
            const updatedIndex = user.findIndex(u => u.id === id);
            if (updatedIndex !== -1) {
                const updatedUserArray = [...user];
                updatedUserArray[updatedIndex] = response.data;
                setUser(updatedUserArray);
            }
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/<resource>/${id}`);
            const updatedUserArray = user.filter(u => u.id !== id);
            setUser(updatedUserArray);
        } catch (err) {
            setError(err.response.data.message);
        }
    };



    return (
        <UserContext.Provider
        value={{
            addUser,
            getUsers,
            deleteUser,
            updateUser, 
            setError,
            error,
            user,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}