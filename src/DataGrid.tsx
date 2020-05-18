import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
		},
	},
}));
interface fieldOptions {
	title: string;
}
const data: Array<fieldOptions> = [
	{ title: "PRODUCT" },
	{ title: "DEMANDQTY" },
	{ title: "FILLRATE" },
	{ title: "PLANQTY" },
	{ title: "DEMANDMARGINIMPACT" },
	{ title: "DEMANDREVENUEIMPACT" },
	{ title: "PROFITABILITY" },
	{ title: "MARGIN" },
	{ title: "REVENUE" },
	{ title: "SHORTQTY" },
	{ title: "LATEPLANQTY" },
	{ title: "RECORDID" },
];
export default function DataGrid() {
	const classes = useStyles();

	return (
		<div>
			<div>
				<Typography variant='h6'>Data Grid Properties</Typography>
			</div>
			<Grid container>
				<Grid item xs={1}>
					{" "}
					Columns :
				</Grid>
				<Grid item xs={8}>
					<Autocomplete
						multiple
						id='tags-outlined'
						options={data}
						getOptionLabel={(option) => option.title}
						filterSelectedOptions = {true}
						renderInput={(params) => (
							<TextField
								{...params}
								variant='outlined'
								placeholder='Data Fields'
							/>
						)}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
