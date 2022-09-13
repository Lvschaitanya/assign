import React, { createContext, useReducer, useEffect } from "react";
import appReducer from "./appReducer";

const initialState = {
    wishList :[]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const getList = () =>{
        const data = localStorage.getItem('watchlist')
        const watchlist = data ? JSON.parse(data) : []
        console.log(watchlist)
        return watchlist
    }

    // useEffect(()=>{
    //     const initial = () =>{
    //         const list = getList()

    //         dispatch({
    //             type:'init',
    //             payload: list
    //         })
    //     }

    //     initial()
    // },[])

    return (
        <GlobalContext.Provider value={{wishList: state.wishList}}>
            {children}
        </GlobalContext.Provider>
    )
}