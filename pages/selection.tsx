import React from 'react';
import { useEffect,useState } from 'react';
import Input from 'components/FormElements/Input';
import useApi from 'hooks/useApi';
import Card from 'components/Cards/HotelOrGuideCard'
import Map from 'components/Map/GoogleMap'
import axios from 'axios'
import { useRouter } from 'next/router';
import {format} from 'date-fns'
const selection = () =>{
    const router = useRouter();
    const {location,startDate,endDate}=router.query;
    const [minPrice,setMinPrice] = React.useState(0);
    const [maxPrice,setMaxPrice] = React.useState(100000000);
    const [locati,setLocation] = React.useState(location);
    const [type,setType] = React.useState("BOTH");
    const [tourStartDate,setTourStartDate] = React.useState(startDate);
    const [tourEndDate,setTourEndDate] = React.useState(endDate);
    const [filteredResult,setFilteredResult]=React.useState([
        {
            type:'Guide',
            location:'KedarKantha',
            price: 3000,
            description:'We provide best services in the industry',
            name:'Kedarkantha Travel Agency',
            url:"https://images.unsplash.com/photo-1584693070556-9e54aa1244b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJrYW50aGF8ZW58MHx8MHx8&w=1000&q=80",
            review: 3.77
        },
        {
            type:'Hotel',
            location:'Ladakh',
            price: 5000,
            description:'Best place to spent in ladakh.Stay here and enjoy as long as you want',
            name:'Ladakh Resort',
            url:"https://kelvabeach.in/hotels/raj-resort/raj-resort-kelva-beach4.webp",
            review: 3.77
        },
        {
            type:'Hotel',
            location:'Kolkata',
            price: 4000,
            description:'Best place to spent in Kolkata',
            name:'Kolkata Resort',
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfScfwz_XzFo8c2PWroIID54xk0CMCa8tYw&usqp=CAU",
            review: 3.77
        }
    ]);
    
 
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&key=AIzaSyCryqdJrYXn4RAZ6LU_kC-uYB2Tn2K00_M`;
    const [suggestion,setSuggestion] = useState<Array<string>>([]);
    useEffect(() => {
    const init = async () => {
        console.log(1);
        try {
            const {data} = await axios.get(url);
            console.log(data);
            setSuggestion(data);
        }catch(err) {
            console.log(err);
        }
    }
    init();
},[location])



    const query = `?minPrice=${minPrice}&maxPrice=${maxPrice}&location=${location}&type=${type}`;
    const {sendRequest} = useApi({
        url: "getAllTours"+query,
        method: 'GET'
    });
    React.useEffect(()=>{
      sendRequest();
    },[minPrice,maxPrice])


    const onChangeminPrice = (
        e:any
    ) => {
        setMinPrice(e.target.value);
    };
  
    const onChangemaxPrice = (
        e:any
    ) => {
        setMaxPrice(e.target.value);
    };

    const onChangeStartDate = (
        e:any
    ) => {
        setTourStartDate(e.target.value);
    };

    const onChangeEndDate = (
        e:any
    ) => {
        setTourEndDate(e.target.value);
    };

    const onChangeLocation = (
        e:any
    ) => {
        setLocation(e.target.value);
        console.log(locati);
    };

    return (
        <div>
            <div className="flex-col">
                  <div className="flex flex-row pb-6">
                      <Input 
                       name='minPrice'
                       label='Minimum Price'
                       value={minPrice}
                       onChange={onChangeminPrice}
                       type='Amount'  
                      />
                      <Input 
                       name='maxPrice'
                       label='Maximum Price'
                       value={maxPrice}
                       onChange={onChangemaxPrice}
                       type='Amount'  
                      />
                      <Input 
                       name='location'
                       label='Desired Location'
                       value={locati}
                       onChange={onChangeLocation}
                       type='Location'  
                      />
                      <Input 
                       name='startDate'
                       label='Start Date'
                       value={tourStartDate}
                       onChange={onChangeStartDate}
                       type='startDate'  
                      />
                       <Input 
                       name='endDate'
                       label='End Date'
                       value={tourEndDate}
                       onChange={onChangeEndDate}
                       type='endDate'  
                      />
                      <h1>Filter by guide and hotel</h1>
                   </div>
                   <div className = "flex flex-row">
                        <div className="overflow-hidden">
                            {
                                filteredResult.map((result)=>{
                                        // <div className="flex flex-col"></div>
                                return  <Card 
                                    name = {result.name}
                                    description= {result.description}
                                    price= {result.price}
                                    review= {result.review}
                                    url= {result.url}
                                    />
                                })
                            }
                        </div>                   
                        <div className="flex">
                             <Map />
                        </div>
                   </div>
            </div>
        </div>
    );
};

export default selection;