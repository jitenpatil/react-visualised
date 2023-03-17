import suncloud from "../images/suncloud.jpeg";
import windy from "../images/windy.jpeg";
import sunny from "../images/sunny.jpeg";
import hail from "../images/hail.jpeg";

import { useEffect, useState } from "react";

export default function WeatherFunction({city}) {
    
    const [cityData, setCityData] = useState({});
    const [temperatureLabel, setTemperatureLabel] = useState("");

    useEffect(()=>{
        fetch("/Weather.json")
        .then( response => response.json() )
        .then( data => {
            const cityData = data.find(elem => elem.city.toLowerCase() == city.toLowerCase());
            if(cityData){
                setCityData(cityData);
                setTemperatureLabel(getTemperatureLabel(cityData.high).label);
            }else
                setCityData({});
        });
    }, []);


    const getTemperatureLabel = (max) => {
        console.log(max);
        return WeatherFunction.temperature.find(temp=> max < temp.value);
    }

    return (
        <>
            <div style={WeatherFunction.divStyle}>    
                <h1>{cityData?.city} Weather</h1>
                   <img src={WeatherFunction.conditionMap[cityData?.condition]??suncloud}/>
                   <h4>{/*cityData?.condition*/ temperatureLabel}</h4>
                <h1>{cityData?.low}°C - {cityData?.high}°C</h1>
            </div>
        </>
    );
}

WeatherFunction.prototype.getTemperatureLabel = function(max) {
    return WeatherFunction.temperature.find(temp=> max < temp.value);
}

WeatherFunction.divStyle = {
        display: "inline-block",
        border: "2px solid black",
        textAlign: "center",
        borderRadius: "5px",
        width: "fit-content",
        padding: "10px",
        boxShadow: "5px 5px 5px gray"
};

WeatherFunction.conditionMap = {
    suncloud,
    windy,
    sunny,
    hail
}


WeatherFunction.temperature = [
    {value: 0, label: "Subzero"},
    {value: 10, label: "Very Cold"},
    {value: 20, label: "Cold"},
    {value: 30, label: "Warm"},
    {value: 40, label: "Hot"},
    {value: Infinity, label: "Extreme Heat"}
];