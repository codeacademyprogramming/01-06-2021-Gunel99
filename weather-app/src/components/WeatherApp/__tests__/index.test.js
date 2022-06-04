import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from "../../WeatherApp";
import { getQueriesForElement } from "@testing-library/jest-dom";
import { getByText } from '@testing-library/dom';
import { render, fireEvent } from '@testing-library/react';


const render = component => {
    const root = document.createElement('div');
    ReactDOM.render(component, root);

    return getQueriesForElement(root);
}

test('should render WeatherApp component', () => {

    const { getByText, getByLabelText } = render(<WeatherApp />);

    // expect(
    //     root.querySelector('h1').textContent
    // ).toBe('Weather App');

    // expect(
    //     root.querySelector('button').textContent
    // ).toBe('Search');

    expect(getByText('Weather App')).not.toBeUndefined();
    expect(getByText('Search')).not.toBeUndefined();
    expect(getByLabelText('Country')).not.toBeUndefined();

})

test('should add country', () => {
    const { getByText, getByLabelText } = render(<WeatherApp />);

    fireEvent.change(getByLabelText('Country'), { target: { value: 'Learn react' } });
    fireEvent.click(getByText('Search'));

    expect(getByText('Learn react')).not.toBeUndefined();
})