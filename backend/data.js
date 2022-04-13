import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Akshay',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Vikash',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Shirt',
      slug: 'nike-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 820,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Shirt',
    },
    {
      name: 'Nike Pant',
      slug: 'nike-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 1620,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 10,
      description: 'High Quality Pant',
    },
    {
      name: 'Adidas Shirt',
      slug: 'adidas-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 800,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.8,
      numReviews: 10,
      description: 'Quality Shirt',
    },
    {
      name: 'Adidas Pant',
      slug: 'adidas-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 1400,
      countInStock: 0,
      brand: 'Adidas',
      rating: 3.8,
      numReviews: 10,
      description: 'Quality Pant',
    },
  ],
};
export default data;
