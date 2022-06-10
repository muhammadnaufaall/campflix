import React, {useEffect, useState} from 'react'

const Hero = () => {

  const [hero, setHero] = useState({})

  const fetchDetails = async () => {
    const data = await fetch(
      "http://api.tvmaze.com/shows"
    )

    const heroData = await data.json()
    // console.log("ini datanya hero => ", heroData[0]);
    setHero(heroData[Math.floor(Math.random() * 240)])
  }

  useEffect(() =>{
    fetchDetails()
  },[])


  return (
    <div className="container hero__container">
      <a href={hero.url}>
    <img className='hero__img' src={hero.image?.original ? hero.image?.original : 'https://via.placeholder.com/1220x600' } alt="" />
    <div className="hero__info">
      <div className='hero__text'>
      <div className="hero__text_top">
      <h1 className='hero__title'>{hero.name}</h1>
      <p className='hero__details'>{hero.rating?.average ? hero.rating?.average : 'N/A'}⭐</p>
      
      </div>
      <p className='hero__details'>{hero.genres?.[0]}</p> 
      </div>
      <a href={hero.url} className="hero__btn">▶</a>  
    </div>
    </a>
    </div>
  )
}

export default Hero