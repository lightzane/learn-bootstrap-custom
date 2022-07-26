import React, { useState } from "react";

interface Props {
    children?: React.ReactNode;
}

export const FavoriteButton: React.FC<Props> = ({ children }) => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const isActive = () => active ? 'bi-star-fill' : 'bi-star';

    let btnClassName = 'btn m-auto d-block mb-3 ';

    if (active) {
        btnClassName += 'btn-primary';
    } else {
        btnClassName += 'btn-outline-primary';
    }

    let node = children ? children : 'Add to Favorites';

    return (
        <button className={btnClassName} onClick={handleClick}>
            <span className={'bi me-2 ' + isActive()}></span>
            {active ? 'Remove Favorites' : node}
        </button>
    );
};