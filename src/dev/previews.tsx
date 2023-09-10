import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import RadialChart from "@/components/RadialChart";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/RadialChart">
                <RadialChart/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;