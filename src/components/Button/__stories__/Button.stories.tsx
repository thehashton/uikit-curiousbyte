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
            <Button />

            <h2>Button variation 2</h2>
            <Button />
        </div>
    );
});