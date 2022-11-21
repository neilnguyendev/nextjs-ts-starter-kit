type IProps = {
  submitType: boolean;
  text: string;
};
export default function Button(props: IProps) {
  return (
    <button
      className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
      type={props.submitType ? 'submit' : 'button'}
    >
      {props.text}
    </button>
  );
}
