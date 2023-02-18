import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as reactQuery from 'react-query';

import '@testing-library/jest-dom';
import Page from '../pages';
import { UseQueryResult } from 'react-query';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-query')
const useQuery = jest.spyOn(reactQuery, 'useQuery')
const mockedUseQuery = (key: unknown) => {
  if (key === 'pokemonList') {
    return ({ data: [{ title: 'arbok' }, { title: 'baltoy' }], isLoading: false, isError: false }) as unknown as UseQueryResult;
  }
  return {
    data: {
      name: 'baltoy',
      height: '15',
      species: {
        name: 'spicies name'
      },
      sprites: {
        other: {
          dream_world: {
            front_default: 'img'
          }
        }
      }
    }, isLoading: false, isError: false
  } as unknown as UseQueryResult;
}
useQuery.mockImplementation(mockedUseQuery)


describe('Home Page', () => {

  describe('Basic page element', () => {
    it('renders a heading', () => {
      render(<Page />)
      const heading = screen.getByText('Pokédex');
      expect(heading).toBeInTheDocument();
    })
    it('renders a Search bar input', () => {
      render(<Page />)
      const searchBar = screen.getByRole('search-bar-input');
      expect(searchBar).toBeInTheDocument();
    })
  })

  describe('Search functionality', () => {
    it('should render a loader when loading the pokemon list', () => {
      useQuery.mockImplementation(jest.fn().mockReturnValue(({ data: {}, isLoading: true, isError: false })))
      render(<Page />)
      const loader = screen.getByRole('page-loader');
      expect(loader).toBeInTheDocument();
    })
    it('should render error message when error in fetching the list', () => {
      useQuery.mockImplementation(jest.fn().mockReturnValue(({ data: {}, isLoading: false, isError: true })))
      render(<Page />)
      const loader = screen.getByRole('search-bar-error');
      expect(loader).toBeInTheDocument();
    })

    it('should display auto suggestions list when users type a name in search bar', async () => {
      useQuery.mockImplementation(mockedUseQuery)
      const user = userEvent.setup()
      render(<Page />)
      const searchBar = screen.getByRole('search-bar-input');
      await fireEvent.focus(searchBar)
      await user.type(searchBar, 'b')
      await waitFor(() => {
        const list = screen.getAllByText('baltoy');
        expect(list.length).toBe(1)
      })
    })

    it('should display result card when user type and press enter in the search box', async () => {
      const user = userEvent.setup()
      render(<Page />)
      const searchBar = screen.getByRole('search-bar-input');
      await fireEvent.focus(searchBar)
      await user.type(searchBar, 'b');
      await user.keyboard('{Enter}');
      const list = screen.getAllByRole('result-card');
      expect(list.length).toBe(1)
    })

  })

  describe('Search result details', () => {
    it('should open a modal pop when user clicks on result card', async () => {
      const user = userEvent.setup()
      render(<Page />)
      const searchBar = screen.getByRole('search-bar-input');
      await fireEvent.focus(searchBar)
      await user.type(searchBar, 'b');
      await user.keyboard('{Enter}');
      const card = screen.getByRole('result-card');
      await user.click(card)
      const detailsView = screen.getByRole('pokemon-details-view');
      expect(detailsView).toBeInTheDocument()
    })
  });

})