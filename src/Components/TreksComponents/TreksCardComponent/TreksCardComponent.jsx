import React from 'react';
import { useNavigate } from 'react-router-dom';


const TreksCardComponent = ({id, name, duration, difficulty, real_price, discounted_price, image,difficulty_image , dur_image}) => {
    
    const navigate = useNavigate();

    const handleShowItinerary = (trekId) => {
        navigate(`/treks/itinerary/${trekId}`); // Show the itinerary details
    };
    return (
        <div className="trek-card">
            <img src={image} alt={name} />
            <div className="trek-card-content">
                <h3>{name}</h3>
                <div className="trek-details">
                    <div className="trek-duration">
                        <img src={dur_image} alt="Duration" />
                        <span>Duration - -</span>{duration}
                    </div>
                    <div className="trek-difficulty">
                        <img src={difficulty_image} alt="Difficulty" />
                        <span>Difficulty - -</span>{difficulty}
                    </div>
                </div>
                <div className="trek-price">
                    <div>
                        <del>₹{real_price}</del><span>({Math.floor(discounted_price/real_price*100)}% Off)</span><br />
                        <span>starting from</span>
                        <div className="discount">₹{discounted_price}</div>
                    </div>
                </div>
                <div className="trek-buttons">
                    <button onClick={() => handleShowItinerary(id)} className="trek-btnone">Know More</button>
                    <a href="google.com" className="trek-btntwo">Send Query</a>
                </div>
            </div>
        </div>
)
}

export default TreksCardComponent;