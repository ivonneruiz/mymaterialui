import React from 'react';

// MUI
import MuiButton from '@material-ui/core/Button';

export type ButtonColor = 'default' | 'primary' | 'secondary';

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

const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    const {
        children,
        ...rest
    } = props;

    return (
        <MuiButton
            {...rest}
        >
            {children}
        </MuiButton>
    );
};

export default Button;