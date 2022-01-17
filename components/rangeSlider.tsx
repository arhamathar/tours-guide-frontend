import React from 'react';
import Slider from 'react-rangeslider'
interface IProps {
   volume: string,
   name: String
}

const rangeSlider: React.FC<IProps> = ({
    volume,
    name
}) => {
    return (
        <div className="flex space-x-32">
            <div>
                <h1>
                    {name}
                </h1>
            </div>
            <input type="range" id="volume" min="0" max="5" value={volume} step="0.1"></input>
            <Slider 
             volume={volume}
             min={0}
             max={5}
             step={0.1}
             tooltip={false}
             />
        </div>
    )
}

export default rangeSlider