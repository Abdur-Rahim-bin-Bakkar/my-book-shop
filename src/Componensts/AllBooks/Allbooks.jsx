import React, { use } from 'react';
import BooksCard from '../BooksCard/BooksCard';

const bookspromise = fetch('/booksData.json').then(res => res.json())
const Allbooks = () => {
    const books = use(bookspromise)
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold text-center mb-5 play'>Books</h1>
            <div className="grid md:grid-cols-3 2xl:grid-cols-4 gap-4">
                {
                    books.map(book => <BooksCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Allbooks;