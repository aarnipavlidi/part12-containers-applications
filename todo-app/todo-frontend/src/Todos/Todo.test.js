// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

const todoDoneValue = {
  _id: "617fe2ca5d79a311505c815e",
  text: "First value!",
  done: true
};

const todoNotDoneValue = {
  _id: "617fefe74f443693a0047ac5",
  text: "Second value!",
  done: false
};

describe('Testing single Todo component', () => {

  it('Testing deleting todo value', async () => {

    const handleDeleteClick = jest.fn()
    const handleCompleteClick = jest.fn()

    const { getByText } = render(<Todo todo={todoDoneValue} deleteTodo={handleDeleteClick} completeTodo={handleCompleteClick} />);

    await fireEvent.click(screen.getByText('Delete'))
    expect(handleDeleteClick.mock.calls).toHaveLength(2)
    
  });

  it('Testing changing todo status', async () => {

    const handleDeleteClick = jest.fn()
    const handleCompleteClick = jest.fn()

    const { getByText } = render(<Todo todo={todoNotDoneValue} deleteTodo={handleDeleteClick} completeTodo={handleCompleteClick} />);

    await fireEvent.click(screen.getByText('Set as done'))
    expect(handleCompleteClick.mock.calls).toHaveLength(1)

  });
});
