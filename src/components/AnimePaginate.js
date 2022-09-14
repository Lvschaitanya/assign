import React, { useEffect } from 'react'

const AnimePaginate = ({anime, watchlist, setWatchlist, inWatchlist,toBeAdded, setToBeAdded}) => {
    console.log(inWatchlist,anime.title)
  const click = () => {
    if(!inWatchlist){

      const _watchlist = [...watchlist]
      _watchlist.push(anime.title)
      localStorage.setItem('watchlist',JSON.stringify(_watchlist))
      setWatchlist(_watchlist)

    }else{


      // watchlist.splice(watchlist.indexOf(value.title),1)
      const filteredWatchList =watchlist.filter(animeTitle=>animeTitle!==anime.title)
      setWatchlist(filteredWatchList)
      localStorage.setItem('watchlist', filteredWatchList)

    }
  }

  // const toBeAdded = []



  const checkboxChange = () => {
    const checkbox_id = document.getElementById(anime.title)
    if(checkbox_id.checked){
      setToBeAdded(toBeAdded=>[...toBeAdded , anime.title])
      // console.log(toBeAdded)
    }else{
      setToBeAdded(toBeAdded.filter(name=>name!==anime.title))
      // console.log(toBeAdded)
    }
  }

  return (
    // <Routes>
    //   <Route path='/' element={
        <div className={!inWatchlist ? 'anime' : 'added anime'}>
            <p className='title'>{anime.title}</p>
            <a href={anime.url} target="_blank"  rel="noreferrer">
              <img className='image' src={anime.images.jpg.image_url} alt='' />
            </a>
            <p className='rating'>⭐ {anime.score}</p>
            <button className='btn' onClick={click} id='add'>{inWatchlist?'Remove from List':'Add to List'}</button>
            <input id={anime.title} type='checkbox' onChange={checkboxChange}/>
        </div>
      // } />
    //   <Route path='/about' element={<DetailedAnime value={value} />} />
    // </Routes>
  )
}

export default AnimePaginate