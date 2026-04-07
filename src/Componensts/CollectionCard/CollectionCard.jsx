import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { GiBookmarklet } from 'react-icons/gi';
import { IoLocationOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const CollectionCard = ({ book }) => {
    const navigate = useNavigate()
    // console.log(book)
    const handelNavigate = () => {
        navigate(`/details/${book.bookId}`)
    }
    return (
        <div className="card card-side min-h-85 mt-10 border border-[#13131330] flex-col md:flex-row">
            <div className='p-5  bg-[#13131305] flex justify-center items-center'>
                <img
                    src={book.image}
                    alt="Movie" className='rounded-md l w-full h-60 ' />
            </div>
            <div className="card-body ">
                <h2 className="play font-bold text-2xl">{book.bookName}</h2>
                <p className='text-[#13131385] work font-medium'>By: {book.author}</p>
                <div className="flex flex-col md:flex-row  justify-start gap-3 ">
                    <div className="flex items-center gap-3">
                        <p className='font-bold'>Tag</p>
                        {
                            book.tags.map(tag => <span className='badge bg-[#23BE0A15] badge-soft text-[#23BE0A] font-medium work border-none'># {tag}</span>)
                        }
                    </div>
                    <div className="flex gap-3 items-center justify-start">
                        <IoLocationOutline />
                        <p className='text-[#13131385] work font-medium'>Year of Publishing: {book.yearOfPublishing}</p>
                    </div>


                </div>
                <div className="border-b border-[#13131340] w-full md:flex gap-3 space-y-3 pb-3 items-center ">
                    <div className="flex gap-2 items-center text-[#13131385] work font-medium text-lg">
                        <FaUserFriends />
                        <p>Publisher: {book.publisher}</p>
                    </div>
                    <div className="flex gap-2 items-center text-[#13131385] work font-medium text-lg">
                        <GiBookmarklet />
                        <p>Page {book.totalPages}</p>
                    </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                    <button className='bg-[#328EFF20] p-2 rounded-full text-[#328EFF] font-semibold px-5'>Category: {book.category}</button>
                    <button className='bg-[#FFAC3320] p-2 rounded-full text-[#FFAC33] font-semibold px-5'>Rating: {book.rating}</button>
                    <button className='bg-[#23BE0A] p-2 rounded-full text-white font-semibold px-5' onClick={handelNavigate}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;