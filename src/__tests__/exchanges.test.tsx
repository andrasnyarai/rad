import { render, screen } from "@testing-library/react";
import Exchanges from "../app/exchanges/[pageIndex]/page";

jest.mock("@/lib/api", () => ({
  ...jest.requireActual("@/lib/api"),
  getExchangesData: jest.fn(() =>
    Promise.resolve([
      {
        id: "test_exchange",
        name: "test_exchange",
        image: "https://example.com",
        year_established: "",
        country: "",
        trust_score: "",
        trade_volume_24h_btc: "",
        trade_volume_24h_btc_normalized: "",
      },
    ])
  ),
}));

describe("Exchanges", () => {
  it("renders exchange row", async () => {
    render(await Exchanges({ params: { pageIndex: "1" } }));

    const exchangeRow = screen.getByText("test_exchange");

    expect(exchangeRow).toBeInTheDocument();
  });
});
