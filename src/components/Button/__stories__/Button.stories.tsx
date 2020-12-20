import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
const css = require('./buttonStory.scss');
import Button from "../";

const stories = storiesOf("Components/Button", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <div className={css.container}>
            <h1>Button</h1>
            <p>Some information about the button</p>

            <h2>Button variation 1</h2>
            <Button 
            color={'primary'} 
            text={'button 1'} 
            label={'button 1'} 
            iconName={'chrome'}
            hasIcon
            onClick={() => alert('hello world')}
            />

            <h2>Button variation 2</h2>
            <Button 
            color={'primary'} 
            text={'button 2'} 
            label={'button 2'} 
            inverted iconName={'IE'}
            iconColor={'body'}
            hasIcon
            />

            <h2>Button variation 3</h2>
            <Button 
            color={'secondary'} 
            text={'button 3'} 
            label={'button 3'} 
            disabled={true} 
            iconName={'opera'}
            hasIcon={false}
            />


        </div>
    );
});