import React, { FC, useState } from "react";

/* Imports from MUI Theme */
import { ThemeProvider } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

/*Imports form Lui Common Components */
import { LightTheme } from "@jda/lui-common-component-library";
import CanvasProperties from "./canvasProperties";
import CardProperties from "./cardProperties";

const access: Array<Record<string, string | number>> = [
	{ displayName: "Public", key: 1 },
	{ displayName: "Private to System", key: 2 },
];

const PropertiesWindow: FC<any> = (props) => {
	return (
		<div className='App'>
			<header className='App-header'>
				<ThemeProvider theme={LightTheme}>
					<Paper elevation={0} square>
						<Box my={2} p={2} bgcolor='background.default'>
							{/* spacing={2} IS REQUIRED TO MATCH JDA DESIGNS */}
							<Grid container spacing={2}>
								<Grid item xs={4}>
									{/* PAPER AND CLASSNAME ARE PROVIDED FOR DEMO PURPOSES AND WOULD NOT GO INTO YOUR APP  */}

									<Paper>
										<Grid container spacing={4}>
											<Grid item xs={8}>
												<Box pl={2}>
													<Typography variant='h2' color='inherit'>
														Properties
													</Typography>
												</Box>
											</Grid>
											<Grid item xs={1} spacing={2}>
												<Box>
													<Button
														variant='contained'
														color='primary'
														disableElevation
														size='small'
													>
														Save
													</Button>
												</Box>
											</Grid>
											<Grid item xs={1} spacing={2}>
												<Box ml={2}>
													<Button
														variant='contained'
														color='secondary'
														disableElevation
														size='small'
													>
														Cancel
													</Button>
												</Box>
											</Grid>
										</Grid>
										<Grid container spacing={2}>
											<Grid item xs={12}>
												<Divider />
											</Grid>
										</Grid>
										<CanvasProperties />
										<CardProperties />
									</Paper>
								</Grid>
							</Grid>
						</Box>

					</Paper>
				</ThemeProvider>
			</header>
		</div>
	);
};

export default PropertiesWindow;
