export const Input = ({ checked, type, label, className, onChange }) => {
  return (
    <label htmlFor="">
      <input
        type={type}
        className={className}
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  );
};
