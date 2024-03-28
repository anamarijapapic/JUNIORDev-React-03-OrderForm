const SelectInput = ({
  label,
  name,
  id,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  id: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="block w-full p-2.5 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
