import React, { use } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaPersonWalkingArrowLoopLeft } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';
const booksPromis = fetch('/booksData.json').then(res => res.json())
const BookDet = () => {
    const navigate = useNavigate()
    const loaderId = useParams()
    const books = use(booksPromis)
    const myBook = books.find(book => book.bookId === Number(loaderId.id))
    console.log(myBook)
    // // console.log(books)
    // console.log(loaderId)
    const handelNavigate = ()=>{
        navigate(-1)
    }
    return (
        <div className='max-w-11/12 mx-auto'>
            <div onClick={handelNavigate} className="flex gap-3 items-center text-lg btn w-40">
                <FaPersonWalkingArrowLoopLeft />
                <span>Go Back</span>
            </div>
            
        </div>
    );
};

export default BookDet;