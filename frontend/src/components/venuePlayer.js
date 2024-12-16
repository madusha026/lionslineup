import React, {useState} from "react";
import "./venuePlayer.css";

const VenuePlayer = () => {

    const venuewithPlayersMap = {
        "South Africa" : ["Kusal Perera","Pathum Nissanka","Kusal Mendis","Dasun Shanaka","Kamindu Mendis","Angelo Mathews","Chamika Karunaratne","Binura Fernando","Nuwan Thushara","Maheesh Theekshana","Dilshan Madushanka"],
        "England" : ["Kusal Perera","Pathum Nissanka","Kusal Mendis","Dasun Shanaka","Kamindu Mendis","Angelo Mathews","Chamika Karunaratne","Binura Fernando","Nuwan Thushara","Maheesh Theekshana","Dilshan Madushanka"],
        "New Zealand" : ["Kusal Perera","Pathum Nissanka","Kusal Mendis","Dasun Shanaka","Kamindu Mendis","Angelo Mathews","Chamika Karunaratne","Binura Fernando","Nuwan Thushara","Maheesh Theekshana","Dilshan Madushanka"],
        "Austaralia" : ["Kusal Perera","Pathum Nissanka","Kusal Mendis","Dasun Shanaka","Kamindu Mendis","Angelo Mathews","Chamika Karunaratne","Binura Fernando","Nuwan Thushara","Maheesh Theekshana","Dilshan Madushanka"],
        "India" : ["Kusal Perera","Pathum Nissanka","Kusal Mendis","Dasun Shanaka","Kamindu Mendis","Angelo Mathews","Chamika Karunaratne","Binura Fernando","Nuwan Thushara","Maheesh Theekshana","Matheesha Pathirana"],
        "Sri Lanka" : ["Kusal Perera","Pathum Nissanka","Kusal Mendis","Dasun Shanaka","Kamindu Mendis","Chamika Karunaratne","Wanindu Hasaranga","Binura Fernando","Nuwan Thushara","Maheesh Theekshana","Matheesha Pathirana"],
        "West Indies" : ["Kusal Perera","Pathum Nissanka","Kusal Mendis","Dasun Shanaka","Kamindu Mendis","Chamika Karunaratne","Wanuja Sahan","Wanindu Hasaranga","Binura Fernando","Nuwan Thushara","Maheesh Theekshana"],
    }
    

    const [venue, setVenue] = useState("");
    const [players, setPlayers] = useState([]);

    const handlevenueChange = (e) => {
        const selectedVenue = e.target.value; // Get the selected venue from the event
        setVenue(selectedVenue); // Update the venue state
        setPlayers(venuewithPlayersMap[selectedVenue] || []); // Update the players state with an array
    };



    return(
        <div>
            <h3>Use ML model to check your best SriLankan 11 players selection according to selected venue!</h3>
            <h3>Choose your 11</h3>
            <label className="venues">
                <h3>Venues</h3>
                <select
                className="venuess"
                value={venue}
                onChange={handlevenueChange}
                required>
                    <option value="" disabled>Choose Venue</option>
                    <option value="South Africa">South Africa</option>
                    <option value="England">England</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Austaralia">Austaralia</option>
                    <option value="India">India</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="West Indies">West Indies</option>
                </select>
            </label>
            <label className="selectedplayers">
                <h3 
                className="playerh3"
                >Selected Players</h3>
                <textarea
                className="response"
                value={players.join(", ")} // Convert array to comma-separated string
                placeholder="players"
                readOnly
                required
                />
            </label>

        </div>
    )
}

export default VenuePlayer;