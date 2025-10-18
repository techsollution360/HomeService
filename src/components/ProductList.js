import React from 'react';
import ProductCard from './ProductCard';
import Carousel from './Carousel';
import styles from '../styles/Home.module.css';

// const products = [
//   {
//     id: 1,
//     name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
//     //description: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
//     price: '799.00',
//     image: '/images/jal1.webp',
//   },
//   {
//     id: 2,
//     name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
//     //description: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
//     price: '599.00',
//     image: '/images/jal2.webp',
//   },
//   {
//     id: 3,
//     name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
//     //description: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
//     price: '599.00',
//     image: '/images/jal2.webp',
//   },
//   {
//     id: 4,
//     name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
//     //description: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
//     price: '799.00',
//     image: '/images/jal1.webp',
//   }
//   // Add more products as needed
// ];

const products = [
  {
    id: 1,
    name: "Home Cleaning Services",
    description: "Professional deep cleaning for your home, kitchen, and bathroom by verified experts.",
    price: '499.00',
    image: '/images/home-cleaning.png',
  },
  {
    id: 2,
    name: "Salon & Beauty at Home",
    description: "Enjoy salon-quality beauty treatments in the comfort of your home by trained professionals.",
    price: '299.00',
    image: '/images/home-cleaning1.jpg',
  },
  {
    id: 3,
    name: "Appliance Repair Services",
    description: "Quick and reliable repair services for ACs, washing machines, refrigerators, and more.",
    price: '399.00',
    image: '/images/home-cleaning2.jpg',
  },
  {
    id: 4,
    name: "Electrician & Plumbing Services",
    description: "Experienced electricians and plumbers for all your household maintenance needs.",
    price: '199.00',
    image: '/images/home-cleaning3.jpg',
  },
  {
    id: 5,
    name: "Home Painting & Maintenance",
    description: "Give your home a fresh new look with professional painting and handyman services.",
    price: '999.00',
    image: '/images/home-cleaning4.jpg',
  },
  {
    id: 6,
    name: "Pest Control Services",
    description: "Keep your home safe and hygienic with expert pest control and sanitization services.",
    price: '499.00',
    image: '/images/home-cleaning5.jpg',
  },
  {
    id: 7,
    name: "Electrician & Plumbing Services",
    description: "Experienced electricians and plumbers for all your household maintenance needs.",
    price: '199.00',
    image: '/images/home-cleaning3.jpg',
  },
  {
    id: 8,
    name: "Salon & Beauty at Home",
    description: "Enjoy salon-quality beauty treatments in the comfort of your home by trained professionals.",
    price: '299.00',
    image: '/images/home-cleaning1.jpg',
  },
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
