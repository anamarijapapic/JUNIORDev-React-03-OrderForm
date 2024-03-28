import { useContext, useState } from 'react';
import EmailInput from './EmailInput';
import AddressFieldGroup from './AddressFieldGroup';
import PaymentFieldGroup from './PaymentFieldGroup';
import CheckboxInput from './CheckboxInput';
import StoreContext from '../StoreContext';

const Form = ({
  onOrder,
}: {
  onOrder: (data: {
    email: string;
    name: string;
    address: string;
    country: string;
    paymentMethod: string;
  }) => void;
}) => {
  const { countries, paymentMethods } = useContext(StoreContext);

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [country, setCountry] = useState('hr');
  const [address, setAddress] = useState('');
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailValid(e.target.value.includes('@'));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsNameValid(e.target.value.trim() !== '');
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setIsAddressValid(e.target.value.trim() !== '');
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isFormValid = true;
    if (!email.includes('@')) {
      setIsEmailValid(false);
      isFormValid = false;
    }

    if (name.trim() === '') {
      setIsNameValid(false);
      isFormValid = false;
    }

    if (address.trim() === '') {
      setIsAddressValid(false);
      isFormValid = false;
    }

    if (!termsAccepted) {
      alert('Molimo prihvatite uvjete prije slanja narudžbe.');
      isFormValid = false;
    }

    if (!isFormValid) {
      return;
    }

    onOrder({ email, name, address, country, paymentMethod });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-200 border border-gray-300 rounded-lg shadow sm:p-6 md:p-8">
      <form className="text-left" onSubmit={handleSubmit}>
        <h5 className="mb-10">
          <span className="text-gray-500">Račun --{'>'} </span>
          <b>Plaćanje</b>
        </h5>
        <div className="mb-10">
          <EmailInput
            value={email}
            onChange={handleEmailChange}
            isValid={isEmailValid}
          />
        </div>
        <div className="mb-10">
          <AddressFieldGroup
            name={name}
            address={address}
            country={country}
            handleNameChange={handleNameChange}
            handleAddressChange={handleAddressChange}
            handleCountryChange={handleCountryChange}
            isNameValid={isNameValid}
            isAddressValid={isAddressValid}
            countries={countries}
          />
        </div>
        <div className="mb-10">
          <PaymentFieldGroup
            paymentMethods={paymentMethods}
            onChange={handlePaymentChange}
            paymentMethod={paymentMethod}
          />
        </div>
        <div className="mb-10">
          <CheckboxInput
            id="terms"
            label="Prihvaćam uvjete narudžbe"
            onChange={handleTermsChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Naruči
        </button>
      </form>
    </div>
  );
};

export default Form;
