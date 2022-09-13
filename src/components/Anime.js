import React, { useContext, useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import './Anime.css'
import DetailedAnime from './DetailedAnime'

const Anime = ({value,inWatchlist,watchlist,setWatchlist}) => {



  const click = () => {
    if(!inWatchlist){

      const _watchlist = [...watchlist]
      _watchlist.push(value.title)
      localStorage.setItem('watchlist',JSON.stringify(_watchlist))
      setWatchlist(_watchlist)

    }else{


      // watchlist.splice(watchlist.indexOf(value.title),1)
      const filteredWatchList =watchlist.filter(animeTitle=>animeTitle!==value.title)
      setWatchlist(filteredWatchList)
      localStorage.setItem('watchlist', filteredWatchList)

    }
  }

  const detailedAnime = () => {
    console.log(1)
    
  }

  return (
    // <Routes>
    //   <Route path='/' element={
        <div className={!inWatchlist ? 'anime' : 'added anime'}>
            <p className='title'>{value.title}</p>
            <a href={value.url} target="_blank"  rel="noreferrer">
              <img className='image' src={value.images.jpg.image_url} alt='' />
            </a>

            <p className='rating'>⭐ {value.score}</p>
            <button className='btn' onClick={click} id='add'>{inWatchlist?'Remove from List':'Add to List'}</button>
        </div>
      // } />
    //   <Route path='/about' element={<DetailedAnime value={value} />} />
    // </Routes>
  )
}

export default Anime