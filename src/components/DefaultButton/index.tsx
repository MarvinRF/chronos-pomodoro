import styles from './styles.module.css';

type DefaultButtonProps = {
  labelText?: string;
  id: string;
  placeholder: string;
} & React.ComponentProps<'input'>;

const DefaultButton = ({
  labelText,
  id,
  type,
  placeholder,
  ...inputProps
}: DefaultButtonProps) => {
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

export default DefaultButton;
