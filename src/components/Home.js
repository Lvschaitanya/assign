import React, { useEffect, useState } from 'react'
import Anime from './Anime'
import Display from './Display'
import './Home.css'
import Searchbar from './Searchbar'

const Home = () => {

    // console.log(text)
    // const searchTerm = text.toLowerCase()
    // console.log(searchTerm)
    const genres =[]

    const [animeList, setanimeList] = useState([])
    const [value, setvalue] = useState('')
    const [text,setText] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')
    let genreAnimeList = []
    // let selectedGenre = ''

    const list = async () => {
        const data = await fetch ('https://api.jikan.moe/v4/anime')

        const res = data.json()

        return res
    }

    useEffect(()=>{
        const getData = async () =>{
            const data = await list()
            // console.log(data.data)
            const anime = data.data
            setanimeList(anime)
        }

        getData()

        // console.log(animeList)
    },[])

    // useEffect(()=>{
    //     animeList.forEach(anime=>(
    //         anime.genres.forEach(genre =>{
    //             if(!genres.includes(genre.name)){
    //                 genres.push(genre.name)
    //             }
    //         })
    //     ))
    // },[animeList])
    // console.log(animeList)
    // document.addEventListener('mousedown',()=>{
    //     console.log(document.querySelector('input') === document.activeElement)
    // })
    animeList.forEach(anime=>(
        anime.genres.forEach(genre =>{
            if(!genres.includes(genre.name)){
                genres.push(genre.name)
            }
        })
    ))
    // console.log(genres)
    // genres.forEach(genre=>genreAnimeList.push([genre]))
    // console.log(genreAnimeList.indexOf('Sci-Fi'))
    // genreAnimeList.indexOf('Action').push('a')
    // console.log(genreAnimeList.includes('Action'))

    

    const update = () =>{
        const select = document.getElementById('selector')
        const opt = select.options[select.selectedIndex]
        // console.log(opt.value)
        setSelectedGenre(opt.value)
        // selectedGenre = opt.value
        console.log(selectedGenre)
    }

//   if(text=== '' && selectedGenre === ''){
//     return (
//     <div>
//         <label>
//             Genre
//             <select id='selector' onChange={update}>
//                 <option value=''>Select Genre</option>
//                 {genres.map(genre=>(
//                     <option value={genre}>{genre}</option>
//                 ))}
//             </select>
//         </label>
//         <div className='home'>
//             <p>{selectedGenre}</p>
//             {animeList.map(value=>(
//                 <Anime value={value}/>
//             ))}
//         </div>
//     </div>
//   )}else{
//     return(
//         <div>
//             <label>
//             Genre
//             <select id='selector' onChange={update}>
//                 <option value=''>Select Genre</option>
//                 {genres.map(genre=>(
//                     <option value={genre}>{genre}</option>
//                 ))}
//             </select>
//         </label>
//             <p>{selectedGenre}</p>
//             {animeList.filter(value => value.title.toLowerCase().includes(searchTerm))
//             .map(value =>(
//                 <Anime value={value} />
//             ))
//             }
//         </div>
//     )
//   }

    return(
        <div>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
            <label>
                 Genre
                 <select id='selector' onChange={update}>
                    <option value=''>Select Genre</option>
                    {genres.map(genre=>(
                        <option value={genre}>{genre}</option>
                    ))}
                </select>
            </label>
            <Display text={text} genre={selectedGenre} animeList={animeList}/>
        </div>
    )
}

export default Home