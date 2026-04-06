import React, { useContext } from 'react';
import { CiStar } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router';
import { BookContext } from '../../Contexts/Context';
import { toast } from 'react-toastify';

const BooksCard = ({ book }) => {
    // console.log(book)
    const navigate = useNavigate()
    const handelNavigate = () => {
        navigate(`/details/${book.bookId}`)
    }
    const { readBooks, setReadBooks, wishBooks, setWishBooks } = useContext(BookContext)

    const handelReadBooks = () => {
        const isExistReadBook = readBooks.find(books => books.bookId === book.bookId)
        if (isExistReadBook) {
            toast.error(`${book.bookName} is already exist in Read Collection`)
            return
        }
        const isExistWishBook = wishBooks.find(books => books.bookId === book.bookId)
        if (isExistWishBook) {
            toast.error(`${book.bookName} is already exist in Wish Collection`)
            return
        }
        if (!isExistReadBook) {
            setReadBooks([...readBooks, book])
            toast.success(`successfully added ${book.bookName}`)
        }
    }
    const handelWishBooks = () => {
        const isExistWishBook = wishBooks.find(books => books.bookId === book.bookId)
        if (isExistWishBook) {
            toast.error(`${book.bookName} is already exist in Wish Collection`)
            return
        }


        const isExistReadBook = readBooks.find(books => books.bookId === book.bookId)
        if (isExistReadBook) {
            toast.error(`${book.bookName} is already exist in Read Collection`)
            return
        }



        if (!isExistWishBook) {
            setWishBooks([...wishBooks, book])
            toast.success(`successfully added ${book.bookName}`)
        }
    }
    return (
        <div  className='card p-5 border border-[#13131315] flex flex-col h-full'>
            <div onClick={handelNavigate} className='bg-[#F3F3F3] py-8 rounded-md'>

                <img src={book.image} alt="" className='w-30 h-50 mx-auto rounded-md' />
            </div>
            <div className="card-body flex flex-col h-full ">
                <div className=" space-x-3">
                    {
                        book.tags.map((tag, i) => <span key={i} className='badge bg-[#23BE0A15] badge-soft text-[#23BE0A] font-medium work'>{tag}</span>)
                    }
                </div>
                <h1 className='play text-2xl font-bold '>{book.bookName}</h1>
                <p className='text-[#13131380] '>BY: {book.author}</p>
                <div className=" flex justify-between items-center border-t border-dashed border-[#13131335] mt-1 pt-3 ">
                    <p className=' text-[#13131380]  font-bold'>{book.category}</p>
                    <p className='font-bold text-[#13131380] flex items-center gap-3'>{book.rating} <CiStar className='text-lg' /> </p>
                </div>
                <div className="flex gap-3 items-center">
                    <NavLink className='btn btn-outline border-[#13131330]' onClick={handelReadBooks}>ADD to Read</NavLink>
                    <NavLink onClick={handelWishBooks} className={'btn bg-[#50B1C9] text-white font-bold'}>Add To Wishlist</NavLink>
                </div>

            </div>
        </div>
    );
};

export default BooksCard;