import React, { useRef, useState } from "react";
import { Tab, TabList, TabPanel, TabsContainer } from "./Tabs.style";
import { TabsProps } from "./Tabs.props";

/**
 * Modal renders a tabs to switch between different content.
 *
 * @param {TabProps} tabs - An array of tabs with a label and children.
 */
export default function Tabs({ tabs, ...tabsProps }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]); // Store references to the tabs

  // Function to set focus explicitly
  const setFocus = (index: number) => {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "ArrowRight" || event.key === "Tab") {
      const nextIndex = (index + 1) % tabs.length;
      setActiveIndex(nextIndex);
      setFocus(nextIndex);
    } else if (event.key === "ArrowLeft") {
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setActiveIndex(prevIndex);
      setFocus(prevIndex);
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setFocus(index); // Ensure focus moves to clicked tab
  };

  return (
    <TabsContainer {...tabsProps}>
      <TabList role="tablist" aria-label="Sample Tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            ref={(el) => (tabRefs.current[index] = el)} // Store reference to each tab
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            tabIndex={activeIndex === index ? 0 : -1}
            isActive={activeIndex === index}
            onClick={() => handleClick(index)} // Set focus on click
            onKeyDown={(event) => handleKeyDown(event, index)} // Set focus on keyboard navigation
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
          hidden={activeIndex !== index}
        >
          {tab.children}
        </TabPanel>
      ))}
    </TabsContainer>
  );
}
