const EmailInput = ({
  value,
  onChange,
  isValid,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}) => {
  return (
    <>
      <label htmlFor="email" className="block mb-2 text-indigo-500">
        Kontakt
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className={`border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ${!isValid && 'border-red-500'}`}
        placeholder="Email adresa..."
        value={value}
        onChange={onChange}
      />
      {!isValid && <p className="text-red-500">Email must contain '@'</p>}
    </>
  );
};

export default EmailInput;
