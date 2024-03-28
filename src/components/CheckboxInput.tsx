const CheckboxInput = ({
  id,
  label,
  onChange,
}: {
  id: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex items-center h-5">
      <input
        id={id}
        type="checkbox"
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
        onChange={onChange}
      />
      <label htmlFor={id} className="ms-2">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
