import React from 'react';

const StoryCard = ({ story }) => {
    // console.log(story);
    const { title, img } = story;



    return (


        <div className="card w-96 mx-auto bg-base-100 shadow-xl rounded-none hover:bg-green-500 cursor-pointer">
            <figure><img  src={img} alt="Service-img" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>


            </div>
        </div>

    );
};

export default StoryCard;