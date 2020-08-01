import React, {useContext} from 'react';
import SmurfContext from '../contexts/SmurfContext'
import {BrowserRouter as Router} from "react-router-dom"

import {render, fireEvent} from '@testing-library/react'
import App from './App';

test("render <App /> without crashing", () => {
    render(<Router><App/></Router>)
})

test("Form field (name) change value correctly", () => {
    const { getByTestId } = render(<Router><App/></Router>)
 
    const firstName = getByTestId("name")
    fireEvent.change(firstName, {
        target: {value: "Angel"}
    })
    expect(firstName).toHaveValue("Angel")
})

test("Form field (height) change value correctly", () => {
    const { getByTestId } = render(<Router><App/></Router>)
 
    const firstName = getByTestId("height")
    fireEvent.change(firstName, {
        target: {value: "4"}
    })
    expect(firstName).toHaveValue("4")
})

test("Form field (age) change value correctly", () => {
    const { getByTestId } = render(<Router><App/></Router>)
 
    const firstName = getByTestId("age")
    fireEvent.change(firstName, {
        target: {value: "200"}
    })
    expect(firstName).toHaveValue("200")
})