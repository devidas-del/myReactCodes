import React, { useEffect, useState } from 'react'
import './style.css'
import WeatherCard from './weatherCard'

const Temp = (props) => {
    const [searchValue, setSearchValue]=useState("Ahmednagar")
    const [tempInfo, setTempInfo]=useState({})
    const getWeatherInfo=async()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&%20&appid=4d5295a4c743fa247b29bcfce35bfef1`;
            const res=await fetch(url) //await it is used for if we get null req or res
            const data=await res.json()
            console.log(data)
            const {temp,pressure,humidity}=data.main
            const {main:weatherMood}=data.weather[0]
            const windspeed=data.wind.speed
            const {name}=data
            const{country,sunrise,sunset}=data.sys
            const myNewWeatherInfo={
                temp,
                pressure,
                humidity,
                weatherMood,
                windspeed,
                country,
                sunrise,
                sunset,
                name

            }
            setTempInfo(myNewWeatherInfo)
            //console.log(myNewWeatherInfo)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{

    },[])
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type='serach' 
                    placeholder='search...' 
                    autoFocus id='search' 
                    className='searchTerm' 
                    value={searchValue} 
                    onChange={(event)=>setSearchValue(event.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>

                </div>
            </div>
        {/* Our temp card */}
        <WeatherCard tempInfo={tempInfo}/>
        </>
    )
}

export default Temp
