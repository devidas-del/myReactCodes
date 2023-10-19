import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {
    const [weatherState, setweatherState]=useState("")
    const{
                temp,
                pressure,
                humidity,
                weatherMood,
                windspeed,
                country,
                //sunrise,
                sunset,
                name
         }=tempInfo

         useEffect(()=>{
            if(weatherMood){
                switch(weatherMood){
                    case "Clouds":
                        setweatherState('wi-day-cloudy')
                        break
                    case "Haze":
                        setweatherState("wi-fog")
                        break
                    case "Clear":
                        setweatherState("wi-day-sunny")
                        break
                    case "Mist":
                        setweatherState("wi-dust")
                        break
                    default:
                        setweatherState('wi-day-cloudy')
                        break
                }
            }
         })

         //showing time in prper format
         let sec=sunset
         let date=new Date(sec*1000) //converting sec to miliseconds
         let timeStr=`${date.getHours()}:${date.getMinutes()}`
    return (
        <>
           {/* our team card */}
           <article className='widget'>
             <div className='weatherIcon'> 
             <i className={`wi ${weatherState}`}></i>
             </div>
             <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}</span>
                </div>
             
             <div className='description'>
                <div className='weatherCondition'>{weatherMood}</div>
                <div className='place'>{name}, {country}</div>
             </div>
             </div>
             <div className='date'>{new Date().toLocaleString()}</div>

             {/* our four column section */}
             <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p>
                            <i className='wi wi-sunset'></i>
                        </p>
                            <p className='extra-info-leftside'>
                           {timeStr} PM <br/>
                            Sunset
                        </p>
                    </div>
                    
                    <div className='two-sided-section'>
                        <p>
                            <i className='wi wi-humidity'></i>
                        </p>
                            <p className='extra-info-leftside'>
                           {humidity} <br/>
                            Humidity
                        </p>
                    </div>
                    
             </div>
             <div className='weather-extra-info'>
             <div className='two-sided-section'>
                        <p>
                            <i className='wi wi-rain'></i>
                        </p>
                            <p className='extra-info-leftside'>
                            {pressure} <br/>
                            Pressure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className='wi wi-strong-wind'></i>
                        </p>
                            <p className='extra-info-leftside'>
                            {windspeed} <br/>
                            Speed
                        </p>
                    </div>
             </div>
             </div>
            </article>  
        </>
    )
}

export default WeatherCard
