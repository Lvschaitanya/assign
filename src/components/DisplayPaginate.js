import React, { useState, useEffect } from 'react'
import AnimePaginate from './AnimePaginate'
import Pagination from './Pagination'
import './Display.css'

const DisplayPaginate = ({text,genre,animeList,currentPage,setCurrentPage, toBeAdded,setToBeAdded, watchlist, setWatchlist}) => {
    const [animePerPage] = useState(5)
    // const [inWatchlist,setInWatchlist] = useState(false)

    const searchTerm = text.toLowerCase()

    useEffect(()=>{
        const data = localStorage.getItem('watchlist')
        console.log(data)
        const _watchlist = data ? JSON.parse(data) : []
        setWatchlist(_watchlist)
        // localStorage.removeItem('watchlist')
    },[])

    useEffect(()=>{
        console.log(watchlist)
    },[watchlist])

    const genrecheck = (genres,k=0) =>{

        genres.map(value=>{
            if(value.name===genre){
                return k=1
            }
            
        })
        return k
    }

    const paginate = (number) => setCurrentPage(number)



    if(!text && !genre){
        // currentPage =1
        // console.log(currentPage)
        const lastAnimeIndex = currentPage*animePerPage
        const firstAnimeIndex = lastAnimeIndex -animePerPage
        const currentAnimes = animeList.slice(firstAnimeIndex, lastAnimeIndex)

        // const paginate = (number) => setCurrentPage(number)
    
        const totalAnime =animeList.length
        const pageNumbers =[]
    
        for(let i=1 ; i<=Math.ceil(totalAnime/animePerPage) ; i++){
            pageNumbers.push(i)
        }
        return (
            <div>
                <div className='display'>
                    {
                        currentAnimes.map(anime =>(
                            <>
                            <AnimePaginate anime={anime} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(anime.title)} toBeAdded={toBeAdded} setToBeAdded={setToBeAdded} />
                            </>
                        ))
                        
                    }
                    
                </div>
                <Pagination animePerPage={animePerPage} totalAnime={totalAnime} paginate={paginate}/>

            </div>
        )
    }else if(text && !genre){
        // currentPage=1
        console.log(currentPage)

        const lastAnimeIndex = currentPage*animePerPage
        const firstAnimeIndex = lastAnimeIndex -animePerPage

        const updatedAnimes = animeList.filter(value=>value.title.toLowerCase().includes(searchTerm))
        // console.log(updatedAnimes)

        const currentAnimes = updatedAnimes.slice(firstAnimeIndex,lastAnimeIndex)
        const totalAnime = updatedAnimes.length
        const pageNumbers =[]
    
        for(let i=1 ; i<=Math.ceil(totalAnime/animePerPage) ; i++){
            pageNumbers.push(i)
        }
        return (
            <div>
                <div className='display'>
                    {
                        currentAnimes.map(anime =>(
                            <AnimePaginate anime={anime} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(anime.title)} toBeAdded={toBeAdded} setToBeAdded={setToBeAdded} />
                        ))
                        
                    }
                    
                </div>
                <Pagination animePerPage={animePerPage} totalAnime={totalAnime} paginate={paginate}/>

            </div>
        )
    }else if(!text && genre) {
        // currentPage=1
        console.log(currentPage)

        const lastAnimeIndex = currentPage*animePerPage
        const firstAnimeIndex = lastAnimeIndex -animePerPage

        const updatedAnimes = animeList.filter(anime=>(genrecheck(anime.genres) && anime))
        // console.log(updatedAnimes)

        const currentAnimes = updatedAnimes.slice(firstAnimeIndex,lastAnimeIndex)
        const totalAnime = updatedAnimes.length
        const pageNumbers =[]
    
        for(let i=1 ; i<=Math.ceil(totalAnime/animePerPage) ; i++){
            pageNumbers.push(i)
        }
        return (
            <div>
                <div className='display'>
                    {
                        currentAnimes.map(anime =>(
                            <AnimePaginate anime={anime} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(anime.title)} toBeAdded={toBeAdded} setToBeAdded={setToBeAdded}/>
                        ))
                        
                    }
                    
                </div>
                <Pagination animePerPage={animePerPage} totalAnime={totalAnime} paginate={paginate}/>

            </div>
        )
    }else{
        // currentPage =1
        console.log(currentPage)

        const lastAnimeIndex = currentPage*animePerPage
        const firstAnimeIndex = lastAnimeIndex -animePerPage

        const updatedAnimes = animeList.filter(anime=>(genrecheck(anime.genres) && anime)).filter(value=>value.title.toLowerCase().includes(searchTerm))
        // console.log(updatedAnimes)

        const currentAnimes = updatedAnimes.slice(firstAnimeIndex,lastAnimeIndex)
        const totalAnime = updatedAnimes.length
        const pageNumbers =[]
    
        for(let i=1 ; i<=Math.ceil(totalAnime/animePerPage) ; i++){
            pageNumbers.push(i)
        }
        return (
            <div>
                <div className='display'>
                    {
                        currentAnimes.map(anime =>(
                            <AnimePaginate anime={anime} watchlist={watchlist} setWatchlist={setWatchlist} inWatchlist={watchlist.includes(anime.title)} toBeAdded={toBeAdded} setToBeAdded={setToBeAdded}/>
                        ))
                        
                    }
                    
                </div>
                <Pagination animePerPage={animePerPage} totalAnime={totalAnime} paginate={paginate}/>

            </div>
        )
    }
}

export default DisplayPaginate