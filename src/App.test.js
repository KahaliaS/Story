import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import App from "./App";

//Tests to see whether map component renders when clicking it on the sidenav

test("renders map component when navigating from sidenav", async () => {
  render(
    <MemoryRouter initialEntries={["/opening-page"]}>
      <App />
    </MemoryRouter>,
  );

  // Simulate clicking on a link that navigates away
  fireEvent.click(screen.getByText("Map"));

  // Wait for the Map Page component to appear
  await waitFor(() => {
    expect(screen.getByTestId("map")).toBeInTheDocument();
  });
});

//Tests to see whether inventory component renders when clicking it on the sidenav
test("renders inventory component when navigating from sidenav", async () => {
  render(
    <MemoryRouter initialEntries={["/opening-page"]}>
      <App />
    </MemoryRouter>,
  );

  // Simulate clicking on a link that navigates away
  fireEvent.click(screen.getByText("Inventory"));

  // Wait for the Inventory Page component to appear
  await waitFor(() => {
    expect(screen.getByTestId("inventory")).toBeInTheDocument();
  });
});

//Tests to see whether notebook component renders when clicking it on the sidenav
test("renders notebook component when navigating from sidenav", async () => {
  render(
    <MemoryRouter initialEntries={["/opening-page"]}>
      <App />
    </MemoryRouter>,
  );

  // Simulate clicking on a link that navigates away
  fireEvent.click(screen.getByText("Notebook"));

  // Wait for the Inventory Page component to appear
  await waitFor(() => {
    expect(screen.getByTestId("notebook")).toBeInTheDocument();
  });
});

//Tests to see whether player-stats component renders when clicking it on the sidenav
test("renders playerstats component when navigating from sidenav", async () => {
  render(
    <MemoryRouter initialEntries={["/opening-page"]}>
      <App />
    </MemoryRouter>,
  );

  // Simulate clicking on a link that navigates away
  fireEvent.click(screen.getByText("Player Stats"));

  // Wait for the Inventory Page component to appear
  await waitFor(() => {
    expect(screen.getByTestId("player-stats")).toBeInTheDocument();
  });
});

//Tests to see whether settings component renders when clicking it on the sidenav
test("renders settings component when navigating from sidenav", async () => {
  render(
    <MemoryRouter initialEntries={["/opening-page"]}>
      <App />
    </MemoryRouter>,
  );

  // Simulate clicking on a link that navigates away
  fireEvent.click(screen.getByText("Settings"));

  // Wait for the Inventory Page component to appear
  await waitFor(() => {
    expect(screen.getByTestId("settings")).toBeInTheDocument();
  });
});
