import React, { FC } from "react";

/* Imports from MUI Theme */
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider";

/*Imports form Lui Common Components */
import { LightTheme, LuiBackground } from "@jda/lui-common-component-library";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
interface Comment {
	user: string;
	message: string;
	date?: string;
}

const comments: Array<Comment> = [
	{
		user: "Chetan Rane",
		message: "The Pie chart looks off the data is not correct",
	},
	{
		user: "Sangeeta Kulkarni",
		message: "The Bar chart data and the Pie chart data is not in sync",
	},
	{ user: "Sunny Mody", message: "We want Live dat here" },
];
const iframeData: Array<Record<string, string>> = [
	{
		src:
			"https://app.powerbi.com/reportEmbed?reportId=8fef127c-a96a-4b7c-9aec-3a300410c3ab&groupId=faf0f26f-e186-4867-8f7e-d233eb72a016&autoAuth=true&ctid=2ac36cee-0617-4ac0-bebf-e1ce5dfab86c&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",
	},
	{
		src:
			"https://app.powerbi.com/reportEmbed?reportId=cf398d2a-ab26-45ea-a69e-6ff73359ce0e&groupId=faf0f26f-e186-4867-8f7e-d233eb72a016&autoAuth=true&ctid=2ac36cee-0617-4ac0-bebf-e1ce5dfab86c&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",
	},
	{
		src:
			"https://app.powerbi.com/reportEmbed?reportId=5e8c573a-aae9-461d-9e77-f9c3a82ee21b&groupId=faf0f26f-e186-4867-8f7e-d233eb72a016&autoAuth=true&ctid=2ac36cee-0617-4ac0-bebf-e1ce5dfab86c&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",
	},
];

const useStyles = makeStyles({
	root: {
		width: "100%",
		maxWidth: 360,
	},
	commentHeight: {
		width: "650px",
		height: "418px",
	},
});

const getComments = (classes: Record<string, string>) => {
	const commentList: any = [];
	comments.forEach((comment: Comment) => {
		commentList.push(
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<AccountCircle />
					</Avatar>
				</ListItemAvatar>
				<ListItemText>
					<Box>
						<Typography variant='h6'>{comment.user}</Typography>
					</Box>
					<Box>
						<Typography variant='body1'>{comment.message}</Typography>
					</Box>
				</ListItemText>
			</ListItem>,
		);
	});
	return <List className={classes.root}>{commentList}</List>;
};

const getFrames = (classes: Record<string, string>) => {
	const frames: any = [];
	iframeData.forEach((iData, index) => {
		frames.push(
			<Box my={10} p={2} key={index}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<iframe
							width='100%'
							height='541.25'
							src={iData.src}
							frameBorder={0}
							allowFullScreen={true}
						></iframe>
					</Grid>
					<Grid item xs={4}>
						<ExpansionPanel elevation={0} expanded={true}>
							<ExpansionPanelSummary>
								<Typography variant='h4'>Comments</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails className={classes.commentHeight}>
								{getComments(classes)}
							</ExpansionPanelDetails>
							<ExpansionPanelActions>
								<TextField
									inputProps={{
										"aria-label": "Title",
									}}
									id='standard'
									fullWidth
									label='Chetan Rane (CW)'
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</ExpansionPanelActions>
						</ExpansionPanel>
					</Grid>
				</Grid>
			</Box>,
		);
	});
	return frames;
};

const IframeComponent: FC = () => {
	const classes: Record<string, string> = useStyles();

	return (
		<div className='App'>
			<ThemeProvider theme={LightTheme}>
				<LuiBackground>
						{getFrames(classes)}
				</LuiBackground>
			</ThemeProvider>
		</div>
	);
};

export default IframeComponent;
