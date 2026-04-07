import React, { useContext } from 'react';
import { BookContext } from '../../Contexts/Context';
import CollectionCard from '../CollectionCard/CollectionCard';
import emptyImg from '../../assets/empty.jpg'

const WishCollection = () => {
    const { wishBooks, setWishBooks,sort, setSort } = useContext(BookContext)
    // console.log(sort, setSort)
     if (wishBooks.length === 0) {
            return (
    
                <img src={emptyImg} className='w-70 mx-auto my-5' alt="" />
            )
        }
    return (
        <div>
            <div className='mb-4'>


                {
                    wishBooks.map(book => <CollectionCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default WishCollection;