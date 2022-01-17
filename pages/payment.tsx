import {useRouter} from 'next/router'
import Input from 'components/FormElements/Input';
import React from 'react';
import { useEffect,useState } from 'react';
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillStar,AiOutlineWifi} from 'react-icons/ai'
import axios from 'axios'


function loadScript(src:any) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}



const Payment = () => {
    const router = useRouter();
    const {startDate,endDate,noOfRooms,price,noOfDays,id} = router.query;
    console.log(router.query);
    const [start,setStart] = useState(startDate);
    const [end,setEnd] = useState(endDate);
    //@ts-ignore
    const rooms = parseInt(noOfRooms!);
    //@ts-ignore
    const days=parseInt(noOfDays!);
    //@ts-ignore
    const finalPrice=parseInt(price!);
    //@ts-ignore
    const startYear= startDate!.substring(0,4); 
    //@ts-ignore
    const startMonth = startDate!.substring(5,7); 
    //@ts-ignore
    const startDay = startDate!.substring(8,10); 
    console.log(startDay);
    //@ts-ignore
    const endYear=endDate!.substring(0,4); 
    //@ts-ignore
    const endMonth=endDate!.substring(5,7); 
    //@ts-ignore
    const endDay=endDate!.substring(8,10); 
  
    

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const data = {
            numberOfRooms: rooms,
            numberOfDays:(noOfDays)
        }
        // creating a new order
        const result = await axios.post("http://localhost:3000/api/v1/booking/createBooking/"+id,data);
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
        // console.log(result);
        // Getting the order details back
        const { amount, id: order_id, currency } = result.data.order;
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Travel Agency",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response:any) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    startingDate: startDate,
                    endingDate: endDate
                };

                const result = await axios.post("http://localhost:3000/api/v1/booking/confirmBooking/"+id, data);

            },
            prefill: {
                name: "Travel Agency",
                email: "travelAgency@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Travel Agency Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new (window as any).Razorpay(options);
        paymentObject.open();
    }



    return (
        <div className='flex flex-col space-y-10'>
            <div className="flex justify-between md:justify-evenly items-center  shadow-sm bg-white">
                  <div className='flex  md:space-x-1 md:font-bold p-2'>
                    <span><SiYourtraveldottv style={{color:"#FF385C", fontSize: "1rem"}}/></span>
                    <span style={{color:"#FF385C", fontSize: "1.5rem"}}>Travel Site</span>
                  </div>
                  <div className="hidden md:flex p-2">
                    <Input 
                    name='Search'
                    label='Search your desired location'
                    type='Location'  
                    className='rounded-full bg-black'
                    />
                  </div>
                  <h1 className='flex p-2'>User Profile</h1>
            </div>
            <div className="pl-60">
                <h1 className="text-3xl font-semibold">Confirm and pay</h1>
            </div>
            <div className="grid grid-cols-2">
                <div className="pl-60 flex flex-col space-y-10">
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-2xl font-medium">Your trip Details</h1>
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-lg text-green-900">Dates</h1>
                                <h1>{startDay}-{startMonth}-{startYear} to {endDay}-{endMonth}-{endYear}</h1>
                            </div>
                            <div>
                                <button className="rounded-lg text-black bg-white h-10" onClick={router.back}>
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-lg text-green-900">Number Of Rooms</h1>
                                <h1>{rooms}</h1>
                            </div>
                            <div>
                                <button className="rounded-lg text-black bg-white h-10" onClick={router.back}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-2xl font-medium">Connect with the host</h1>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-md text-green-900">Message The Host</h1>
                                <h1 className="text-sm">Let the host know why you're travelling and when you'll check in.</h1>
                            </div>
                            <button className="rounded-lg text-black bg-white h-10">Add</button>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-md text-green-900">Add Phone Number</h1>
                                <h1 className="text-sm">Add and confirm your phone number to get trip updates.</h1>
                            </div>
                            <button className="rounded-lg text-black bg-white h-10">Add</button>
                        </div>
                    </div>
                    <button className="rounded-lg text-white bg-pink-600 w-1/2 h-10" onClick={displayRazorpay}>
                        Confirm and pay
                    </button>
                </div>
                <div>
                    <div className="bg-white border ml-40 border-solid shadow-lg shadow-gray-900 rounded-lg border-inherit flex flex-col space-y-3 w-7/12 h-full">
                            <img
                                className='w-full h-48 object-cover'
                                src='https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc='
                                alt="No image"
                            ></img>
                            <div className="flex justify-around">
                                <h1 className="text-xl font-serif font-bold">Sunshine</h1>
                            </div>
                            <div className="px-12">
                                <h1 className="text-xl font-bold">Pricing Details</h1>
                            </div>
                            <div className="flex flex-col space-y-4 px-12 py-5">
                                 <div className='flex justify-between'>
                                     <h1 className='underline'>
                                        ₹{price} x {noOfDays} x {noOfRooms} nights
                                     </h1>
                                     <h1>
                                        ₹{finalPrice*days*rooms}
                                     </h1>
                                 </div>
                                 <div className='flex justify-between'>
                                     <h1 className='underline'>
                                     Weekly discount
                                     </h1>
                                     <h1 className="text-yellow-600">
                                        -₹{(finalPrice*days)/10}
                                     </h1>
                                 </div>
                                 <div className='flex justify-between'>
                                     <h1 className='underline'>
                                         Service fee
                                     </h1>
                                     <h1>
                                        ₹{finalPrice/1000}
                                     </h1>
                                 </div>
                            </div>
                         <div className='border px-12'>
                        </div>
                        <div className='flex justify-between px-12 py-5'>
                            <h1 className='font-bold text-2xl text-black'>
                                Total
                            </h1>
                            <h1 className="font-bold text-black">
                                ₹{Math.round((finalPrice*days*rooms)+((finalPrice*days)/10)+(finalPrice/1000))}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Payment;