// import react-testing methods
import {render, screen} from '@testing-library/react'

// the component to test
import Insights from './Insights'
render(<Insights />);

test('if insightList component renders', () => {
  expect(screen.queryByTestId('insightList')).not.toEqual(null);
});
