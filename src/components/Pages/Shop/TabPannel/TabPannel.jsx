// import React from 'react';

const TabPannel = ({ i }) => {
    const { name, recipe, image, price } = i;

    return (
        <div className="card  shadow-xl">
            <figure >
                <img src={image} className="" />
                {/* <div className="bg-black">
                    <p>{price}</p>
                </div> */}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TabPannel;