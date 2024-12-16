import React, { useState, useEffect } from "react";
import "./Tabs.css";
import PlayerSelect from "../playerSelect";
import VenueSelect from "../venueSelect";
import VenuePlayer from "../venuePlayer";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to track active tab
  const [players, setPlayers] = useState([]);
  const [filterCountry, setFilterCountry] = useState(""); // State for selected filter
  const [filteredPlayers, setFilteredPlayers] = useState([]); // State for filtered players
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter visibility


  // Fetch player data from backend
  useEffect(() => {
    const fetchPlayers = async () => {
    try{
      const response = await fetch("API_ENDPOINT_URL");
      const data = await response.json();
      setPlayers(data);
      setFilteredPlayers(data.slice(0,11));
    }
    catch(error){
      console.error("Error fetching players:", error);
    }
  }
    fetchPlayers();
  }, []);


  // Update filtered players when a filter is applied
  useEffect(() => {
    if(filterCountry){
      setFilteredPlayers(players.filter(player =>player.country === filterCountry));
    }else{
      setFilteredPlayers(players.slice(0,11));
    }
  }, [filterCountry,players]);


  // Toggle filter visibility after displaying 11 players
  useEffect(() => { 
    if (filteredPlayers.length === 11) {
      setShowFilter(true);
    }
  }, [filteredPlayers]);

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
            <p>for T20 2023 </p>
            <div className="image-container">
              {/* Example card */}
              {filteredPlayers.map((player,index)=>(
              <div className="image-container1">
                <img src={player.image} alt="Player" />
                <h2>{player.name} <br/>
                </h2>
                <h4>{player.position}</h4>
              </div>
              
            ))}
              {/* Add more player cards here */}

            {/* Show Filter Section After Displaying Players */}
            {showFilter &&(
              <div className="filter-section">
                <label className="country-filter">Filter by Country:</label>
                <select
                  id="country-filter"
                  value={filterCountry}
                  onChange={(e) => setFilterCountry(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Country 1">Country 1</option>
                  <option value="Country 2">Country 2</option>
                  <option value="Country 3">Country 3</option>
                </select>
              </div>
              
            )}
            <VenuePlayer/>
            <VenueSelect/>
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
            <PlayerSelect/>
          </div>
         
        )}
        
      </div>
    </div>
  );
};

export default Tabs;