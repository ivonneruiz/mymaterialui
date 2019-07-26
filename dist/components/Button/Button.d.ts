import React from 'react';
export declare type ButtonColor = 'default' | 'primary' | 'secondary';
export interface IButtonProps {
    children: React.ReactNode;
    classes?: object;
    className?: string;
    color?: ButtonColor;
    disabled?: boolean;
    loading?: boolean;
    noFluid?: boolean;
    fluid?: boolean;
    href?: string;
    id: string;
    size?: 'small' | 'medium' | 'large';
    style?: object;
    type?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: React.FC<IButtonProps>;
export default Button;
