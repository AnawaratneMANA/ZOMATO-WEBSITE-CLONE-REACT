import React from "react"
import "./deliveryItem.scss"
const DeliveryItem = ({item}) => {
    return (
        <div className="delivery-item-cover">
            <img src={item.cover} className="delivery-item-image" alt={item.title}/>
        </div>

    );
}

export default DeliveryItem;
