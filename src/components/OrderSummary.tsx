import { useContext } from 'react';
import StoreContext from '../StoreContext';

type OrderSummaryProps = {
  email: string;
  name: string;
  address: string;
  country: string;
  paymentMethod: string;
};

const OrderSummary = ({
  email,
  name,
  address,
  country,
  paymentMethod,
}: OrderSummaryProps) => {
  const { countries, paymentMethods } = useContext(StoreContext);

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-6 bg-emerald-200 border border-gray-300 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Sažetak narudžbe</h2>
      <dl className="max-w-lg text-gray-900 divide-y divide-emerald-500">
        <div className="flex flex-col pb-3">
          <dt className="mb-1 text-gray-500 md:text-lg">Kontakt</dt>
          <dd className="text-lg font-semibold">{email}</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg">Adresa</dt>
          <dd className="text-lg font-semibold">{name}</dd>
          <dd className="text-lg font-semibold">{address}</dd>
          <dd className="text-lg font-semibold">
            {countries.find((c) => c.value === country)?.label}
          </dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1 text-gray-500 md:text-lg">Način plaćanja</dt>
          <dd className="text-lg font-semibold">
            {paymentMethods.find((p) => p.value === paymentMethod)?.label}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default OrderSummary;
