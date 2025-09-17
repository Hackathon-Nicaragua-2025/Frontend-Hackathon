// Interface Button Props
interface ButtonProps {
  className: string;
  label?: string;
  rol?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
}

// Component Button
export const Button = ({ label, className, rol, onClick, icon }: ButtonProps) => {
  return (
    <button className={(rol ? 'hidden ' : 'block ') + className} onClick={onClick} >
      {icon}
      {label}
    </button>
  );
}