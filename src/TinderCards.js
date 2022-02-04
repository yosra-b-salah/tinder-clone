import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/people%2Felonmusk.jpg?alt=media&token=970a366f-6e14-4da4-b8e7-3f67b3362fa4'
        },
        {
            name: 'Jeff Bezoz',
            url: 'https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/people%2FjeffBezoz.jpg?alt=media&token=a7cf3828-a54d-454a-87a2-1e6670adbd8f'
        }
    ]);
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
                    <div style={{ backgroundImage: 'url(' + person.url + ')' }} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>

            )}
        </div>

    </div>;
};
export default TinderCards;
