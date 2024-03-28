import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import OrderSummary from './components/OrderSummary';
import StoreContext from './StoreContext';

function App() {
  const countries = [
    { value: 'hr', label: 'Hrvatska' },
    // Other countries...
  ];

  const paymentMethods = [
    { id: 'cashOnDelivery', value: 'cashOnDelivery', label: 'Pouzeće' },
    { id: 'creditCard', value: 'creditCard', label: 'Kartica' },
    // Other payment methods...
  ];

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    email: '',
    name: '',
    address: '',
    country: '',
    paymentMethod: '',
  });

  const handleOrder = (details: {
    email: string;
    name: string;
    address: string;
    country: string;
    paymentMethod: string;
  }) => {
    setOrderDetails(details);
    setOrderPlaced(true);
  };

  return (
    <StoreContext.Provider value={{ countries, paymentMethods }}>
      <Form onOrder={handleOrder} />
      {orderPlaced && <OrderSummary {...orderDetails} />}
    </StoreContext.Provider>
  );
}

export default App;
