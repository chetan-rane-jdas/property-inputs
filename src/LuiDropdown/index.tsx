import { InputLabel, ListItemText, MenuItem, Select } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import { useStyles } from "./styles";
import { LuiDropdownProps } from "./types";

const LuiDropdown = (props: LuiDropdownProps): ReactElement<any> => {
  const [inputFocus, setInputFocus] = useState(false);

  const classes = useStyles();

  let verticalOrigin: unknown = "bottom";
  let horizontalOrigin: unknown = "left";

  const MenuProps = {
    PaperProps: {
      style: {
        width: props.width,
        maxHeight: props.maxHeight
      }
    },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: verticalOrigin as number,
      horizontal: horizontalOrigin as number
    }
  };

  const RenderMenuItems = () => {
    return props.itemData.map((dataItem: any) => (
      <MenuItem key={dataItem[props.itemKey]} value={dataItem}>
        <ListItemText primary={dataItem[props.itemDisplayName]} />
      </MenuItem>
    ));
  };

  const handleInputFocus = () => {
    setInputFocus(true);
  }

  const handleInputBlur = () => {
    setInputFocus(false);
  }

  const RenderSelectedValue = (selected: any) => {
    return <div className={classes.selected}>{selected[props.itemDisplayName]}</div>;
  };

  let labelId = "dropdown-label";
  let selectId = "dropdown-select";

  if (props.id && props.id !== "") {
    labelId = `label-${props.id}`;
    selectId = `select-${props.id}`;
  }

  return (
    <div style={{ width: props.width }}>
      <InputLabel
        shrink
        id={labelId}
        htmlFor={selectId}
        disabled={props.disabled}
        focused={inputFocus}
      >
        {props.inputLabel}
      </InputLabel>
      <Select
        id={selectId}
        labelId={labelId}
        disabled={props.disabled}
        value={props.selectedItem}
        defaultValue={props.defaultValue}
        fullWidth
        renderValue={(selected: any) => RenderSelectedValue(selected)}
        onChange={props.onSelectionChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        MenuProps={MenuProps}
      >
        {RenderMenuItems()}
      </Select>
    </div>
  );
};

LuiDropdown.defaultProps = {
  inputLabel: "",
  width: "200",
  maxHeight: "350",
  disable: false
};

export default LuiDropdown;
