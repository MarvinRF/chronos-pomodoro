import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export const DefaultButton = ({
  type,
  icon,
  color = 'green',
  ...buttonProps
}: DefaultButtonProps) => {
  return (
    <button className={styles[color]} type={type} {...buttonProps}>
      {icon}
    </button>
  );
};
