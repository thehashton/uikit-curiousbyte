import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const css = require('./documentation.scss');

const stories = storiesOf("Getting Started/Documentation", module);
stories.addDecorator(withKnobs);

stories.add("Intro", () => {
    return (
        <div className={css.container}>
            <h1>Curious Byte Tutorial UI KIt</h1>
            <p>Greatest UI KIt on Earth!</p>

            <h2>About</h2>
            <p>This UI Kit was built for the sole purpose of relieving all suffers of heachaes from socks and fairly lights.</p>
        
            <h2>Purpose</h2>
            <p>The purpose of this project is to create a unified toolkit that is used by UX-designers and developers on their projects alike to ensure all CB-branded projects are accessible, appealing and have a consistent look and feel across the board by following WFP’s design and implementation guidelines.</p>

            <h2>Toolkit</h2>
            <p>By unifiying design elements into reusable components, development will simplify and accelerate the development of these digital products.</p>
        </div>
    );
});