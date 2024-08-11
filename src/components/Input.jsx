export const Input = ({ checked, type, label, className }) => {
  return (
    <label htmlFor="">
      <input type={type} className={className} checked={checked} />
      {label}
    </label>
  );
};
