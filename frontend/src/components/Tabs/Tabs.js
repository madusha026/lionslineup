import React, { useState } from "react";
import "./Tabs.css";
import PlayerSelect from "../playerSelect";
import VenueSelect from "../venueSelect";
import VenuePlayer from "../venuePlayer"; 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to track active tab
  
  const playerData1 =  [
    {
      id: 1,
      name: "Pathum Nissanka",
      position: "Batsman",
      image: "/images/image1.png",
    },
    {
      id: 2,
      name: "Kusal Perera",
      position: "Batsman",
      image: "/images/Kusal Perera.jpg",
    },
    {
      id: 3,
      name: "Avishka Fernando",
      position: "Batsman",
      image: "/images/Avishka Fernando.jpg",
    },
    {
      id: 4,
      name: "Dasun Shanaka",
      position: "All-rounder",
      image: "/images/dasun shanaka.jpg",
    },
    {
      id: 5,
      name: "Kamindu Mendis",
      position: "All-rounder",
      image: "/images/kamindu mendis.jpg",
    },
    {
      id: 6,
      name: "Angelo Mathews",
      position: "All-rounder",
      image: "/images/Angelo Mathews.jpg",
    },
    {
      id: 7,
      name: "Chamika Karunaratne",
      position: "Bowler",
      image: "/images/chamika karunaratne.jpg",
    },
    {
      id: 8,
      name: "Wanindu Hasaranga",
      position: "All-rounder",
      image: "/images/Wanindu Hasaranga.jpg",
    },
    {
      id: 9,
      name: "Maheesh Theekshana",
      position: "Bowler",
      image: "/images/Maheesh Theekshana.jpg",
      
    },
    {
      id: 10,
      name: "Dilshan Madushanka",
      position: "Bowler",
      image: "/images/dilshan madushanka.jpg",
    },
    {
      id: 11,
      name: "Binura Fernando",
      position: "Bowler",
      image: "/images/binura fernando.jpg",
    },
  ]

  const playerData2 =  [
    {
      id: 1,
      name: "Kusal Perera",
      position: "Batsman",
      image: "/images/Kusal Perera.jpg",
    },
    {
      id: 2,
      name: "Pathum Nissanka",
      position: "Batsman",
      image: "/images/image1.png",
    },
    {
      id: 3,
      name: "Kusal Mendis",
      position: "Wicketkeeper",
      image: "/images/kusal mendis.jpg",
    },
    {
      id: 4,
      name: "Dasun Shanaka",
      position: "All-rounder",
      image: "/images/dasun shanaka.jpg"
    },
    {
      id: 5,
      name: "Wanindu Hasaranga",
      position: "Bowler",
      image: "/images/Wanindu Hasaranga.jpg",
    },
    {
      id: 6,
      name: "Angelo Mathews",
      position: "All-rounder",
      image: "/images/Angelo Mathews.jpg",
    },
    {
      id: 7,
      name: "Kamindu Mendis",
      position: "All-rounder",
      image: "/images/kamindu mendis.jpg",
    },
    {
      id: 8,
      name: "Dunith Wellalage",
      position: "All-rounder",
      image: "/images/dunith wellalage.jpg",
    },
    {
      id: 9,
      name: "Maheesh Theekshana",
      position: "Bowler",
      image: "/images/Maheesh Theekshana.jpg",
    },
    {
      id: 10,
      name: "Matheesha Pathirana",
      position: "Bowler",
      image: "/images/matheesha pathirana.jpg",
    },
    {
      id: 11,
      name: "Nuwan Thushara",
      position: "Bowler",
      image: "/images/nuwan thushara.jpg",
    },

  ]
  const playerData3 =  [
    {
      id: 1,
      name: "Avishaka Fernando",
      position: "Batsman",
      image: "/images/Avishka Fernando.jpg",
    },
    {
      id: 2,
      name: "Pathum Nissanka",
      position: "Batsman",
      image: "/images/image1.png",
    },
    {
      id: 3,
      name: "Kusal Perera",
      position: "Wicketkeeper",
      image: "/images/Kusal Perera.jpg",
    },
    {
      id: 4,
      name: "Dasun Shanaka",
      position: "All-rounder",
      image: "/images/dasun shanaka.jpg"
    },
    {
      id: 5,
      name: "Kamindu mendis",
      position: "All-rounder",
      image: "/images/kamindu mendis.jpg",
    },
    {
      id: 6,
      name: "Chamika Karunarathne",
      position: "All-rounder",
      image: "/images/chamika karunaratne.jpg",
    },
    {
      id: 7,
      name: "Isuru Udana",
      position: "All-rounder",
      image: "/images/dunith wellalage.jpg",
    },
    {
      id: 8,
      name: "Wanindu Hasaranga",
      position: "All-rounder",
      image: "/images/Wanindu Hasaranga.jpg",
    },
    {
      id: 9,
      name: "Maheesh Theekshana",
      position: "Bowler",
      image: "/images/Maheesh Theekshana.jpg",
    },
    {
      id: 10,
      name: "Asitha Fernando",
      position: "Bowler",
      image: "/images/Asitha Fernando.jpg",
    },
    {
      id: 11,
      name: "Dilshan Madushanka",
      position: "Bowler",
      image: "/images/dilshan madushanka.jpg",
    },

  ]
  const playerData4 =  [
    {
      id: 1,
      name: "Sadeera Samarawickrama",
      position: "Batsman",
      image: "/images/sadeera samarawickrama.jpg",
    },
    {
      id: 2,
      name: "Pathum Nissanka",
      position: "Batsman",
      image: "/images/image1.png",
    },
    {
      id: 3,
      name: "Kusal Mendis",
      position: "Wicketkeeper",
      image: "/images/kusal mendis.jpg",
    },
    {
      id: 4,
      name: "Kamindu Mendis",
      position: "All-rounder",
      image: "/images/kamindu mendis.jpg",
    },
    {
      id: 5,
      name: "Dasun Shanaka",
      position: "All-rounder",
      image: "/images/dasun shanaka.jpg"
    },
    {
      id: 6,
      name: "Sahan Arachchige",
      position: "All-rounder",
      image: "/images/sahan arachchige.jpg",
    },
    {
      id: 7,
      name: "Dunith Wellalage",
      position: "Bowler",
      image: "/images/dunith wellalage.jpg",
    },
    {
      id: 8,
      name: "Wanindu Hasaranga",
      position: "Bowler",
      image: "/images/dunith wellalage.jpg",
    },
    {
      id: 9,
      name: "Maheesh Theekshana",
      position: "Bowler",
      image: "/images/dunith wellalage.jpg",
    },
    {
      id: 10,
      name: "Nuwan Thushara",
      position: "Bowler",
      image:"/images/dunith wellalage.jpg",
    },
    {
      id: 11,
      name: "Matheesha Pathirana",
      position: "Bowler",
      image: "/images/dunith wellalage.jpg",
    },

  ]

  



  // Fetch player data from backend
  // useEffect(() => {
  //   const fetchPlayers = async () => {
  //   try{
  //     const response = await fetch("API_ENDPOINT_URL");
  //     const data = await response.json();
  //     setPlayers(data);
  //     setFilteredPlayers(data.slice(0,11));
  //   }
  //   catch(error){
  //     console.error("Error fetching players:", error);
  //   }
  // }
  //   fetchPlayers();
  // }, []);


  // Update filtered players when a filter is applied
  // useEffect(() => {
  //   if(filterCountry){
  //     setFilteredPlayers(players.filter(player =>player.country === filterCountry));
  //   }else{
  //     setFilteredPlayers(players.slice(0,11));
  //   }
  // }, [filterCountry,players]);


  // Toggle filter visibility after displaying 11 players
  // useEffect(() => { 
  //   if (filteredPlayers.length === 11) {
  //     setShowFilter(true);
  //   }
  // }, [filteredPlayers]);

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
            {/* <div className="image-container"> */}
            <div className="image-container">
             {playerData1.map((player) => (
              <div key={player.id} className="player-card">
                <img
                  src={player.image}
                  alt={player.name}
                  className="player-image"
                />
                <h3 className="player-name">{player.name}</h3>
                <p className="player-position">{player.position}</p>
              </div>
             ))}
            <VenuePlayer/>
            <VenueSelect/>
            </div>
          </div>
        )}

        {activeTab === "tab2" && (
          <div className="tab-content">
            <h2>ESPN Content</h2>
            <p>Details for ESPN</p>
            <div className="image-container">
             {playerData2.map((player) => (
              <div key={player.id} className="player-card">
                <img
                  src={player.image}
                  alt={player.name}
                  className="player-image"
                />
                <h3 className="player-name">{player.name}</h3>
                <p className="player-position">{player.position}</p>
              </div>
             ))}
            </div>
          </div>
        )}

        {activeTab === "tab3" && (
          <div className="tab-content">
            <h2>LPL Content</h2>
            <p>Details for LPL</p>
            <div className="image-container">
             {playerData3.map((player) => (
              <div key={player.id} className="player-card">
                <img
                  src={player.image}
                  alt={player.name}
                  className="player-image"
                />
                <h3 className="player-name">{player.name}</h3>
                <p className="player-position">{player.position}</p>
              </div>
             ))}
            </div>
          </div>
        )}

        {activeTab === "tab4" && (
          <div className="tab-content">
            <h2>Fan Based Content</h2>
            <p>Details for Fan-Based Tab</p>
            <div className="image-container">
             {playerData4.map((player) => (
              <div key={player.id} className="player-card">
                <img
                  src={player.image}
                  alt={player.name}
                  className="player-image"
                />
                <h3 className="player-name">{player.name}</h3>
                <p className="player-position">{player.position}</p>
              </div>
             ))}
             <PlayerSelect/>
            </div> 
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Tabs;