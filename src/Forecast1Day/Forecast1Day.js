import { useEffect, useState } from "react";


export default function Forecast1Day(){

    const days = ['sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const [casts,setCasts] = useState([]);


    useEffect(() =>{
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
        .then(res => res.json())
        .then(data => setCasts(data));
    } , []);


    return(
        <div>

            <div>{casts.map(cast =>{

                return(
                    <div style={{display: "inline-block"}}>
                    <h1>{days[cast.day]}</h1>
                    <img src={require(`../icons/${cast.icon}.png`).default} alt="Forecast"/>
                    <p>{cast.temperature}</p>
                    <p>{cast.description}</p>


                    
                    </div>
                   
                ) 
                
            })}
            
            
            
            
            
            </div>






        </div>
    )
     

}