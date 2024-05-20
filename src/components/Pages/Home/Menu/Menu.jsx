import { useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { useEffect } from "react";
import MenuCard from "./MenuCard/MenuCard";
import { Link } from "react-router-dom";


const Menu = () => {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => setMenuData(data))
    }, [])


    return (
        <div>
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"For Our Menu"}
            ></SectionTitle>

            <section className="py-22">
                <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {
                        menuData.slice(0, 6).map(menu => <MenuCard

                            key={menu._id}
                            menu={menu}></MenuCard>)
                    }
                </div>
                <div className="flex flex-col items-center py-14">
                    <Link to="/">
                        <button className="btn btn-outline border-0 border-b-4">View All</button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Menu;