/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import AbButton from './index';

describe('o botão deve:', () => {
  test('ser renderizado com o texto corretamente', async () => {
    render(<AbButton label="teste" />);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('teste');
  });
});
