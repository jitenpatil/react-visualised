import React from 'react';
import suncloud from '../images/suncloud.jpeg';
import cloudy from '../images/cloudy.jpeg';
import windy from '../images/windy.jpeg';

export default class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {temperature : ""};
    }

    static divStyle = {
        display: "inline-block",
        border: "2px solid black",
        textAlign: "center",
        borderRadius: "5px",
        width: "fit-content",
        padding: "10px",
        boxShadow: "5px 5px 5px gray"
    }

    static image = {
        cloudy,
        suncloud
    }

    static temperature = [
        {value: 0, label: "Subzero"},
        {value: 10, label: "Very Cold"},
        {value: 20, label: "Cold"},
        {value: 30, label: "Warm"},
        {value: 40, label: "Hot"},
        {value: Infinity, label: "Extreme Heat"}
    ];

    getTemperatureLabel(max){
        console.log(max);
        return Weather.temperature.find(temp=> max < temp.value);
    }

    componentDidMount(){
        this.setState({temperature: this.getTemperatureLabel(this.props.high)});
    }

    render(){
        return (
            <>
                <div style={Weather.divStyle}>    
                    <h1>{this.props.city} Weather</h1>
                       <img src={Weather.image[this.props.condition]} alt="i"/>
                       <h4>{this.state.temperature.label}</h4>
                    <h1>{this.props.low}°C - {this.props.high}°C</h1>
                </div>
            </>
        );
    }
}