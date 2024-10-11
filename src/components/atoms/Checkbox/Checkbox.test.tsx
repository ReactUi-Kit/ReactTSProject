import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Pour les assertions supplémentaires comme 'toBeChecked'
import Checkbox from './Checkbox'; 

describe('Select component with checkboxes', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  it('renders the checkboxes and label', () => {
    render(<Checkbox label="Select options" options={options} multiple={true} />);

    // Vérifier que le label est bien affiché
    expect(screen.getByText('Select options')).toBeInTheDocument();

    // Vérifier que les checkboxes sont rendus
    options.forEach((option) => {
      const checkbox = screen.getByLabelText(option.label);
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked(); // Par défaut, les checkboxes ne doivent pas être cochées
    });
  });

  it('allows checking and unchecking the checkboxes', () => {
    render(<Checkbox label="Select options" options={options} multiple={true} />);

    // Simuler un clic pour cocher/décocher
    const option1Checkbox = screen.getByLabelText('Option 1');
    fireEvent.click(option1Checkbox);
    expect(option1Checkbox).toBeChecked(); // L'option 1 doit être cochée après le clic

    fireEvent.click(option1Checkbox);
    expect(option1Checkbox).not.toBeChecked(); // L'option 1 doit être décochée après le second clic
  });
});