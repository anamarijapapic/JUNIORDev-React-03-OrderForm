import React from 'react';

interface StoreContextProps {
  countries: { value: string; label: string }[];
  paymentMethods: { id: string; value: string; label: string }[];
}

const StoreContext = React.createContext<StoreContextProps>({
  countries: [],
  paymentMethods: [],
});

export default StoreContext;
