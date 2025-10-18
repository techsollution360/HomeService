import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import styles from '../styles/SearchResults.module.css';

const products = [
  // {
  //   id: 1,
  //   name: "Bhagirathi Gangajal 5 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
  //   price: '799.00',
  //   image: '/images/jal1.webp',
  // },
  // {
  //   id: 2,
  //   name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
  //   price: '599.00',
  //   image: '/images/jal2.webp',
  // },
  // {
  //   id: 3,
  //   name: "Bhagirathi Gangajal 15 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
  //   price: '599.00',
  //   image: '/images/jal2.webp',
  // },
  // {
  //   id: 4,
  //   name: "Bhagirathi Gangajal 20 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
  //   price: '799.00',
  //   image: '/images/jal1.webp',
  // }
  {
    id: 1,
    name: "Home Cleaning Services",
    description: "Professional deep cleaning for your home, kitchen, and bathroom by verified experts.",
    price: 'From ₹499',
    image: '/images/home-cleaning.png',
  },
  {
    id: 2,
    name: "Salon & Beauty at Home",
    description: "Enjoy salon-quality beauty treatments in the comfort of your home by trained professionals.",
    price: 'From ₹299',
    image: '/images/home-cleaning1.jpg',
  },
  {
    id: 3,
    name: "Appliance Repair Services",
    description: "Quick and reliable repair services for ACs, washing machines, refrigerators, and more.",
    price: 'From ₹399',
    image: '/images/home-cleaning2.jpg',
  },
  {
    id: 4,
    name: "Electrician & Plumbing Services",
    description: "Experienced electricians and plumbers for all your household maintenance needs.",
    price: 'From ₹199',
    image: '/images/home-cleaning3.jpg',
  },
  {
    id: 5,
    name: "Home Painting & Maintenance",
    description: "Give your home a fresh new look with professional painting and handyman services.",
    price: 'From ₹999',
    image: '/images/home-cleaning4.jpg',
  },
  {
    id: 6,
    name: "Pest Control Services",
    description: "Keep your home safe and hygienic with expert pest control and sanitization services.",
    price: 'From ₹499',
    image: '/images/home-cleaning5.jpg',
  },
  {
    id: 7,
    name: "Electrician & Plumbing Services",
    description: "Experienced electricians and plumbers for all your household maintenance needs.",
    price: 'From ₹199',
    image: '/images/home-cleaning3.jpg',
  },
  {
    id: 8,
    name: "Salon & Beauty at Home",
    description: "Enjoy salon-quality beauty treatments in the comfort of your home by trained professionals.",
    price: 'From ₹299',
    image: '/images/home-cleaning1.jpg',
  },
];

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q')?.toLowerCase() || '';

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className={styles.searchResultsContainer}>
      <h1 className={styles.heading}>Search Results</h1>
      {filteredProducts.length > 0 ? (
        <div className={styles.productList}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>No services found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default SearchResults;
