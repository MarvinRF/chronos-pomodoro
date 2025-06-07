type DefaultInputProps = {
  label: string;
  id: string;
  placeholder: string;
} & React.ComponentProps<'input'>;

const DefaultInput = ({ label, id, type, placeholder }: DefaultInputProps) => {
  return (
    <>
      <label htmlFor='input'>
        <span>{label}</span>
      </label>
      <input placeholder={placeholder} id={id} type={type} />
    </>
  );
};

export default DefaultInput;
