import {render, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Spinner from './Spinner'

test('if component renders', () => {
  render(<Spinner />);
  expect(screen.queryByTestId('spinner')).not.toEqual(null);
});
