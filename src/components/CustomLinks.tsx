// Import For Router Dom
import { Link } from "react-router-dom";

// Interface Link Props
interface LinkProps {
  reference: string;
  className?: string;
  label?: string;
  target?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

// Component Link
export const CustomLinks = ({ reference, className, label, icon, target, disabled }: LinkProps) => {
  return (
    <Link to={reference} target={target} className={disabled ? 'disabled' : className}>
      {icon && icon}
      <span>{label}</span>
    </Link>
  );
}