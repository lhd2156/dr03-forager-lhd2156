import React from 'react';
import MushroomCard from '@/components/Mushroom/MushroomCard';

export default function MushroomList({ mushrooms }) {
    if (!mushrooms || mushrooms.length === 0) {
        return <p className="text-gray-500 text-center">No mushrooms found.</p>;
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mushrooms.map((mushroom, index) => (
                <MushroomCard 
                    key={mushroom.id || index} // Ensure unique key
                    image={mushroom.image} 
                    name={mushroom.name} 
                    isToxic={mushroom.isToxic} 
                />
            ))}
        </div>
    );
}

