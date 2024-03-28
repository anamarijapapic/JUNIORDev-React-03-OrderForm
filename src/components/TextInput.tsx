const TextInput = ({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
  isValid,
}: {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        className={`border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ${!isValid && 'border-red-500'}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!isValid && <p className="text-red-500">This field is required</p>}
    </div>
  );
};

export default TextInput;
