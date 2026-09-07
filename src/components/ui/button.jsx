import { forwardRef } from 'react';
import Icon from '../Icon';

const styles = {
  default: 'shadcn-button shadcn-button-default',
  secondary: 'shadcn-button shadcn-button-secondary',
  outline: 'shadcn-button shadcn-button-outline',
  ghost: 'shadcn-button shadcn-button-ghost',
  destructive: 'shadcn-button shadcn-button-destructive',
};
const sizes = { default: 'shadcn-button-md', sm: 'shadcn-button-sm', lg: 'shadcn-button-lg', icon: 'shadcn-button-icon' };

export const Button = forwardRef(function Button({ asChild = false, variant = 'default', size = 'default', icon, children, className = '', ...props }, ref) {
  const classNames = `${styles[variant] || styles.default} ${sizes[size] || sizes.default} ${className}`.trim();
  if (asChild) return <span className={classNames}><a ref={ref} {...props}>{children}{icon && <Icon name={icon} size={16} />}</a></span>;
  return <button ref={ref} className={classNames} {...props}>{children}{icon && <Icon name={icon} size={16} />}</button>;
});
