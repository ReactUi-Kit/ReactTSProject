import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tabs from "./Tabs";

const tabsData = [
  { label: "Tab 1", children: <div>Content for Tab 1</div> },
  { label: "Tab 2", children: <div>Content for Tab 2</div> },
  { label: "Tab 3", children: <div>Content for Tab 3</div> },
];

describe("Tabs Component", () => {
  it("should render the tabs with correct labels", () => {
    render(<Tabs tabs={tabsData} />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("should display the correct content when a tab is clicked", () => {
    render(<Tabs tabs={tabsData} />);

    // Initially, Tab 1 content should be visible
    expect(screen.getByText("Content for Tab 1")).toBeVisible();
    expect(screen.queryByText("Content for Tab 2")).not.toBeVisible();

    // Click on Tab 2
    fireEvent.click(screen.getByText("Tab 2"));

    // Now, Tab 2 content should be visible and Tab 1 content should not
    expect(screen.getByText("Content for Tab 2")).toBeVisible();
    expect(screen.queryByText("Content for Tab 1")).not.toBeVisible();
  });

  it("should navigate between tabs using the keyboard (Arrow keys)", () => {
    render(<Tabs tabs={tabsData} />);

    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");
    const tab3 = screen.getByText("Tab 3");

    // Tab 1 is active initially
    tab1.focus();
    expect(tab1).toHaveFocus();

    // Press ArrowRight to navigate to Tab 2
    fireEvent.keyDown(tab1, { key: "ArrowRight" });
    expect(tab2).toHaveFocus();

    // Press ArrowRight again to navigate to Tab 3
    fireEvent.keyDown(tab2, { key: "ArrowRight" });
    expect(tab3).toHaveFocus();

    // Press ArrowLeft to navigate back to Tab 2
    fireEvent.keyDown(tab3, { key: "ArrowLeft" });
    expect(tab2).toHaveFocus();
  });

  it("should set correct aria-selected attribute for active tab", () => {
    render(<Tabs tabs={tabsData} />);

    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");

    // Initially, Tab 1 should be selected
    expect(tab1).toHaveAttribute("aria-selected", "true");
    expect(tab2).toHaveAttribute("aria-selected", "false");

    // Click on Tab 2
    fireEvent.click(tab2);

    // Now, Tab 2 should be selected
    expect(tab1).toHaveAttribute("aria-selected", "false");
    expect(tab2).toHaveAttribute("aria-selected", "true");
  });
});
