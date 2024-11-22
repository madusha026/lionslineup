import React from "react";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="tabs-container">
      {/* Tab Controls */}
      <input type="radio" name="tab" id="tab1" defaultChecked />
      <label htmlFor="tab1" className="tab-label">
        Main
      </label>
      <input type="radio" name="tab" id="tab2" />
      <label htmlFor="tab2" className="tab-label">
        ESPN
      </label>

      <input type="radio" name="tab" id="tab3" />
      <label htmlFor="tab3" className="tab-label">
        Tab 3
      </label>

      <input type="radio" name="tab" id="tab3" />
      <label htmlFor="tab3" className="tab-label">
        Tab 4
      </label>

      {/* Tab Content */}
      <div className="tab-content" id="content1">
        <h2>Tab 1 Content</h2>
        <p>This is the content for Tab 1.</p>
      </div>
      <div className="tab-content" id="content2">
        <h2>Tab 2 Content</h2>
        <p>This is the content for Tab 2.</p>
      </div>
      <div className="tab-content" id="content3">
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
      </div>
    </div>
  );
};

export default Tabs;
