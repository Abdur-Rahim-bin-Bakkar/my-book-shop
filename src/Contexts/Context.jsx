import React, { createContext, useState } from 'react';
export const BookContext = createContext()

const Context = ({children}) => {
    const [readBooks, setReadBooks] = useState([])
    const [wishBooks, setWishBooks] = useState([])
    return (
        <BookContext value={{readBooks, setReadBooks,wishBooks, setWishBooks}}>
            {children}
        </BookContext>
    );
};

export default Context;