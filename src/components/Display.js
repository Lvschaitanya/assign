import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Anime from './Anime'
import DetailedAnime from './DetailedAnime'
import './Display.css'

const Display = ({text,genre,animeList}) => {
    const [watchlist,setWatchlist] = useState([])
    // console.log(text)
    // console.log(genre)
    // console.log(animeList)
    const searchTerm = text.toLowerCase()
//   return (
//     <div className='display'>
//         {animeList.map(value =>(
//             <Anime value={value} />
//         ))}
//     </div>
//   )

    // console.log(animeList)



   

    // const filter = animeList.filter(anime => {
    //     return anime.genres.filter(name=>name===genre)
    // })

    // console.log(filter)
    // animeList.map(anime=>console.log(anime.title))

    useEffect(()=>{
        const data = localStorage.getItem('watchlist')
        // console.log(data)
        const _watchlist = data ? data.split(',') : []
        // console.log(_watchlist)
        setWatchlist(_watchlist)
    },[])

    const genrecheck = (genres,k=0) =>{
        console.log(genre)

        genres.map(value=>{
            console.log(value.name)
            if(value.name===genre){
                return k=1
            }
            
        })
        return k
    }


    // console.log(watchlist.includes('Cowboy Bebop'))

    if(!text && !genre){
        return (
            <div className='display'>
                {animeList.map(value =>(
                    // <Anime value={value} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(value.title)} />
                    <Routes>
                        <Route path='/' element={<Anime value={value} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(value.title)} />} />
                        <Route path='/about' element={<DetailedAnime value={value} />} />
                    </Routes>
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