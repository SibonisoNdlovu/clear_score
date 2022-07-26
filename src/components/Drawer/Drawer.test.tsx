import {render, screen} from '@testing-library/react'
// the component to test
import Drawer from './Drawer'

test('if component renders', () => {
  render(<Drawer />);
  expect(screen.queryByTestId('drawer')).not.toEqual(null);
});