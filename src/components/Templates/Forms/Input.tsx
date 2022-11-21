import Label from '@/components/Templates/Forms/Label';

type IProps = {
  type: string;
  min?: number;
  max?: number;
  id?: string;
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  value?: string;
  disabled?: boolean;
  onChange?: any;
  inputClassName?: string;
  wrapperClassName?: string;
  registerHook?: object;
};

export default function Input({
  type = 'text',
  min,
  max,
  id,
  name,
  label,
  placeholder,
  error,
  value,
  disabled = false,
  onChange,
  inputClassName,
  wrapperClassName,
  registerHook,
}: IProps) {
  return (
    <div className={`mb-4 ${wrapperClassName || ''}`}>
      <Label htmlFor={id} label={label} />
      <input
        id={id}
        name={name}
        min={min}
        max={max}
        className={`w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:shadow-gray-500 focus:outline-none ${
          error ? 'border border-red-500' : ''
        } ${inputClassName || ''}`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...registerHook}
      />
      {error && (
        <label htmlFor={id} className="text-xs italic text-red-500">
          {error}
        </label>
      )}
    </div>
  );
}
