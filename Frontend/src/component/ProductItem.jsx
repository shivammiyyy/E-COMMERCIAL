import React, { useContext } from 'react';
import { ShopContext } from '../content/ShopContent';
import { Link } from 'react-router-dom';

export const ProductItem = ({ id, image, price, name }) => {
    const {currency} = useContext(ShopContext);

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img 
                    className='hover:scale-110 transition ease-in-out' 
                    src={Array.isArray(image) ? image[0] : image} 
                    alt={name || 'Product'} 
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>
                {currency}{price}
            </p>
        </Link>
    );
};

