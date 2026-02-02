
import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest';
import Counter from './counter';

test('it should render the component', () => {
    render(<Counter />);
});

test('it should increment when the increment button is clicked', ( ) => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    incrementButton.click();
    expect(screen.getByText('1')).toBeDefined();
})
