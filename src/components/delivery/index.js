import React from 'react'
import "./delivery.scss";
import Filters from "../common/filters";
import DeliveryCollections from "./deliveryCollections";

const deliveryFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rs-settings-sliders absolute-center"></i>,
        title: "Filters"
    },
    {
        id: 2,
        title: "Rating"
    },
    {
        id: 3,
        title: "Safe Higenic"
    },
    {
        id: 4,
        title: "Pure Veg"
    },
    {
        id: 5,
        icon: <i className="fi fi-rs-apps-sort absolute-center"></i>,
        title: "Delivery Time"
    },
]


const Delivery = () => {
    return (
        <div>
            <div className="max-width">
                <Filters filterList={deliveryFilters}/>
                <DeliveryCollections/>
            </div>
        </div>

    );
}

export default Delivery;
