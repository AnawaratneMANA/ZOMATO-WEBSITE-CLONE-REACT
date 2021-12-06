import React , { useState } from 'react'
import Footer from '../../components/common/footer';
import Header from "../../components/common/header";
import TabOptions from '../../components/common/tabOptions';



const getCorrectScreen = (tab) => {
    switch(tab){
        case "Delivery":
            return <div>Delivery</div>;
        case "Dining Out":
            return <div>Dining Out</div>;
        case "NightLife":
            return <div>Night Life</div>;
        default: 
            return <div>Delivery</div>;
    }
}


const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery");

    return (

        <div>
            <Header/>
            <TabOptions/>
            {getCorrectScreen(activeTab)}
            <Footer/>
        </div>
    )
    
};



export default HomePage;