import React, { FC, useState, ReactElement } from "react";

import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ExpandMore from "@material-ui/icons/ExpandMore";
import Add from "@material-ui/icons/AddBoxOutlined";
import Delete from "@material-ui/icons/Delete";

/*Imports form Lui Common Components */
import LuiDropdown from "./LuiDropdown";

/*Imports from lodash */
import remove from "lodash/remove";

interface DropDownKeys {
	displayName: string;
	key: number;
}
interface EventSubscriptionType {
	sourceCard: DropDownKeys;
	event: DropDownKeys;
	action: DropDownKeys;
}
interface CallToActionType {
	index: number;
	actionType: DropDownKeys;
	label: DropDownKeys;
	event: DropDownKeys;
	position: DropDownKeys;
}
interface InfluencingFactorType {
	primaryText: DropDownKeys;
	secondaryText: DropDownKeys;
	title: DropDownKeys;
	icon: DropDownKeys;
}

const cards: Array<DropDownKeys> = [
	{ displayName: "Tabular Grid", key: 1 },
	{ displayName: "List", key: 2 },
	{ displayName: "Carousal with Cards", key: 2 },
	{ displayName: "Form", key: 2 },
];
const endPoints: Array<DropDownKeys> = [
	{ displayName: "Demand Exceptions", key: 1 },
	{ displayName: "ESP Exceptions", key: 2 },
	{ displayName: "ACT Exceptions", key: 2 },
	{ displayName: "Recommendations", key: 2 },
	{ displayName: "Resolutions", key: 2 },
];
const sourceCards: Array<DropDownKeys> = [
	{ displayName: "Exception List", key: 1 },
	{ displayName: "Constraints", key: 2 },
	{ displayName: "Playbook", key: 2 },
	{ displayName: "Event Summary", key: 2 },
	{ displayName: "Recommendations", key: 2 },
];
const events: Array<DropDownKeys> = [
	{ displayName: "Select A Row", key: 1 },
	{ displayName: "Investigate", key: 2 },
	{ displayName: "Click On Save", key: 2 },
	{ displayName: "Click On Cancel", key: 2 },
	{ displayName: "Simulate", key: 2 },
];
const actions: Array<DropDownKeys> = [
	{ displayName: "Refresh the Data", key: 1 },
	{ displayName: "Launch A New Canvas", key: 2 },
	{ displayName: "Execute A Process", key: 2 },
	{ displayName: "Hide the Card", key: 2 },
	{ displayName: "Show the Card", key: 2 },
	{ displayName: "Show the Card as a Modal window", key: 2 },
];
const actionTypes: Array<DropDownKeys> = [
	{ displayName: "Button", key: 1 },
	{ displayName: "Grouped Button", key: 1 },
	{ displayName: "Menu Button", key: 1 },
	{ displayName: "Icon", key: 2 },
	{ displayName: "Grouped Icon", key: 2 },
	{ displayName: "Hyperlink / Text", key: 2 },
];
const actionPosition: Array<DropDownKeys> = [
	{ displayName: "Header", key: 1 },
	{ displayName: "Footer", key: 1 },
	{ displayName: "Inline", key: 1 },
];
const influencingFactors: Array<DropDownKeys> = [
	{ displayName: "timeframe", key: 1 },
	{ displayName: "icon", key: 1 },
	{ displayName: "name", key: 1 },
	{ displayName: "value", key: 1 },
];

const CardProperties: FC<any> = (props) => {
	const emptyDropDownKey: DropDownKeys = { displayName: "", key: 0 };
	const emptyIF: InfluencingFactorType = {
		primaryText: emptyDropDownKey,
		secondaryText: emptyDropDownKey,
		title: emptyDropDownKey,
		icon: emptyDropDownKey,
	};
	let [selectedCard, setSelectedCard] = useState<DropDownKeys>(
		emptyDropDownKey,
	);
	let [selectedEndPoint, setSelectedEndPoint] = useState<DropDownKeys>(
		emptyDropDownKey,
	);
	let [selectedEventSubscription, setSelectedEventSubscription] = useState<
		Array<EventSubscriptionType>
	>([]);
	let [selectedCallToActions, setSelectedCallToActions] = useState<
		Array<CallToActionType>
	>([]);
	let [selectedInfluencingFactor, setSelectedInfluencingFactor] = useState<
		InfluencingFactorType
	>(emptyIF);
	/*Add New Subscription */
	const addNewSubscription = () => {
		const existingSubscriptions: Array<EventSubscriptionType> = [
			...selectedEventSubscription,
		];
		const newSubscription: EventSubscriptionType = {
			sourceCard: emptyDropDownKey,
			event: emptyDropDownKey,
			action: emptyDropDownKey,
		};
		existingSubscriptions.push(newSubscription);
		setSelectedEventSubscription(existingSubscriptions);
	};
	/*Remove A Subscription */
	const removeSubscription = (eventIndex: number) => {
		const existingSubscriptions: Array<EventSubscriptionType> = [
			...selectedEventSubscription,
		];
		remove(
			existingSubscriptions,
			(value: EventSubscriptionType, index: number) => index === eventIndex,
		);
		setSelectedEventSubscription(existingSubscriptions);
	};
	/*Render Subscriptions Subscription */
	const renderEventSubscriptions = () => {
		const row: Array<ReactElement> = [];
		selectedEventSubscription.forEach(
			(eventSubscription: EventSubscriptionType, index: number) => {
				row.push(
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<LuiDropdown
								itemData={sourceCards}
								itemKey='key'
								itemDisplayName='displayName'
								inputLabel='Source Card'
								selectedItem={eventSubscription.sourceCard}
								width={160}
								maxHeight={320}
								onSelectionChange={(event) =>
									setSourceCard(index, event.target.value)
								}
							/>
						</Grid>
						<Grid item xs={3}>
							<LuiDropdown
								itemData={events}
								itemKey='key'
								itemDisplayName='displayName'
								inputLabel='Event'
								selectedItem={eventSubscription.event}
								width={120}
								maxHeight={320}
								onSelectionChange={(event) =>
									setEvent(index, event.target.value)
								}
							/>
						</Grid>
						<Grid item xs={4}>
							<LuiDropdown
								itemData={actions}
								itemKey='key'
								itemDisplayName='displayName'
								inputLabel='Action'
								selectedItem={eventSubscription.action}
								width={160}
								maxHeight={320}
								onSelectionChange={(event) =>
									setAction(index, event.target.value)
								}
							/>
						</Grid>
						<Grid item xs={1}>
							<IconButton size='small' edge='end'>
								<Delete
									onClick={() => {
										removeSubscription(index);
									}}
								/>
							</IconButton>
						</Grid>
					</Grid>,
				);
			},
		);
		return row;
	};
	const setSourceCard = (index: number, value: DropDownKeys) => {
		const existingSubscriptions: Array<EventSubscriptionType> = [
			...selectedEventSubscription,
		];
		const currentSubscription: EventSubscriptionType =
			existingSubscriptions[index];
		currentSubscription.sourceCard = value;
		setSelectedEventSubscription(existingSubscriptions);
	};
	const setEvent = (index: number, value: DropDownKeys) => {
		const existingSubscriptions: Array<EventSubscriptionType> = [
			...selectedEventSubscription,
		];
		const currentSubscription: EventSubscriptionType =
			existingSubscriptions[index];
		currentSubscription.event = value;
		setSelectedEventSubscription(existingSubscriptions);
	};
	const setAction = (index: number, value: DropDownKeys) => {
		const existingSubscriptions: Array<EventSubscriptionType> = [
			...selectedEventSubscription,
		];
		const currentSubscription: EventSubscriptionType =
			existingSubscriptions[index];
		currentSubscription.action = value;
		setSelectedEventSubscription(existingSubscriptions);
	};
	const addNewCallToAction = () => {
		const existingCallToActions: Array<CallToActionType> = [
			...selectedCallToActions,
		];
		const newCallToAction: CallToActionType = {
			index: existingCallToActions.length,
			actionType: emptyDropDownKey,
			label: emptyDropDownKey,
			event: emptyDropDownKey,
			position: emptyDropDownKey,
		};
		existingCallToActions.push(newCallToAction);
		setSelectedCallToActions(existingCallToActions);
	};
	const removeCallToAction = (callToActionIndex: number) => {
		let existingCallToActions: Array<CallToActionType> = [
			...selectedCallToActions,
		];
		console.error(existingCallToActions, callToActionIndex);
		remove(
			existingCallToActions,
			(value: CallToActionType) => value.index === callToActionIndex,
		);
		setSelectedCallToActions(existingCallToActions);
	};

	const setActionType = (index: number, value: DropDownKeys) => {
		const existingCallToActions = [...selectedCallToActions];
		const currentCallToAction = existingCallToActions[index];
		currentCallToAction.actionType = value;
		setSelectedCallToActions(existingCallToActions);
	};

	const setActionLabel = (index: number, value: string) => {
		const existingCallToActions = [...selectedCallToActions];
		const currentCallToAction = existingCallToActions[index];
		currentCallToAction.label = { displayName: value, key: 0 };
		setSelectedCallToActions(existingCallToActions);
	};

	const setActionPosition = (index: number, value: DropDownKeys) => {
		const existingCallToActions = [...selectedCallToActions];
		const currentCallToAction = existingCallToActions[index];
		currentCallToAction.position = value;
		setSelectedCallToActions(existingCallToActions);
	};

	const setIF = (property: string, value: DropDownKeys) => {
		let existingInfluencingFactor: InfluencingFactorType = {
			...selectedInfluencingFactor,
		};
		existingInfluencingFactor = {
			...existingInfluencingFactor,
			[property]: value,
		};
		setSelectedInfluencingFactor(existingInfluencingFactor);
	};

	const renderCAllToActions = () => {
		const row: Array<ReactElement> = [];
		selectedCallToActions.forEach(
			(callToAction: CallToActionType, cti: number) => {
				row.push(
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<LuiDropdown
								itemData={actionTypes}
								itemKey='key'
								itemDisplayName='displayName'
								inputLabel='Display Type'
								selectedItem={callToAction.actionType}
								width={160}
								maxHeight={320}
								onSelectionChange={(event) =>
									setActionType(cti, event.target.value)
								}
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								inputProps={{
									"aria-label": "Title",
								}}
								id='standard'
								fullWidth
								defaultValue={callToAction.label.displayName}
								label='Label'
								onChange={(event) => setActionLabel(cti, event.target.value)}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item xs={4}>
							<LuiDropdown
								itemData={actionPosition}
								itemKey='key'
								itemDisplayName='displayName'
								inputLabel='Position'
								selectedItem={callToAction.position}
								width={160}
								maxHeight={320}
								onSelectionChange={(event) =>
									setActionPosition(cti, event.target.value)
								}
							/>
						</Grid>
						<Grid item xs={1}>
							<IconButton size='small' edge='end'>
								<Delete
									onClick={() => {
										removeCallToAction(callToAction.index);
									}}
								/>
							</IconButton>
						</Grid>
					</Grid>,
				);
			},
		);
		return row;
	};

	return (
		<ExpansionPanel elevation={0} expanded={true}>
			<ExpansionPanelSummary
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<Typography>Card Properties</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Grid container>
					<Grid item xs={12}>
						<ExpansionPanel elevation={0} expanded>
							<ExpansionPanelSummary
								aria-controls='panel1a-content'
								id='panel1a-header'
							>
								<Typography variant='caption'>Basic Card Properties</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Box>
											<TextField
												inputProps={{
													"aria-label": "Title",
												}}
												id='standard'
												fullWidth
												defaultValue=''
												label='Title'
												InputLabelProps={{
													shrink: true,
												}}
											/>
										</Box>
									</Grid>
									<Grid item xs={12}>
										<Box>
											<LuiDropdown
												itemData={cards}
												itemKey='key'
												itemDisplayName='displayName'
												inputLabel='Card Type'
												selectedItem={selectedCard}
												width={560}
												maxHeight={320}
												onSelectionChange={(event) => {
													console.log(event.target.value);
													setSelectedCard(event.target.value);
												}}
											/>
										</Box>
									</Grid>
								</Grid>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</Grid>
					{/* The below panel is only shown when you select a card Type*/}
					{selectedCard.key !== 0 && (
						<Grid item xs={12}>
							<ExpansionPanel elevation={0} expanded>
								<ExpansionPanelSummary
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography variant='caption'>
										{`${selectedCard.displayName || ""} Properties`}
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Grid container spacing={2}>
										<Grid item xs={12}>
											<Box>
												<LuiDropdown
													itemData={endPoints}
													itemKey='key'
													itemDisplayName='displayName'
													inputLabel='Data End Points / Source of Data'
													selectedItem={selectedEndPoint}
													width={560}
													maxHeight={320}
													onSelectionChange={(event) =>
														setSelectedEndPoint(event.target.value)
													}
												/>
											</Box>
										</Grid>
										<Grid item xs={12}>
											<Box>
												<LuiDropdown
													itemData={influencingFactors}
													itemKey='key'
													itemDisplayName='displayName'
													inputLabel='Title'
													selectedItem={selectedInfluencingFactor.title}
													width={560}
													maxHeight={320}
													onSelectionChange={(event) => {
														setIF("title", event.target.value);
													}}
												/>
											</Box>
										</Grid>
										<Grid item xs={12}>
											<Box>
												<LuiDropdown
													itemData={influencingFactors}
													itemKey='key'
													itemDisplayName='displayName'
													inputLabel='Primary Text'
													selectedItem={selectedInfluencingFactor.primaryText}
													width={560}
													maxHeight={320}
													onSelectionChange={(event) => {
														setIF("primaryText", event.target.value);
													}}
												/>
											</Box>
										</Grid>
										<Grid item xs={12}>
											<Box>
												<LuiDropdown
													itemData={influencingFactors}
													itemKey='key'
													itemDisplayName='displayName'
													inputLabel='Secondary Text'
													selectedItem={selectedInfluencingFactor.secondaryText}
													width={560}
													maxHeight={320}
													onSelectionChange={(event) => {
														setIF("secondaryText", event.target.value);
													}}
												/>
											</Box>
										</Grid>
										<Grid item xs={12}>
											<Box>
												<LuiDropdown
													itemData={influencingFactors}
													itemKey='key'
													itemDisplayName='displayName'
													inputLabel='Icon'
													selectedItem={selectedInfluencingFactor.icon}
													width={560}
													maxHeight={320}
													onSelectionChange={(event) => {
														setIF("icon", event.target.value);
													}}
												/>
											</Box>
										</Grid>
									</Grid>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</Grid>
					)}
					<Grid item xs={12}>
						<ExpansionPanel elevation={0}>
							<ExpansionPanelSummary
								expandIcon={<ExpandMore />}
								aria-controls='panel1a-content'
								id='panel1a-header'
							>
								<Typography variant='caption'>
									Advanced Card Properties
								</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Switch
													onChange={() => {}}
													name='checkedB'
													color='primary'
												/>
											}
											label='Add Card To Library'
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Switch
													onChange={() => {}}
													name='checkedB'
													color='primary'
												/>
											}
											label='Hide'
										/>
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel
											control={
												<Switch
													onChange={() => {}}
													name='checkedB'
													color='primary'
												/>
											}
											label='Freeze'
										/>
									</Grid>
									<Grid item xs={12} spacing={2}>
										<Divider />
									</Grid>
									{/* Event Subscription Properties*/}
									<Grid item xs={12} spacing={2}>
										<Grid container spacing={2}>
											<Grid item xs={11}>
												<Typography variant='caption'>
													Event Subscription
												</Typography>
											</Grid>
											<Grid item xs={1}>
												<IconButton size='small' edge='end'>
													<Add
														onClick={() => {
															addNewSubscription();
														}}
													/>
												</IconButton>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12}>
										{renderEventSubscriptions()}
									</Grid>
									<Grid item xs={12} spacing={2}>
										<Divider />
									</Grid>
									{/* Add Call To Actions Subscription Properties*/}
									<Grid item xs={12} spacing={2}>
										<Grid container spacing={2}>
											<Grid item xs={11}>
												<Typography variant='caption'>
													Call To Action
												</Typography>
											</Grid>
											<Grid item xs={1}>
												<IconButton size='small' edge='end'>
													<Add
														onClick={() => {
															addNewCallToAction();
														}}
													/>
												</IconButton>
											</Grid>
										</Grid>
									</Grid>

									<Grid item xs={12}>
										{renderCAllToActions()}
									</Grid>
								</Grid>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</Grid>
				</Grid>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

export default CardProperties;
