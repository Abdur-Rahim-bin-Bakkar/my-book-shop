import React, { useContext } from 'react';
import { BookContext } from '../../Contexts/Context';
import CollectionCard from '../CollectionCard/CollectionCard';

const WishCollection = () => {
    const { wishBooks, setWishBooks } = useContext(BookContext)
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