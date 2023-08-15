import {react, useState} from 'react'
import { useUserContext } from '../hooks/context';

function Register() {

    const { addUser, error, setError } = useUserContext()
    const [inputState, setInputState] = useState({
        firstName,
        secondName
    })

    const { firstName, secondName } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addUser(inputState)
        setInputState({
            firstName,
            secondName
        }).catch(error)
    }
    return (
        <section>
            <div className='container .register_form'>
                <h1>Register User</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            First Name:
                            <input
                                type='text'
                                value={firstName}
                                placeholder='enter first name'
                                name={'firstName'}
                                onChange={handleInput('firstName')} />
                        </label>
                        <label>
                            Second Name:
                            <input
                                type='text'
                                value={secondName}
                                placeholder='enter second name'
                                name={'secondname'}
                                onChange={handleInput('secondName')} />
                        </label>
                    </div>
                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </section>
    );
}

export default Register;