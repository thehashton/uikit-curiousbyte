import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Codeblock from "../Codeblock";

const stories = storiesOf("Components/Codeblock", module);
stories.addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <>
            <h1>Codeblock</h1>
            <p>A little bit of information on the codeblock</p>
            <Codeblock style={'dark'} children={"<Codeblock style={'dark'} className={'anyClass'} children={'npm install'}/>"}/>
        </>
    );
}); 