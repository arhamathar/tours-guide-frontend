import React from 'react';
import Navbar from 'components/Navigation/Navbar';
import Card from "components/Cards/HotelOrGuideCard";
interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
    return (
        <div className='bg-indigo-100 min-h-screen'>
            <Navbar />
            <Card 
             name = "KedarKantha Travel Agency"
             price = {9000}
             url = "https://www.euttaranchal.com/tourism/photos/kedarkantha-skiing-963918.jpg"
             review = {4.83}
             description = "Start fom sankri all the wap to top"
             />
             {props.children}
        </div>
    );
};

export default Layout;
