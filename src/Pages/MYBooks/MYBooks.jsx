import React from 'react';
import BookNav from '../../Componensts/BookNav/BookNav';
import { Outlet } from 'react-router';

const MYBooks = () => {
    return (
        <div className='max-w-11/12 mx-auto mt-5'>
            <div className='bg-[#13131305] p-5 rounded-2xl flex justify-center items-center'>
                <h1 className='text-2xl font-bold work'>Books</h1>
            </div>

            <BookNav/>

            <Outlet/>
        </div>
    );
};

export default MYBooks;