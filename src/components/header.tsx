import React, { Suspense } from 'react'
import { Input } from './ui/input'
import AuthHeader from './auth-header'
import SearchInput from './search-input'


const HeaderPage = async () => {
    return (
        <div className="grid grid-cols-3 mt-2 ">
            <div className='flex justify-start'>
                <h1 className='font-bold text-xl'>Discuss</h1>
            </div>
            <div className='flex justify-center'>
                <Suspense>  
                    {/* search is always in suspense */}
                    <SearchInput />
                </Suspense>

            </div>
            <div className='flex justify-end gap-2'>
                <AuthHeader />

            </div>
        </div>
    )
}

export default HeaderPage