"use client"


import axios from 'axios';
import React, {useEffect, useState} from 'react'

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

    </main>
  )
}
