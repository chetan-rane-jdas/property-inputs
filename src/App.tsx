import React from "react";
import DataGrid from "./DataGrid";
import RecursiveTable from "./recursivetable";
import PropertiesWindow from "./propertieswindow";
import IframeComponent from "./iframeComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles"

function createData(name:string, calories:number, fat:number, carbs:number, protein:number) {
  return { name, calories, fat, carbs, protein };
}
const useStyles = makeStyles({
	table: {
    width: "650px",
    height: "650px",
    overflow: "none"
	},
	
});

const rows = { cellData : [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
],
recData : {
  someData : [
    {
      additionalData : {
        sampleData : [
          {isThisRecursive : "Yes"}
        ]
      }
    }
  ]
}};

function App() {
  const classes = useStyles();
	return (
			<div className='App'>
				<Router>
        <Link to='/data-grid'>Data Grid</Link> | 
        <Link to='/recursive-table'>Recursive Table</Link> | 
        <Link to='/properties-window'>Properties Window</Link>| 
        <Link to='/iframe-component'>Iframe component</Link>
					
						<Switch>
							<Route path='/data-grid'>
								<DataGrid />
							</Route>
              <Route path='/recursive-table'>
								<RecursiveTable data={rows}/>
							</Route>
              <Route path='/properties-window'>
								<PropertiesWindow/>
							</Route>
              <Route path='/iframe-component'>
								<IframeComponent/>
							</Route>
						</Switch>
				</Router>
			</div>
	);
}

export default App;
