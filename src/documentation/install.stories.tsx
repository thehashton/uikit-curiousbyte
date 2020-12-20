import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Codeblock from "../components/Codeblock";

const css = require('./documentation.scss');

const stories = storiesOf("Getting Started/Documentation", module);
stories.addDecorator(withKnobs);

stories.add("Install", () => {
    return (
        <div className={css.container}>
            <h1>Installing the Kit</h1>
            <p>A little bit of information on installing our UI Kit</p>
            <Codeblock children={`$npm install \n$npm run storybook`}/>
        </div>
    );
}); 