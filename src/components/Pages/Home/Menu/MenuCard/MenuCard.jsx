// import React from 'react';

const MenuCard = ({ menu }) => {
    return (
        <div>

            <div className="card card-side bg-white text-black shadow-xl">
                <figure ><img src={menu.image} className="rounded-tl-lg p-4" /></figure>
                <div className="card-body">
                    <div className="flex">
                        <div>
                            <h2 className="card-title">{menu.name}</h2>
                            <p>{menu.recipe}</p>
                        </div>
                        <div>
                            <h2 className="text-yellow-500">${menu.price}</h2>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MenuCard;