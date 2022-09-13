import React, { useState } from 'react'

const Searchbar = ({value}) => {
    const [searchText, setsearchText] = useState('')
    // console.log(document.activeElement)

    const focus = () => {
        if(document.querySelector('input') === document.activeElement){
            
        }
    }

  return (
    <div>
        <input type='text' value={searchText} onChange={(e)=>setsearchText(e.target.value)} onFocus={focus} />
    </div>
  )
}

export default Searchbar