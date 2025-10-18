import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import styles from '../styles/SearchResults.module.css';

const products = [
  {
    id: 1,
    name: "Bhagirathi Gangajal 5 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    price: '799.00',
    image: '/images/jal1.webp',
  },
  {
    id: 2,
    name: "Bhagirathi Gangajal 10 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    price: '599.00',
    image: '/images/jal2.webp',
  },
  {
    id: 3,
    name: "Bhagirathi Gangajal 15 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    price: '599.00',
    image: '/images/jal2.webp',
  },
  {
    id: 4,
    name: "Bhagirathi Gangajal 20 LTR | Pavitra Gangajal from 'Brahma kund' Har Ki Pauri, Haridwar",
    price: '799.00',
    image: '/images/jal1.webp',
  }
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
        <p className={styles.noResults}>No products found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default SearchResults;
