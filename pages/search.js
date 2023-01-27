import React from 'react'
import Search from '@/components/Search';
import MovieList from '@/components/MovieList';

const SearchMovie = () => {
    return (
        <div className="overflow-y-scroll w-full  max-w-full h-screen bg-primary-100  py-5 px-4">
            <div className="flex flex-col items-center justify-center">
                <Search />
                <div className='mt-10'>
                    <MovieList />
                </div>
            </div>
        </div>
    )
}

export default SearchMovie