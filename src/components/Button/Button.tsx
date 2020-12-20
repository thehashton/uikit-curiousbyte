import React, { SyntheticEvent } from 'react';
import Icon from '../Icon';
import Loading from '../Loading';
const css = require('./button.scss');

type ButtonProps = {
    color: 'primary'|'secondary',
    text: string,
    label: string,
    hasIcon?: boolean,
    iconSize?: 'small'|'medium'|'large',
    iconName?: string,
    iconColor?: 'primary'|'secondary'|'body'|'white',
    loading?: boolean,
    loadingColor?: 'primary'|'secondary'|'body'|'white', 
    loadingSize?: 'small'|'medium'|'large',
    className?: string,
    disabled?: boolean,
    inverted?: boolean,
    expanded?: boolean,
    pressed?: boolean,
    tabIndex?: number,
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
    onKeydown?: (e: SyntheticEvent<HTMLButtonElement>) => void,
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    const { color, text, label, loading = false, className = '', 
    disabled = false, inverted, expanded = false, pressed = false, 
    tabIndex = 0, onClick, onKeydown, iconName = '', iconColor = 'white', 
    iconSize = 'small', hasIcon = false, loadingColor = 'body', loadingSize = 'large' } = props;

    return (
        <button
        className={`
        ${css.Button} 
        ${css[color]} 
        ${css[className]}
        ${disabled || loading ? css.disabled : ''}
        ${inverted ? css.inverted : ''}
        `} 
        disabled={disabled ? disabled : false} 
        aria-label={label}
        aria-expanded={expanded}
        aria-pressed={pressed}
        tabIndex={tabIndex}
        onClick={onClick}
        onKeyDown={onKeydown}
        >
            {
                loading && (
                    <Loading className={css.spinner} color={loadingColor} size={loadingSize}  />
                )
            }
            {
                hasIcon && (
                    <Icon 
                    className={css.buttonIcon} 
                    iconName={iconName} 
                    size={iconSize}
                    color={iconColor} />
                )
            }
            {text}
        </button>
    )
}

export default Button;