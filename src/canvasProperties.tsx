import React, { FC, useState } from "react";


import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ExpandMore from "@material-ui/icons/ExpandMore";
/*Imports form Lui Common Components */
import LuiDropdown from "./LuiDropdown";

const access: Array<Record<string, string | number>> = [
	{ displayName: "Public", key: 1 },
	{ displayName: "Private to System", key: 2 },
];

const CanvasProperties: FC<any> = (props) => {
	let [selectedAccess, setSelectedAccess] = useState("");

	return (
		<ExpansionPanel elevation={0} expanded={true}>
			<ExpansionPanelSummary
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<Typography>Canvas Properties</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Box>
							<TextField
								inputProps={{
									"aria-label": "Standard Hello World",
								}}
								id='standard'
								fullWidth
								defaultValue=''
								label='Canvas Name'
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box>
							<LuiDropdown
								itemData={access}
								itemKey='key'
								itemDisplayName='displayName'
								inputLabel='Access'
								selectedItem={selectedAccess}
								width={585}
								maxHeight={320}
								onSelectionChange={(event) =>
									setSelectedAccess(event.target.value)
								}
							/>
						</Box>
					</Grid>
				</Grid>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

export default CanvasProperties;
