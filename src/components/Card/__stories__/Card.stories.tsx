import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Card from "../";

const stories = storiesOf("Components/Card", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <Card />
    );
});