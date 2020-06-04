import React, { FC, useState, ReactElement } from "react";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ExpandMore from "@material-ui/icons/ExpandMore";
/*Imports form Lui Common Components */
import LuiDropdown from "../../LuiDropdown";
import {CanvasConfigProps, PropertyGroupProps, PropertyProps} from "./_types";

// Return the Property
const getProperty = (property: PropertyProps ): ReactElement => {
    return <Grid></Grid>
}

// Return a property group
const getPropertyGroup = (propertyGroup: PropertyGroupProps): Array<ReactElement> => {
    const propertyGroupElements: Array<ReactElement> = [];
    propertyGroup.properties.forEach((property: PropertyProps) => {
        propertyGroupElements.push(getProperty(property));
    })
    return propertyGroupElements;
}


const PropertyGroup: FC<PropertyGroupProps> = (props) => {
    const propertyElements: Array<ReactElement> = [];
    props.properties.forEach((property: PropertyProps) => {
        propertyElements.push(getProperty(property));
    })
    return <>{propertyElements}</>;                                   
}

export const CanvasConfig: FC<CanvasConfigProps> = (props) => {
    const configs: Array<ReactElement> = [];
    props.properties.forEach((propertyGroup: PropertyGroupProps) => {
        configs.push(<PropertyGroup {...propertyGroup}></PropertyGroup>)
    })
    return <>{configs}</>
}

export default CanvasConfig;