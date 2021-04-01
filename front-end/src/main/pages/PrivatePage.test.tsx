import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { PrivatePage } from "./PrivatePage";

describe("Private Page should", () => {
  test("render without crashing", () => {
    render(
      <MemoryRouter>
        <PrivatePage />
      </MemoryRouter>
    );
  });
});
