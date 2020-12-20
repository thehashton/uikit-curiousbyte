import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Loading from "../";

const stories = storiesOf("Components/Loading", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <Loading />
    );
});