import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Anime from './Anime'
import DetailedAnime from './DetailedAnime'
import './Display.css'

const Display = ({text,genre,animeList}) => {
    const [watchlist,setWatchlist] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [animePerPage] = useState(5)
    // console.log(text)
    // console.log(genre)
    console.log(animeList)
    const searchTerm = text.toLowerCase()

    useEffect(()=>{
        const data = localStorage.getItem('watchlist')
        const _watchlist = data ? JSON.parse(data) : []
        setWatchlist(_watchlist)
        // localStorage.removeItem('watchlist')
    },[])
    console.log(watchlist)
    const genrecheck = (genres,k=0) =>{
        console.log(genre)

        genres.map(value=>{
            if(value.name===genre){
                return k=1
            }
            
        })
        return k
    }

    const lastAnimeIndex = currentPage*animePerPage
    const firstAnimeIndex = lastAnimeIndex -animePerPage
    const currentAnimes = animeList.slice(firstAnimeIndex, lastAnimeIndex)

    // console.log(currentAnimes)

    if(!text && !genre){
        return (
            <div className='display'>
                {animeList.map(value =>(
                    <Anime value={value} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(value.title)} />
                ))}
            </div>

        )
    }else if(text && !genre){
        return (
            <div className='display'>
                {
                    animeList.filter(value=>value.title.toLowerCase().includes(searchTerm))
                    .map(value=>(
                        <Anime value={value} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(value.title)} />
                    ))
                }
            </div>
        )
    } else if (!text && genre){
        return (
            <div className='display'>
                {
                    animeList.filter(value=>{
                        return (genrecheck(value.genres) && value)
                        // return (genrecheck(value.genres) )

                    }).map(value=>(
                        <Anime value={value} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(value.title)}/>
                    ))
                }
            </div>
            // <div>1</div>
        )
    } else {
        return (
            <div className='display'>
                {
                    animeList.filter(value=>{
                        return (genrecheck(value.genres) && value)
                    })
                    .filter(value=>value.title.toLowerCase().includes(searchTerm))
                    .map(value=>(
                        <Anime value={value} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(value.title)} />
                    ))
                }
            </div>
        )
    }

}

export default Display