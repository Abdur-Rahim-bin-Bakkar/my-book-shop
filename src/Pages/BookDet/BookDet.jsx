import React, { use, useContext } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaPersonWalkingArrowLoopLeft } from 'react-icons/fa6';
import { NavLink, useNavigate, useParams } from 'react-router';
import { BookContext } from '../../Contexts/Context';
const booksPromis = fetch('/booksData.json').then(res => res.json())
const BookDet = () => {
    const navigate = useNavigate()
    const loaderId = useParams()
    const books = use(booksPromis)
    const expectedBook = books.find(book => book.bookId === Number(loaderId.id))
    console.log(expectedBook)
    const handelNavigate = () => {
        navigate(-1)
    }


    const {readBooks, setReadBooks,wishBooks, setWishBooks} = useContext(BookContext)
    console.log(readBooks)
    console.log( setReadBooks)
    console.log( wishBooks)
    console.log( setWishBooks)
    return (
        <div className='max-w-11/12 mx-auto mt-4'>
            

            <div className="card lg:card-side ">
                <div className='flex-1 p-10 bg-[#f3f3f3] rounded-2xl'>
                    <img
                        src={expectedBook.image}
                        alt="Album"
                        className='w-[80%] mx-auto' />
                </div>
                <div className="card-body flex-1">
                    <h2 className="card-title font-bold text-xl play md:text-3xl">{expectedBook.bookName}</h2>
                    <p className='text-[#13131380] font-semibold'>{expectedBook.author}</p>
                    <span className='divider'></span>
                    <p className='text-[#13131380] font-semibold'>{expectedBook.category}</p>
                    <span className='divider'></span>
                    <p className='text-[#13131370] font-semibold'><span className='font-bold text-black'>Review:</span> {expectedBook.review}</p>

                    <div className='flex gap-4 items-center my-3'>
                        <h3 className='text work font-bold text-lg'>Tag</h3>
                        {
                            expectedBook.tags.map((tag, i) => <span key={i} className='badge bg-[#23BE0A15] badge-soft text-[#23BE0A] font-medium work'>{tag}</span>)
                        }
                    </div>
                    <span className='divider'></span>

                    <div className='mt-3 flex justify-between'>
                        <p>Number of Pages:</p>
                        <p>{expectedBook.totalPages}</p>
                    </div>
                    <div className='mt-3 flex justify-between'>
                        <p>Publisher:</p>
                        <p>{expectedBook.publisher}</p>
                    </div>
                    <div className='mt-3 flex justify-between'>
                        <p>Year of Publishing:</p>
                        <p>{expectedBook.yearOfPublishing}</p>
                    </div>
                    <div className='mt-3 flex justify-between'>
                        <p>Rating:</p>
                        <p>{expectedBook.rating}</p>
                    </div>
                    
                    <div className="flex gap-3 items-center">
                        <NavLink className='btn btn-outline border-[#13131330]'>ADD to Read</NavLink>
                        <NavLink className={'btn bg-[#50B1C9] text-white font-bold'}>Add To Wishlist</NavLink>
                    </div>



                </div>
            </div>

            <div onClick={handelNavigate} className="flex gap-3 items-center mt-15 mb-10 text-lg btn w-40 mx-auto">
                <FaPersonWalkingArrowLoopLeft />
                <span>Go Back</span>
            </div>


        </div>
    );
};

export default BookDet;