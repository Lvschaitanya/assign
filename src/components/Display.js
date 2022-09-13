import React from 'react'
import Anime from './Anime'
import './Display.css'

const Display = ({text,genre,animeList}) => {
    console.log(text)
    console.log(genre)
    console.log(animeList)
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

    const genrecheck = (genres) =>{
        console.log(genre)

        genres.map(value=>{
            console.log(value.name)
            if(value.name===genre){
                return true
            }
            
        })
        return false
    }

    const data = localStorage.getItem('watchlist')
    const watchlist = data ? JSON.parse(data) : []

    if(!text && !genre){
        return (
            <div className='display'>
                {animeList.map(value =>(
                    <Anime value={value} watchlist={watchlist} />
                ))}
            </div>
        )
    }else if(text && !genre){
        return (
            <div className='display'>
                {
                    animeList.filter(value=>value.title.toLowerCase().includes(searchTerm))
                    .map(value=>(
                        <Anime value={value} watchlist={watchlist} />
                    ))
                }
            </div>
        )
    } else if (!text && genre){
        return (
            <div className='display'>
                {
                    animeList.filter(value=>{
                        // return (genrecheck(value.genres) && value)
                        return (genrecheck(value.genres) )

                    }).map(value=>(
                        <Anime value={value} watchlist={watchlist}/>
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
                        <Anime value={value} watchlist={watchlist} />
                    ))
                }
            </div>
        )
    }

}

export default Display