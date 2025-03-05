"use client"; 

import React from 'react';
import MushroomCard from '@/components/Mushroom/MushroomCard';

export default function MushroomList({ mushrooms }) {
    if (!mushrooms || mushrooms.length === 0) {
        return <p className="text-gray-500 text-center mt-4">No mushrooms found.</p>;  // Displays message when no results found
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mushrooms.map((mushroom) => (
                <MushroomCard 
                    key={mushroom.name}  // Use name since id isn't provided
                    image={mushroom.image} 
                    name={mushroom.name} 
                    warning={mushroom.isToxic} 
                />
            ))}
        </div>
    );
}
