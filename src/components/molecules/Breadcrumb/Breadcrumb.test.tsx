import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import des assertions Jest supplémentaires
import Breadcrumb from './Breadcrumb'; // Import de ton composant Breadcrumb

describe('Breadcrumb component', () => {
  test('renders breadcrumb items correctly', () => {
    const options = [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Details', link: '/products/1' },
    ];

    render(
      <Breadcrumb
        options={options}
        backgroundColor="#f8f9fa"
        textColor="#007bff"
        barSize="100%"
        textSize="16px"
      />
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  test('applies the correct background color and text color', () => {
    const options = [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Details', link: '/products/1' },
    ];

    render(
      <Breadcrumb
        options={options}
        backgroundColor="#f8f9fa"
        textColor="#007bff"
        barSize="100%"
        textSize="16px"
      />
    );

   
    const container = screen.getByText('Home').closest('div');
    expect(container).toHaveStyle('background-color: #f8f9fa');

    const link = screen.getByText('Home');
    expect(link).toHaveStyle('color: #007bff');
  });

  test('applies the correct text size and spacing', () => {
    const options = [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Details', link: '/products/1' },
    ];

    render(
      <Breadcrumb
        options={options}
        backgroundColor="#f8f9fa"
        textColor="#007bff"
        barSize="100%"
        textSize="20px"
      />
    );

  });

  test('renders the correct number of breadcrumb items', () => {
    const options = [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Details', link: '/products/1' },
    ];

    render(
      <Breadcrumb
        options={options}
        backgroundColor="#f8f9fa"
        textColor="#007bff"
        barSize="100%"
        textSize="16px"
      />
    );

    // Vérification du nombre d'items
    const items = screen.getAllByText(/Home|Products|Details/);
    expect(items.length).toBe(3);
  });

  test('renders links with correct href attributes', () => {
    const options = [
      { label: 'Home', link: '/' },
      { label: 'Products', link: '/products' },
      { label: 'Details', link: '/products/1' },
    ];

    render(
      <Breadcrumb
        options={options}
        backgroundColor="#f8f9fa"
        textColor="#007bff"
        barSize="100%"
        textSize="16px"
      />
    );

    // Vérification des attributs href des liens
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products');
    expect(screen.getByText('Details').closest('a')).toHaveAttribute('href', '/products/1');
  });
});