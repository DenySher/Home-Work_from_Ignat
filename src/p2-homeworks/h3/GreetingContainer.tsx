import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> 
    addUserCallback: (name: string) => void 
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') 
    const [error, setError] = useState<boolean>(false) 

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { 
        setName((e.currentTarget.value)) 
    }

    const addUser = () => {
        const trimmedName = name.trim()
        if (trimmedName) {
            addUserCallback(trimmedName)
        } else {
            setError(true)
        }
        setName('')
        alert(`Hello ${name} !`)
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
