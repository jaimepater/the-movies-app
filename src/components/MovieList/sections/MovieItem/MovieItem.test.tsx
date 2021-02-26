import React, { FunctionComponent } from 'react';
import { fireEvent, render } from '@testing-library/react';
import MovieItem, { MovieItemProps } from './MovieItem';
import TestWrapper from '../../../../utils/test/TestWrapper';

const deleteHandler = jest.fn();
const clickHandler = jest.fn();

const props: MovieItemProps = {
  selected: false,
  movie: {
    title: 'test',
    release: '04/26/2019',
    image: '',
    description: 'mock  description',
    id: '1',
  },
  onClick: clickHandler,
  onDelete: deleteHandler,
  showsImage: false,
};

const Tree: FunctionComponent = () => {
  return (
    <TestWrapper>
      <MovieItem {...props} />
    </TestWrapper>
  );
};

describe('MovieItem', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('should have the labels', () => {
    const { queryByText } = render(<Tree />);
    expect(queryByText(/RELEASEDATE */)).toBeTruthy();
  });
  test('should call onDelete', () => {
    const { getByTestId } = render(<Tree />);
    const deleteOption = getByTestId('delete-option');
    fireEvent.click(deleteOption);
    expect(deleteHandler).toBeCalled();
  });
  test('should call onClick', () => {
    const { getByTestId } = render(<Tree />);
    const selectOption = getByTestId('select-option');
    fireEvent.click(selectOption);
    expect(clickHandler).toBeCalled();
  });
});
