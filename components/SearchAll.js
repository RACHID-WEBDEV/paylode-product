import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getSearchMovies } from 'redux/feature/searchAllMovieSlice'

const SearchAll = () => {
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const { searchMoviesList: { errorMessage: error },
    } = useSelector((state) => ({ ...state.searchMovies }))

    useEffect(() => {
        dispatch(getSearchMovies(name))
    }, [dispatch, name])
    const errMessage = "Search Your Favourite Movies "

    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-5">Search All Movies </h1>

            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input type="search" id="search"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full min-w-[400px] p-4 mb-3 pl-10 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Movie" required />

                </div>
                {error && <p className='text-gray-600 mt-2'>{errMessage} </p>}
            </form>
        </div>
    )
}

export default SearchAll