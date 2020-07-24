import { render } from "@testing-library/vue";
import "@testing-library/jest-dom/extend-expect";

import RecentUrl from "@/components/recent-urls/index.vue";

RecentUrl.methods.init = jest.fn();

describe("RecentUrl component", () => {
  beforeEach(() => {
    RecentUrl.methods.init.mockImplementation(function() {
      this._data.urls = [{ _id: "1234", url: "asd" }];
    });
  });

  it("should render UserInputURL", () => {
    const { container } = render(RecentUrl);

    expect(container).toMatchSnapshot();
  });
});
