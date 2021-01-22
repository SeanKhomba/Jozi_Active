import React, { useEffect,useState } from 'react';
import Radium from 'radium';
import ReactCardCarousel from "react-card-carousel";
import { connect } from 'react-redux';
import  Jozi_Active_Events  from '../data/Event_Data.jsx';
import { Link } from 'react-router-dom';


const Carousel = (props) => {
    const [characters,setCharacters] = useState(['']);
    console.log(Jozi_Active_Events)
    console.log('this is the data',characters)
          useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character`,{
                    method:'GET',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()
                  }
            );
            console.log(response);
            const data = await response.json();
            setCharacters(data.results);
        };
        fetchData();
      }, []);
    return (
        <div style={styles.cardContainer}>
        <ReactCardCarousel 
        // autoplay={true} 
        autoplay_speed={5000}
        spread={'wide'}
        disable_keydown={false}
        >
            {Jozi_Active_Events.map((events) => {
                return(
                <div style={[styles.card,(events.background_color)]} key={events.id}>
                    <Link style={{textDecoration:'none'}} to={`/home/calendar/${events.id}/${events.event_type}`}>
                        <img src={events.image} alt={"Jozi Active Bike"}  style={styles.cardImage} />
                    </Link>
                </div> 
                )
            })}
        </ReactCardCarousel>
    </div>
		)
    }
    
const mapStateToProps = (state) => {
    return {
        event: state.eventsReducer.events,
    }
}

export default connect(mapStateToProps)(Radium(Carousel));


const styles = {
    cardContainer: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flex: 1,
        justifyonCtent: 'center',
        alignItems: 'middle',
    },
    card: {
        width: 241,
        height: 255,
        scrollPaddingBlockStart: 80,
        boxSizing: 'border-box',
        overflow: 'visible',
        borderRadius: 20,
        filter: 'blur(0px)',
        boxShadow:' inset 0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
        border: '1px solid #222',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 425px)': {
            width: 170,
            height: 175,
        },
        '@media (max-height: 568px)': {
            width: 140,
            height: 145,
        }
    },
    cardImage: {
        width: 120,
        height: 120,
        '@media (max-width: 425px)': {
            width: 100,
            height: 100,
        }
    }
}