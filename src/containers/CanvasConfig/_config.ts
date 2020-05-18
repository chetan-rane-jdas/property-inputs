import {CanvasConfigProps, PropertyGroupProps, PropertyProps} from "./_types";
import { TextField } from "@material-ui/core";
// export interface PropertyProps {
//     propertyID: string;
//     propertyLabel: string;
//     uiElementType: string;
//     placeholder?: string;
//     helperText?: string;
//     multiline?: boolean;
//     multiple?: boolean;
//     onChange?: Function;
//     required?: Function;
//     validationHook?: Function;
//     derivesFrom?: string;
//     defaultValue?: string;
//     dataEnum?: Array<string | number>;
//     dataURL?: string;
//     properties?: Array<PropertyGroupProps>;
// }

// export interface PropertyGroupProps {
//     propertyGroupId: string;
//     propertyGroupLabel: string;
//     properties: Array<PropertyProps>;
//     sections?: Array<PropertyProps>;
// }
const canvasTitle: PropertyProps = {
    propertyID: "canvas-title",
    propertyLabel: "Title",
    uiElementType: "TextField"
}

const canvasGroup: PropertyGroupProps = {
    propertyGroupId: "canvas-group",
    propertyGroupLabel: "Canvas Properties",
    properties: [canvasTitle]
}

const config: CanvasConfigProps = {
    properties : [canvasGroup]
}