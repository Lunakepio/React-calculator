export const Button = ({ label, value, setValue }) => {
  const handleClick = () => {
    switch (label) {
      case "AC":
        setValue("");
        break;
      case "+-":
        setValue(value * -1);
        break;
      case "%":
        setValue(value / 100);
        break;
      case "=":
        setValue(eval(value));
        break;
      default:
        setValue(value + label);
    }
  };
  return <button onClick={handleClick}>{label}</button>;
};
