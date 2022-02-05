import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import db from './firebase'
const TinderCards = () => {
    const [people, setPeople] = useState([]);

    /*
    //import axios from './axios';
    using Monogo Base
     useEffect(() => {
        async function fetchData() {
            const req = await axios.get('tinder/cards');
            console.log(req.data)
            setPeople(req.data);
        }
        fetchData();
    }, []); */

    // this is from firebase
    useEffect(() => {
        const unsubscribe = db.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        })
        return () => {
            // this is the cleanup..
            unsubscribe();
        }
        // if we have this blank[] this will run ONCE when the component loads and never again
        // if [people] if the people value changes it will refire the code above and we need the cleanup
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log('removing', nameToDelete);
        setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + 'left the screen');
    };
    const setLastDirection = (direction) => {
        console.log('person went to ' + direction);

    };
    return <div className='tinderCards'>
        <div className='tinderCards_cardContainer'>
            {people.map((person, index) =>
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{ backgroundImage: 'url(' + person.imgURl + ')' }} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>

            )}
        </div>

    </div>;
};
export default TinderCards;
