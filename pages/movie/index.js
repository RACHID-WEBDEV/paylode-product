import React from 'react'
import SearchAll from '@/components/SearchAll';
import SearchMovieList from '@/components/SearchMovieList';
const Index = () => {
    return (
        <div className="overflow-y-scroll w-full  max-w-full h-screen bg-primary-100  py-5 px-4">
            <div className="flex flex-col items-center justify-center">
                <SearchAll />
                <div className='mt-10'>
                    <SearchMovieList />
                </div>
            </div>
        </div>
    )
}

export default Index