import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';





const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('stories.json')
            .then(res => res.json())
            .then(data => setStories(data))
    }, []);
// console.log(stories);


    return (
        <div className='my-20'>
        <div className='text-center'>
            <h2 className="text-4xl font-serif font-bold text-green-500 my-12">Why Choosing Health Coach</h2>
            <div className='w-1/2 mx-auto my-8'>
                <p>We handpick the best coaches and health experts from across the country to make sure you get the most personalized health care you deserve between those doctor visits.</p>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                stories?.map(story => <StoryCard
                    key={story._id}
                    story={story}
                ></StoryCard>)
            }
        </div>
    </div>
    );
};

export default Stories;