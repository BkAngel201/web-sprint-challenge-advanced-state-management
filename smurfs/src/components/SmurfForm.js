import React, { useContext, useState } from 'react';
import SmurfContext from '../contexts/SmurfContext';

function SmurfForm() {

    const [formValues, setFormValues] = useState({
        name: '',
        height: '',
        age: ''
    })

    const { addNewSmurf } = useContext(SmurfContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        addNewSmurf(formValues.name, formValues.age, formValues.height)
    }
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Smurfs to the Village</h1>
            <label htmlFor="name">Smurf Name</label>
            <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} data-testid="name"/>
            <label htmlFor="height">Smurf Height</label>
            <input type="text" id="height" name="height" value={formValues.height} onChange={handleChange} data-testid="height"/>
            <label htmlFor="age">Smurf Age</label>
            <input type="text" id="age" name="age" value={formValues.age} onChange={handleChange} data-testid="age"/>
            <button type="submit">Add Smurf</button>
        </form>
    )
}

export default SmurfForm