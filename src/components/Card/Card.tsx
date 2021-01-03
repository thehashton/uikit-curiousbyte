import React, { SyntheticEvent, useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
const css = require('./card.scss');

const Card: React.FunctionComponent = () => {
    const [dismissed, isDismissed] = useState(false);
    const dismiss = (e: SyntheticEvent) => {
        isDismissed(true);
    }

    const [buttonClick, isButtonClicked] = useState(false);

    return (
        <div className={`${css.Card} ${dismissed ? css.dismissed : ''}`}>
            <div className={css.topActions}>
                <button onClick={dismiss} className={css.dissmissBtn} tabIndex={0}>
                    <Icon 
                    color={'body'} 
                    iconName={'cross'} 
                    className={`${css.dismiss}`} />
                </button>
            </div>
            <div className={css.content}>
                <h1 className={css.title}>Card</h1>
                <p className={css.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste minima excepturi maxime. Repellat ea veniam consectetur, architecto a error officiis, libero minima, temporibus sequi rem! Quasi, voluptates quaerat? Dolore.</p>
            </div>
            <div className={css.bottomActions}>
                <Button
                color={'primary'}
                label={'Card button'}
                text={'Find out more'}
                onClick={()=>isButtonClicked(true)}
                loading={buttonClick}
                className={css.button}
                ></Button>
            </div>
        </div>
    )
}

export default Card;