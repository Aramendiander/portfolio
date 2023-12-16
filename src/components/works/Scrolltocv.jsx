import { useEffect, useState, useContext } from 'react';


const Scrolltocv = ({onClick}) => {


    return (
        <div className="scrollmore" onClick={(e) => onClick(e)}>
            <p>What about checking my background</p>
            <i className="fa-solid fa-angle-down"></i>
        </div>
    )
}

export default Scrolltocv