// Interface Button Props
interface ButtonProps {
  className: string;
  label?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

// Component Button
export const Button = ({ label, className, onClick, icon }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} >
      {icon}
      {label}
    </button>
  );
}