import React from 'react';
import { CiStar } from 'react-icons/ci';
import { useNavigate } from 'react-router';

const BooksCard = ({ book }) => {
    // console.log(book)
    const navigate = useNavigate()
    const handelNavigate= ( ) =>{
        navigate(`/details/${book.bookId}`)
    }
    return (
        <div onClick={handelNavigate} className='card p-5 border border-[#13131315] flex flex-col h-full'>
            <div className='bg-[#F3F3F3] py-8 rounded-md'>

                <img src={book.image} alt="" className='w-30 h-50 mx-auto rounded-md' />
            </div>
            <div className="card-body flex flex-col h-full ">
                <div className=" space-x-3">
                    {
                        book.tags.map((tag,i)=> <span key={i} className='badge bg-[#23BE0A15] badge-soft text-[#23BE0A] font-medium work'>{tag}</span>)
                    }
                </div>
                <h1 className='play text-2xl font-bold '>{book.bookName}</h1>
                <p className='text-[#13131380] '>BY: {book.author}</p>
                <div className=" flex justify-between items-center border-t border-dashed border-[#13131335] mt-1 pt-3 ">
                    <p className=' text-[#13131380]  font-bold'>{book.category}</p>
                    <p className='font-bold text-[#13131380] flex items-center gap-3'>{book.rating} <CiStar className='text-lg'/> </p>
                </div>
                
            </div>
        </div>
    );
};

export default BooksCard;