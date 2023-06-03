"use client"


import axios from 'axios';
import React, {useEffect, useState} from 'react'
import * as SlIcons from "react-icons/sl"

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
        };

        fetchPosts();
    }, []);
  return (
    <main>
        <div>
            <h1>Shop</h1>
            <div><p>Home</p><SlIcons.SlArrowRight /><p>Shop</p></div>
        </div>
    </main>
  )
}
