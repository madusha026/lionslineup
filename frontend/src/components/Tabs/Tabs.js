import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to track active tab

  return (
    <div className="tabs-container">
      {/* Tab Controls */}
      <div className="tabs-controls">
        <input
          type="radio"
          name="tab"
          id="tab1"
          defaultChecked
          onChange={() => setActiveTab("tab1")}
        />
        <label htmlFor="tab1" className="tab-label">
          Main
        </label>

        <input
          type="radio"
          name="tab"
          id="tab2"
          onChange={() => setActiveTab("tab2")}
        />
        <label htmlFor="tab2" className="tab-label">
          ESPN
        </label>

        <input
          type="radio"
          name="tab"
          id="tab3"
          onChange={() => setActiveTab("tab3")}
        />
        <label htmlFor="tab3" className="tab-label">
          LPL
        </label>

        <input
          type="radio"
          name="tab"
          id="tab4"
          onChange={() => setActiveTab("tab4")}
        />
        <label htmlFor="tab4" className="tab-label">
          Fan Based
        </label>
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {activeTab === "tab1" && (
          <div className="tab-content">
            <h2>Selected Squad</h2>
            <p>for T20 2023 Sri Lanka</p>
            <div className="image-container">
              {/* Example card */}
              <div className="image-container1">
                <img src="#" alt="Player" />
                <h3>Kusal</h3>
                <h4>Mendis</h4>
                <h5>Wicketkeeper | Batsman</h5>
              </div>
              {/* Add more player cards here */}
            </div>
          </div>
        )}

        {activeTab === "tab2" && (
          <div className="tab-content">
            <h2>ESPN Content</h2>
            <p>Details for ESPN</p>
            {/* Add content related to ESPN */}
          </div>
        )}

        {activeTab === "tab3" && (
          <div className="tab-content">
            <h2>LPL Content</h2>
            <p>Details for LPL</p>
            {/* Add content related to LPL */}
          </div>
        )}

        {activeTab === "tab4" && (
          <div className="tab-content">
            <h2>Fan Based Content</h2>
            <p>Details for Fan-Based Tab</p>
            {/* Add content related to Fan Based */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
