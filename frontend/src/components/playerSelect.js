import React, {useState} from "react";
import "./playerSelect.css";

const PlayerSelect = () => {

    const playerList = [
        'Akila Dananjaya',
        'Angelo Mathews',
        'Ashen Bandara',
        'Asitha Fernando',
        'Avishka Fernando',
        'Bhanuka Rajapaksa',
        'Binura Fernando',
        'Chamika Karunaratne',
        'Charith Asalanka',
        'Dasun Shanaka',
        'Dhananjaya Lakshan',
        'Dhananjaya de Silva',
        'Dilshan Madushanka',
        'Dilshan Munaweera',
        'Dinesh Chandimal',
        'Dunith Wellalage',
        'Dushmantha Chameera',
        'Duvindu Tillakaratne',
        'Janith Liyanage',
        'Jeffrey Vandersay',
        'Kamindu Mendis',
        'Kasun Rajitha',
        'Kusal Mendis',
        'Kusal Perera',
        'Lahiru Kumara',
        'Lahiru Madushanka',
        'Lahiru Udara',
        'Lakshan Sandakan',
        'Lasith Croospulle',
        'Maheesh Theekshana',
        'Matheesha Pathirana',
        'Minod Bhanuka',
        'Nishan Madushka',
        'Nuwan Thushara',
        'Nuwanidu Fernando',
        'Oshada Fernando',
        'Pathum Nissanka',
        'Pramod Madushan',
        'Ramesh Mendis',
        'Sadeera Samarawickrama',
        'Sahan Arachchige',
        'Vijayakanth Viyaskanth',
        'Wanindu Hasaranga',
        ]

    const [selectedPlayers, setSelectedPlayers] = useState([
        "Player 1",
        "Player 2",
        "Player 3",
        "Player 4",
        "Player 5",
        "Player 6",
        "Player 7",
        "Player 8",
        "Player 9",
        "Player 10",
        "Player 11",
    ]);

    const [response, setResponse] = useState('');

    const handleSelecteChange = (index, value) => {
        const updatedPlayers = [...selectedPlayers];
        updatedPlayers[index] = value;
        setSelectedPlayers(updatedPlayers);
    }
    
    const handleCheck = async()=> {
        if (selectedPlayers.includes("Player 1") || selectedPlayers.includes("")){
            alert("Please select all 11 players!");
            return;
        }
        try{
            const res = await fetch("API_ENDPOINT_URL", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ players: selectedPlayers}),
            });
            const data = await res.json()
            setResponse(data.performance || "No performance data available.");
        }
        catch (error){
            console.error("Error connecting to backend:", error);
            setResponse("Error fetching player performance. Try again later.");
        }
    }
    
    return(
        <div className="player-select-container">
            <h3>Use ML model to check your player selection with others!</h3>
            <h3>Choose your 11</h3>
            <div className="players">
            {selectedPlayers.map((selected, index) => (
                <select 
                key={index}
                value={selected}
                onChange={(e) => handleSelecteChange(index, e.target.value)}
                >
                    <option disabled value={`Player ${index + 1}`}>
                        {`Player ${index + 1}`}
                    </option>
                    {playerList.map((player, idx) => (
                        <option
                        key={idx}
                        value={player}
                        >
                        {player}
                        </option>
                    ))}
                </select>
            ))}
               
            </div>
            <button
            onClick={handleCheck}
            >
                CHECK
            </button>
            {response && (
                <div> 
                <h4>Player's performance</h4>
                <p>{response}</p>
                </div>
            )}
        </div>
    )
}

export default PlayerSelect;
