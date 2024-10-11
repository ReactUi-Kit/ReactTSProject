import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Radio from './Radio'; 

describe('Select component with Radio', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders the Radio and label', () => {
    render(<Radio label="Select options" options={options} textColor="black" textSize="16px" width="auto" />);

    // Vérifier que le label est bien affiché
    expect(screen.getByText('Select options')).toBeInTheDocument();

    // Vérifier que les radios sont rendus
    options.forEach((option) => {
      const radio = screen.getByLabelText(option.label);
      expect(radio).toBeInTheDocument();
      expect(radio).not.toBeChecked(); // Par défaut, les radios ne doivent pas être cochées
    });
  });

  it('allows checking and unchecking the radios', () => {
    render(<Radio label="Select options" options={options} textColor="black" textSize="16px" width="auto" />);

    // Simuler un clic pour cocher/décocher
    const option1Radio = screen.getByLabelText('Option 1');
    const option2Radio = screen.getByLabelText('Option 2');
    fireEvent.click(option1Radio);
    expect(option1Radio).toBeChecked(); // L'option 1 doit être cochée après le clic

    fireEvent.click(option2Radio);
    expect(option2Radio).toBeChecked(); // L'option 2 doit être cochée après le clic
    expect(option1Radio).not.toBeChecked(); // L'option 1 doit être décochée après le second clic
    
    
  });
});