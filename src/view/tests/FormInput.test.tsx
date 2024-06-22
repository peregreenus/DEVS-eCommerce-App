import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import FormInput from '../components/FormInput/FormInput';
import handleChange from '../components/FormInput/handleChange';

describe('FormInput', () => {
  it('should render without crashing', () => {
    const mockOnChange = jest.fn(handleChange);
    render(
      <FormInput
        id={0}
        name="test"
        labelName="Test"
        onChange={mockOnChange}
        placeholder="Test"
        errorMessage=""
        type=""
      />
    );
  });

  it('should call onChange when the input value changes', () => {
    const mockOnChange = jest.fn(handleChange);
    const { getByLabelText } = render(
      <FormInput
        id={0}
        name="test"
        labelName="Test"
        onChange={mockOnChange}
        placeholder="Test"
        errorMessage=""
        type=""
      />
    );

    fireEvent.change(getByLabelText('Test'), { target: { value: 'test value' } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should toggle the input type when the checkbox is clicked', () => {
    const mockOnChange = jest.fn(handleChange);
    const { getByLabelText } = render(
      <FormInput
        id={0}
        name="password"
        labelName="Password"
        onChange={mockOnChange}
        placeholder="Test"
        errorMessage=""
        type="password"
      />
    );

    const checkbox = getByLabelText('Password').nextSibling;
    const input = getByLabelText('Password');

    expect((input as HTMLInputElement).type).toBe('password');

    fireEvent.click(checkbox!);

    expect((input as HTMLInputElement).type).toBe('text');
  });
});
