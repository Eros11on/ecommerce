import React, { useState, useContext } from 'react';
import './ProductDisplay.css'
import start_icon from "../Assets/star_icon.png"
import start_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props
    const {addToCart} = useContext(ShopContext)
    const [selectedSize, setSelectedSize] = useState(null)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium possimus aspernatur unde quisquam placeat voluptatum odit impedit sit odio tenetur eaque dolorem alias illum neque eligendi, suscipit facere id!
                </div>
                <div>
                    <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div className={`size-option ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => setSelectedSize('S')}>
                            S
                        </div>
                        <div className={`size-option ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => setSelectedSize('M')}>
                            M
                        </div>
                        <div className={`size-option ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => setSelectedSize('L')}>
                            L
                        </div>
                        <div className={`size-option ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => setSelectedSize('XL')}>
                            XL
                        </div>
                        <div className={`size-option ${selectedSize === 'XXL' ? 'selected' : ''}`} onClick={() => setSelectedSize('XXL')}>
                            XXL
                        </div>
                    </div>
                </div>
            </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
