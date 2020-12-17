import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const css = require("./iconStory.scss");
import Icon from "../";

const stories = storiesOf("Icon", module);
stories.addDecorator(withKnobs);

stories.add("Icon", () => {
    return (
        <div className={css.container}>
            <div className={css.iconWrapper}>
                <Icon iconName={'home'} size={'large'} color={"secondary"} />
                <span>home</span>
            </div>
            <div className={css.iconWrapper}>
                <Icon iconName={'home2'} size={'medium'} color={"body"}/>
                <span>home2</span>
            </div>
            <div className={css.iconWrapper}>
                <Icon iconName={'office'} />
                <span>office</span>
            </div>
            <div className={css.iconWrapper}>
                <Icon iconName={'newspaper'} />
                <span>newspaper</span>
            </div>
            <div className={css.iconWrapper}>
                <Icon iconName={'IE'} />
                <span>IE</span>
            </div>
            <div className={css.iconWrapper}>
                <Icon iconName={'opera'} />
                <span>opera</span>
            </div>
            <div className={css.iconWrapper}>
                <Icon iconName={'eyedropper'} />
                <span>eyedropper</span>
            </div>
            <div className={css.iconWrapper}>
                <Icon iconName={'blog'} />
                <span>blog</span>
            </div>
            <div className={css.iconWrapper}>
                <Icon iconName={'chrome'} />
                <span>chrome</span>
            </div>
        </div>
    );
});