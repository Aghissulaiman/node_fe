interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-blue-600 hover:bg-red-700 rounded text-white transition">
      {label}
    </button>
  );
}

export default Button;
