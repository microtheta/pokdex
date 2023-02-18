import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-query', () => ({
  useQuery: jest.fn().mockReturnValue(({ data: { a:1 }, isLoading: false, error: {} }))
}));

import Page from '../pages'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByText('Pokédex')

    expect(heading).toBeInTheDocument()
  })
})