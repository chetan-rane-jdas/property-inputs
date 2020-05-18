import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	strongTable: {
		margin: "8px",
	},
	strongBorder: {
		border: "1px solid #CECECE",
		padding: "2px",
	},
	strongBorderAndBg: {
		border: "1px solid #CECECE",
		padding: "4px",
		backgroundColor: "#CECECE",
		width: "25px",
	},
});

interface tableData {
	data: Record<string, any>;
}
const getTableData = (data: any, classes: any) => {
	console.log(isObject(data), data);
	let rows: Array<any> = [];
	let cellValue: any = "";
	if (isObject(data)) {
		rows = [];

		console.log(data);
		for (let [index, value] of Object.entries(data)) {
			console.log(index, value);
			if (isObject(value) || isArray(value)) {
				cellValue = getTableData(value, classes);
			} else {
				cellValue = value;
			}
			rows.push(
				<TableRow>
					<TableCell className={classes.strongBorderAndBg}>{index}</TableCell>
					<TableCell className={classes.strongBorder}>{cellValue}</TableCell>
				</TableRow>,
			);
		}
	}
	return <Table className={classes.strongTable}>{rows}</Table>;
};

export default function RecursiveTable(props: tableData) {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			{getTableData(props.data, classes)}
		</TableContainer>
	);
}
