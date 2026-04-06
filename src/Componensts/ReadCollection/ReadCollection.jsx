import React, { useContext } from 'react';
import { BookContext } from '../../Contexts/Context';
import CollectionCard from '../CollectionCard/CollectionCard';

const ReadCollection = () => {
    const { readBooks, setReadBooks } = useContext(BookContext)
    console.log(readBooks)
    return (
        <div className='mb-4 grid grid-cols-1'>
        

            {
                readBooks.map(book => <CollectionCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default ReadCollection;