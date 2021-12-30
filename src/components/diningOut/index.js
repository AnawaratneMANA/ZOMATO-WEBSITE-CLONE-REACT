import React from 'react'
import "./diningOut.scss"
import Collection from "../common/collections";
// Collection List.
const collectionList = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters",
    },
    {
        id: 2,
        title: "Pro Offers",
        icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
    },
    {
        id: 3,
        title: "Distance",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    },
    {
        id: 5,
        title: "Online Bookings",
    },
    {
        id: 4,
        title: "Outdoor Seating",
    },
    {
        id: 6,
        title: "Rating: 4.0+",
    },
    {
        id: 7,
        title: "Cuisines",
        icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
    },
    {
        id: 8,
        title: "Cafes",
    },
    {
        id: 9,
        title: "Open Now",
    },
]

const DiningOut = () => {
    return <div>
        <Collection list={collectionList}/>
    </div>;
}

export default DiningOut
