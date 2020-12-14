import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import "../button.scss";
import Button from "../";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories.add("Button", () => {
    return (
        <Button />
    );
});