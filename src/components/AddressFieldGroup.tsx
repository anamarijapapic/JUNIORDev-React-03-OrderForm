import TextInput from './TextInput';
import SelectInput from './SelectInput';

import React from 'react';

type AddressFieldGroupProps = {
  name: string;
  address: string;
  country: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCountryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isNameValid: boolean;
  isAddressValid: boolean;
  countries: Array<{ value: string; label: string }>;
};

const AddressFieldGroup = ({
  name,
  address,
  country,
  handleNameChange,
  handleAddressChange,
  handleCountryChange,
  isNameValid,
  isAddressValid,
  countries,
}: AddressFieldGroupProps) => {
  return (
    <>
      <p className="mb-3 text-indigo-500">Adresa</p>
      <TextInput
        label="Ime:"
        name="name"
        id="name"
        placeholder="Unesite ime..."
        value={name}
        onChange={handleNameChange}
        isValid={isNameValid}
      />
      <SelectInput
        label="Država:"
        name="country"
        id="country"
        options={countries}
        value={country}
        onChange={handleCountryChange}
      />
      <TextInput
        label="Adresa:"
        name="address"
        id="address"
        placeholder="Unesite adresu..."
        value={address}
        onChange={handleAddressChange}
        isValid={isAddressValid}
      />
    </>
  );
};

export default AddressFieldGroup;
