import styles from './styles.module.css';

type DefaultInputProps = {
  labelText?: string;
  id: string;
  placeholder: string;
} & React.ComponentProps<'input'>;

const DefaultInput = ({
  labelText,
  id,
  type,
  placeholder,
  ...inputProps
}: DefaultInputProps) => {
  return (
    <>
      {labelText && <label htmlFor='input'>{labelText}</label>}
      <input
        className={styles.input}
        placeholder={placeholder}
        id={id}
        type={type}
        {...inputProps}
      />
    </>
  );
};

export default DefaultInput;
