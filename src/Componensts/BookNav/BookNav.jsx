import React from 'react';
import { useNavigate } from 'react-router';

const BookNav = () => {
    const navigate = useNavigate()
    const handelRead =()=>{
        navigate('/books')
    }
    const handelWish =()=>{
        navigate('/books/collection')
    }
    return (
        <div className='mt-10'>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift border-b border-[#13131330]">
                <label className="tab" onClick={handelRead}>
                    <input type="radio" name="my_tabs_4" defaultChecked />
                   
                    Read Books
                </label>
              
                <label className="tab" onClick={handelWish}>
                    <input type="radio" name="my_tabs_4"  />
                   
                    Wishlist Books
                </label>             
                
            </div>
        </div>
    );
};

export default BookNav;