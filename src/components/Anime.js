import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import './Anime.css'

const Anime = ({value}) => {
  const {wishList} = useContext(GlobalContext)
  console.log(wishList)
  const [buttonValue, setButtonValue]= useState('Add to List')
  const [watchlistArray, setWatchlistArray] = useState([])
  // watchlist.includes(value.title) ? setButtonValue('Remove from List') : setButtonValue('Add to List')
  const data = localStorage.getItem('watchlist')
  const watchlist = data ? JSON.parse(data) : []
  // setWatchlistArray(watchlist)
  // console.log(watchlistArray)

  const click = () => {
    if(buttonValue==='Add to List'){
      console.log(value.title)
      // const data = localStorage.getItem('watchlist')
      // const watchlist = data ? JSON.parse(data) : []
      if(!watchlist.includes(value.title)){
        watchlist.push(value.title)
        localStorage.setItem('watchlist',JSON.stringify(watchlist))
      }
      // console.log(localStorage.getItem('watchlist'))
      setButtonValue('Remove from List')
    }else{
      console.log(watchlist)
      // watchlist.map(title=>console.log(title))
      // watchlist.filter(title=>title!==value.title)
      // watchlist.map(title=>console.log(title))
      watchlist.splice(watchlist.indexOf(value.title),1)
      console.log(watchlist)
      // localStorage.setItem('watchlist',JSON.stringify(watchlist))
      // console.log(localStorage.getItem('watchlist'))
      setButtonValue('Add to List')
    }
  }
  // {watchlist.includes(value.title)? 'Remove from List' : 'Add to List' }
  // {watchlist.includes(value.title)? 'added anime' : 'anime'
  return (
    <div className='anime'>
        <p>{value.title}</p>
        <img className='image' src={value.images.jpg.image_url} alt='' />
        <p>⭐ {value.score}</p>
        <button onClick={click} id='add'>{buttonValue}</button>
    </div>
  )
}

export default Anime