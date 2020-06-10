import { render, cleanup } from '@testing-library/react';
import Navbar from "../Navbar";

afterEach(cleanup);

describe("Index page renders without error", () => {
  test("Checks if the link exists.", () => {
    const { getByTestId } = render(<Navbar />);
    //console.log(getByTestId.debug());
    expect(getByTestId('bitcoin-link')).toHaveTextContent("BitsPrice");
  })
});