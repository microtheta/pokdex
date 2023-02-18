import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '@/components/SearchBar/SearchBar';


describe('Search bar component', () => {
  const onSearch = jest.fn();
  const user = userEvent.setup()

  it('should render input box', async () => {
    render(<SearchBar onSearch={onSearch} />);
    const searchBar = screen.getByRole('search-bar-input');
    expect(searchBar).toBeInTheDocument();
  })

  it('should call onSearchChange fn when user types', async () => {
    const onSearchChange = jest.fn();
    render(<SearchBar onSearch={onSearch} onSearchChange={onSearchChange} />);
    const searchBar = screen.getByRole('search-bar-input');
    await fireEvent.focus(searchBar)
    await user.type(searchBar, 'b');
    expect(onSearchChange).toHaveBeenCalled()
  })

  it('should call onSearch fn when user press enter', async () => {
    render(<SearchBar onSearch={onSearch} />);
    const searchBar = screen.getByRole('search-bar-input');
    await fireEvent.focus(searchBar)
    await user.type(searchBar, 'b');
    await user.keyboard('{Enter}');
    expect(onSearch).toHaveBeenCalled()
  })

})