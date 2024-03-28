const RadioInput = ({
  id,
  name,
  value,
  label,
  onChange,
  checked,
}: {
  id: string;
  name: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}) => {
  return (
    <div className="mb-1">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="mr-2"
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} className="mr-5">
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
