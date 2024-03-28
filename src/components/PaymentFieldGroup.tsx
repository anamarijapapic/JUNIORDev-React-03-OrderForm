import RadioInput from './RadioInput';

const PaymentFieldGroup = ({
  paymentMethods,
  onChange,
  paymentMethod,
}: {
  paymentMethods: { id: string; value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  paymentMethod: string;
}) => {
  return (
    <>
      <p className="mb-3 text-indigo-500">Način plaćanja</p>
      {paymentMethods.map((method) => (
        <RadioInput
          key={method.id}
          id={method.id}
          name="payment"
          value={method.value}
          label={method.label}
          onChange={onChange}
          checked={paymentMethod === method.value}
        />
      ))}
    </>
  );
};

export default PaymentFieldGroup;
