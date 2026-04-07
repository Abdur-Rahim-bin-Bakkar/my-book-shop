import React, { useContext } from 'react';
import { BookContext } from '../../Contexts/Context';
import CollectionCard from '../CollectionCard/CollectionCard';
import emptyImg from '../../assets/empty.jpg'

const ReadCollection = () => {
    const { readBooks, setReadBooks } = useContext(BookContext)
    // console.log(readBooks)
    if (readBooks.length === 0) {
        return (

            <img src={emptyImg} className='w-70 mx-auto my-5' alt="" />
        )
    }
    return (
        <div className='mb-4 grid grid-cols-1'>


            {
                readBooks.map(book => <CollectionCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default ReadCollection;