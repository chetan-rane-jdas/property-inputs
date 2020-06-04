import React, { FC } from "react";

/* Imports from MUI Theme */
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// import Divider from "@material-ui/core/Divider";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";

const CommentsComponent = () => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar>
					<AccountCircle />
				</Avatar>
			</ListItemAvatar>
            <ListSubheader>
                <Box>
					<Typography variant='h6'>{comment.user}</Typography>
				</Box>
            </ListSubheader>
			<ListItemText>
				
				<Box>
					<Typography variant='body1'>{comment.message}</Typography>
				</Box>
			</ListItemText>
		</ListItem>
	);
};
