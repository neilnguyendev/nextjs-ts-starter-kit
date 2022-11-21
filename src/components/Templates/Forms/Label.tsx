type IProps = {
  htmlFor?: string;
  label: string;
};

export default function Label({ htmlFor, label }: IProps) {
  return (
    <label
      className={`mb-2 block text-sm font-bold text-gray-700`}
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
}
