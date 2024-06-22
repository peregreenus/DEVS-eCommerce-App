import React from 'react';
import { render } from '@testing-library/react';
import AddPlusIcon from '../components/common/icons/addPlusIcon';
import ArrowLeftIcon from '../components/common/icons/ArrowLeftIcon';
import ArrowRightIcon from '../components/common/icons/ArrowRightIcon';
import CloseXIcon from '../components/common/icons/closeXIcon';
import DeleteIcon from '../components/common/icons/delete';
import EditPencilIcon from '../components/common/icons/editPencilIcon';
import GitHubIcons from '../components/common/icons/githubIcon';
import MinusIcon from '../components/common/icons/minus';
import PlusIcon from '../components/common/icons/plus';
import RemoveIcon from '../components/common/icons/removeIcon';
import SaveMarkIcon from '../components/common/icons/saveMarcIcon';
import ShoppingCartIcon from '../components/common/icons/shoppingCart';

describe('Icon components', () => {
  it('AddPlusIcon renders without crashing', () => {
    const { getByTestId } = render(<AddPlusIcon width="24" height="24" fill="#e5e7eb" />);
    const svgPath = getByTestId('plus-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('ArrowLeftIcon renders without crashing', () => {
    const { getByTestId } = render(<ArrowLeftIcon width="24" height="24" fill="#000" />);
    const svgPath = getByTestId('arrow-left-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('ArrowRightIcon renders without crashing', () => {
    const { getByTestId } = render(<ArrowRightIcon />);
    const svgPath = getByTestId('arrow-right-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('CloseXIcon renders without crashing', () => {
    const { getByTestId } = render(<CloseXIcon />);
    const svgPath = getByTestId('close-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('DeleteIcon renders without crashing', () => {
    const { getByTestId } = render(<DeleteIcon />);
    const svgPath = getByTestId('delete-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('EditPencilIcon renders without crashing', () => {
    const { getByTestId } = render(<EditPencilIcon />);
    const svgPath = getByTestId('edit-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('GitHubIcons renders without crashing', () => {
    const { getByTestId } = render(<GitHubIcons />);
    const svgPath = getByTestId('github-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('MinusIcon renders without crashing', () => {
    const { getByTestId } = render(<MinusIcon />);
    const svgPath = getByTestId('minus-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('PlusIcon renders without crashing', () => {
    const { getByTestId } = render(<PlusIcon />);
    const svgPath = getByTestId('plus-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('RemoveIcon renders without crashing', () => {
    const { getByTestId } = render(<RemoveIcon />);
    const svgPath = getByTestId('remove-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('SaveMarkIcon renders without crashing', () => {
    const { getByTestId } = render(<SaveMarkIcon />);
    const svgPath = getByTestId('save-mark-icon');

    expect(svgPath).toBeInTheDocument();
  });

  it('ShoppingCartIcon renders without crashing', () => {
    const { getByTestId } = render(<ShoppingCartIcon />);
    const svgPath = getByTestId('cart-icon');

    expect(svgPath).toBeInTheDocument();
  });
});
