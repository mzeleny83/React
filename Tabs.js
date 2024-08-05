import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab.name} onClick={() => setActiveTab(tab.name)}>
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            style={{ display: tab.name === activeTab ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
