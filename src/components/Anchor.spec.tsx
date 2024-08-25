import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Anchor } from "./Anchor";

test("Anchor", () => {
  render(<Anchor href="/projects" label="Projects" />);
  const element = screen.getByTestId("anchor");
  expect(element).toBeDefined();
});
