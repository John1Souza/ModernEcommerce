"use client"


import axios from 'axios';
import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import * as SlIcons from "react-icons/sl"
import { ShopDashboardWrapper, MainWrapper, ProductsWrapper, Products } from "./page.style"


interface ShopInterface {
    id: number,
    title: string,
    value: number,
    imageUrl: string,

}
export default function Shop(props : ShopInterface) {
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
    <MainWrapper>
        <ShopDashboardWrapper>
            <Image src="/ShopDashboard/Meubel House_Logos-05.png" alt="Meubel House Logo" width={77} height={77} />
            <h1>Shop</h1>
            <div>
                <p>Home</p>
                <SlIcons.SlArrowRight />
                <p>Shop</p>
            </div>
        </ShopDashboardWrapper>
        <ProductsWrapper>
            {products && products.map((item : ShopInterface) => (
                <Products key={item.id}>
                    <Image src={item.imageUrl} alt={item.title} width={287} height={287}/>
                    <h2>{item.title}</h2>
                    <p>{`${item.value.toLocaleString('en')},00`}</p>
                </Products>
            ))}
        </ProductsWrapper>
    </MainWrapper>
  )
}
