


interface ButtonProps {
    children: string;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'danger';
  }

const Button = ( { children, onClick, color }: ButtonProps) => {
  return (
    <>
        <button onClick={onClick} className={"btn btn-" + color}>{children}</button>
        </>
  )
}

export default Button