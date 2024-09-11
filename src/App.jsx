import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add custom styles if needed

function App() {
  const [cart, setCart] = useState([]);

  const handleCartChange = (item) => {
    if (cart.some(cartItem => cartItem.id === item.id)) {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
  };

  const items = [
    { id: 1, name: 'Elegant Evening Gown', description: 'A stunning floor-length gown perfect for formal occasions..', price: 40.00, salePrice: 80.00 },
    { id: 2, name: 'Summer Floral Dress', description: 'A light and breezy dress with a vibrant floral pattern..', price: 20.00, salePrice: 18.00 },
    { id: 3, name: 'Vintage Floral Dress', description: 'inspired floral dress with puffed sleeves.', price: 50.00, salePrice: 25.00 },
    { id: 4, name: 'Satin Slip Dress', description: 'This sleek satin slip dress offers a minimalist design with a luxurious feel.', price: 20.00, salePrice: 18.00 },
    { id: 5, name: 'Casual Denim Dress', description: 'A comfortable denim dress suitable for everyday wear.', price: 50.00, salePrice: 25.00 },
    { id: 6, name: 'Tropical Print Maxi Dress', description: 'Bright and bold, this tropical print maxi dress is perfect for vacation or summer parties. .', price: 120.00, salePrice: 280.00 },
    { id: 7, name: 'Polka Dot Midi Dress', description: 'This playful polka dot midi dress combines retro charm with modern style.', price: 20.00, salePrice: 18.00 },
    { id: 8, name: 'Classic Little Black Dress', description: 'An essential piece for any wardrobe, perfect for any occasion.//.', price: 20.00, salePrice: 18.00 }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"> Start Bootstrap</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Shop
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">All Products</a>
              <a className="dropdown-item" href="#">Popular Items</a>
              <a className="dropdown-item" href="#">New Arrivals</a>
            </div>
          </li>
        </ul>
        <a className="btn btn-outline-dark" href="#">
          <i className="bi-cart-fill me-1"></i>
          Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
        </a>
      </nav>

      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container-fluid px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>

      {/* Product grid */}
      <div className="container-fluid my-5">
        <div className="row">
          {items.map(item => (
            <div className="col-lg-3 col-md-6 mb-5" key={item.id}>
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                <img className="card-img-top" src="https://via.placeholder.com/450x300" alt={item.name} />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{item.name}</h5>
                    <p className="text-muted">{item.description}</p>
                    <span className="text-muted text-decoration-line-through">${item.price.toFixed(2)}</span> ${item.salePrice.toFixed(2)}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {cart.some(cartItem => cartItem.id === item.id) ? (
                      <button className="btn btn-danger" onClick={() => handleCartChange(item)}>
                        Remove from Cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={() => handleCartChange(item)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;



