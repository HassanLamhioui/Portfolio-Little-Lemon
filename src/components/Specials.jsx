import React from 'react'

const Specials = () => {
    // Assuming data is fetched from an API or stored in a state variable.
    const specialsData = [
      { id: 1, name: 'Special Dish 1', description: 'A unique and tasty dish.' },
      { id: 2, name: 'Special Dish 2', description: 'A mouthwatering creation.' },
      // Add more specials as needed
    ];
  
    return (
      <div>
        <h3>Today's Specials</h3>
        <ul>
          {specialsData.map((special) => (
            <li key={special.id}>
              <h4>{special.name}</h4>
              <p>{special.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Specials