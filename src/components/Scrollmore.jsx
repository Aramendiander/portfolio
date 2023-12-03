import { useEffect, useState, useContext } from 'react';


const Scrollmore = ({onClick}) => {


    return (
        <div className="scrollmore" onClick={(e) => onClick(e)}>
            <p>Scroll to see my work</p>
            <i className="fa-solid fa-angles-down"></i>
        </div>
    )
}

export default Scrollmore