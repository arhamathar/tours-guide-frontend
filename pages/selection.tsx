import React from 'react';
import Input from 'components/FormElements/Input';
import useApi from 'hooks/useApi';
import Card from 'components/Cards/HotelOrGuideCard'
import Map from 'components/Map/GoogleMap'
const selection = () =>{
    const [minPrice,setMinPrice] = React.useState(0);
    const [maxPrice,setMaxPrice] = React.useState(100000000);
    const [location,setLocation] = React.useState("ALL");
    const [type,setType] = React.useState("BOTH");
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
    const query = `?minPrice=${minPrice}&&maxPrice=${maxPrice}&&location=${location}&&type=${type}`;
    const {sendRequest} = useApi({
        url: "/getAllTours"+query,
        method: 'GET'
    });
    React.useEffect(()=>{
      sendRequest();
    },[minPrice,maxPrice,location])


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

    const onChangeLocation = (
        e:any
    ) => {
        setLocation(e.target.value);
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
                       value={location}
                       onChange={onChangeLocation}
                       type='Location'  
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
                        <div className="flo">
                             <Map />
                        </div>
                   </div>
            </div>
        </div>
    );
};

export default selection;