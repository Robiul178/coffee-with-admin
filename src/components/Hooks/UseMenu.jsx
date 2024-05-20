import { useEffect, useState } from "react";

const UseMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return menu;
};

export default UseMenu;