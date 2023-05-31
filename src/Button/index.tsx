import { FC } from 'react';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

type ButtonColor = 'red' | 'green' | 'blue';
type ButtonIcon =
  | 'search'
  | 'edit'
  | 'check'
  | 'message'
  | 'star'
  | 'delete'
  | 'add'
  | 'share';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  color?: ButtonColor;
  icon?: ButtonIcon;
}
const Button: FC<BaseButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, color, icon } = props;
  return (
    <button
      className={`
        font-semibold 
        rounded-lg 
        shadow-md 
        text-white 
        bg-${color}-500 
        hover:bg-${color}-700 
        border-none 
        cursor-pointer `}
      p="y-2 x-4"
    >
      {children}
      {icon && <i className={`i-ic-baseline-${icon} p-1 `}></i>}
    </button>
  );
};

export default Button;
