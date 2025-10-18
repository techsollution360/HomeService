import React from 'react';
import ProductCard from './ProductCard';
import Carousel from './Carousel';
import styles from '../styles/Home.module.css';

const products = [
  {
    id: 1,
    name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    //description: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    price: '799.00',
    image: '/images/jal1.webp',
  },
  {
    id: 2,
    name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    //description: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    price: '599.00',
    image: '/images/jal2.webp',
  },
  {
    id: 3,
    name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    //description: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    price: '599.00',
    image: '/images/jal2.webp',
  },
  {
    id: 4,
    name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    //description: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    price: '799.00',
    image: '/images/jal1.webp',
  }
  // Add more products as needed
];

const ProductList = () => {
  return (
    <>
    <Carousel />
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductList;
