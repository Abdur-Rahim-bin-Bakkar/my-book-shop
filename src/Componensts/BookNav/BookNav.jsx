import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { BookContext } from '../../Contexts/Context';

const BookNav = () => {
    const navigate = useNavigate()
    const handelRead = () => {
        navigate('/books')
    }
    const handelWish = () => {
        navigate('/books/collection')
    }
    const { wishBooks, setWishBooks,readBooks, setReadBooks } = useContext(BookContext)

    const handelSortByPage = () => {
        setWishBooks([...wishBooks].sort((a, b) => a.totalPages - b.totalPages))
        setReadBooks([...readBooks].sort((a, b) => a.totalPages - b.totalPages))
    }
    const handelSortByRating = () => {
        setWishBooks([...wishBooks].sort((a, b) => a.rating - b.rating))
        setReadBooks([...readBooks].sort((a, b) => a.rating - b.rating))

    }
    return (
        <div className='mt-10'>
            <div className="flex justify-center my-10">
                <div className="dropdown mx-auto ">
                    <div tabIndex={0} role="button" className="btn m-1">Short By</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={handelSortByPage}><a>Page</a></li>
                        <li onClick={handelSortByRating}><a>Rating</a></li>
                    </ul>
                </div>
            </div>


            <div className="tabs tabs-lift border-b border-[#13131330]">
                <label className="tab" onClick={handelRead}>
                    <input type="radio" name="my_tabs_4" defaultChecked />

                    Read Books
                </label>

                <label className="tab" onClick={handelWish}>
                    <input type="radio" name="my_tabs_4" />

                    Wishlist Books
                </label>

            </div>
        </div>
    );
};

export default BookNav;