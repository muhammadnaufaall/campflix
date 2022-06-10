import React, {useEffect, useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Movies = () => {

  const [boys, setBoys] = useState([])

  const fetchDetails = async () => {
    const data = await fetch(
      "http://api.tvmaze.com/search/shows?q=boys"
    )

    const boysData = await data.json()
    // console.log("ini datanya => ", boysData);
    setBoys(boysData)
  }

  useEffect(() =>{
    fetchDetails()
  },[])

  return (
    <div className="container movies__wrapper" >
        <h3 className='movies__recommend'>Boys recommendation</h3>
        <Splide options={{
            perPage : 6,
            breakpoints: {
              428: {  
                perPage: 2,
                gap : "5.5rem",
              },
              768: {  
                perPage: 4,
                gap : "15rem",
              }},
            pagination : false,
            arrows : false,
            drag : "free",
            gap : "5rem",
        }}>
        {boys.map((data, index) => {
            return(
                <SplideSlide key={index}>
                    {/* <a href={data.show.url}> */}
                <div>   
                    <div className="card">
                        <img className='card__img' src={data.show.image?.medium  ? data.show.image?.medium : 'https://via.placeholder.com/210x295'} alt={data.show.name} />
                        <div className='card__bottom'>
                        <p>{data.show.name}</p>
                        <p>{data.show.rating?.average ? data.show.rating?.average : 'N/A'} ⭐</p>
                        </div>   
                        <div className="card__btn">
                            <div className="card__btn_info">
                            <p className='card__title'>{data.show.name}</p>
                            <a className='card__btn_play' href={data.show.url}>▶</a>
                            </div>
                    </div>
                    </div>
                </div>
                {/* </a> */}
                </SplideSlide>
            )
        })}
        </Splide>
    </div>
  )
}

export default Movies