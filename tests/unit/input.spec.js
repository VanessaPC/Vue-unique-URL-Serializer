import { render, screen, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom/extend-expect";

import UserInputURL from "@/components/input/index.vue";

describe("UserInputURL and submit button behaviour", () => {
  it("should render UserInputURL", () => {
    const { container } = render(UserInputURL);
    expect(container).toMatchSnapshot();
  });

  it("if input field is empty it should have the input field and not the button ", () => {
    render(UserInputURL);

    const input = screen.getByPlaceholderText("Enter your url");

    fireEvent.change(input, {
      target: { value: "thisnewURL.com" },
    });

    const button = screen.queryByText("Submit URL");

    expect(button).not.toBeVisible();
  });

  it("it should have the input field, and fill it, and then the button should be visible ", async () => {
    render(UserInputURL);

    const input = screen.getByPlaceholderText("Enter your url");

    await fireEvent.update(input, "thisnewURL.com");

    const button = screen.queryByText("Submit URL");

    expect(button).toBeVisible();
  });
});
