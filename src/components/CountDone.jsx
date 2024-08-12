export const CountDone = ({ count, taskLength }) => {
  return <h5 className="text-end">{`Done: ${count}/${taskLength}`}</h5>;
};
