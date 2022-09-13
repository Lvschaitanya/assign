import React from 'react'
import { Link } from 'react-router-dom'

const DetailedAnime = ({value}) => {
    // console.log(value)
  return (

    <div>
        <Link to='/'>
            Home
        </Link>
        {value.title}
    </div>
  )
}

export default DetailedAnime