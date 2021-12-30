import React from "react"
import "./collection.scss"
import NextArrow from "../carousel/nextArrow";
import PrevArrow from "../carousel/prevArrow";


const settings = {
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}

const Collection = ({list}) => {
    return (<div className="collection-wrapper">
        <div className="max-width collection">
            <div className="collection-title">Collections</div>
            <div className="collection-subtitle-row"></div>
            <div className="collection-subtitle-text">
                Explore curated list of top restaurants, cafes, pubs and bars in Katubaddha,
                Based on trends.
            </div>
            <div className="collection-location">
                <div>All Collection in Katubaddha.</div>
                <i className="fi fi-rs-caret-right absolute-center"></i>
            </div>
        </div>
    </div>)
}

export default Collection;
