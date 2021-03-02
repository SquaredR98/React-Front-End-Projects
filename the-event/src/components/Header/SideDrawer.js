import React from 'react'


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import HighlightIcon from '@material-ui/icons/Highlight';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles({
    root: {
        minWidth: "32px",
        paddingLeft: "16px"
    },
    text: {
        padding: "0 16px"
    },
});

const SideDrawer = (props) => {
    const classes = useStyles();
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
            style={{backgroundColor: "transparent"}}
        >

            <List component="nav">
                <ListItem button onClick={() => console.log('Menu One')}>
                    <ListItemIcon className={classes.root}>
                        <AccessTimeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Event Starts IN" className={classes.text} />
                </ListItem>
                <ListItem button onClick={() => console.log('Menu Two')}>
                    <ListItemIcon className={classes.root}>
                        <EventSeatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Venue NFO" className={classes.text} />
                </ListItem>
                <ListItem button onClick={() => console.log('Menu Three')}>
                    <ListItemIcon className={classes.root}>
                        <HighlightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Highlight" className={classes.text} />
                </ListItem>
                <ListItem button onClick={() => console.log('Menu Four')}>
                    <ListItemIcon className={classes.root}>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pricing" className={classes.text} />
                </ListItem>
                <ListItem button onClick={() => console.log('Menu Five')}>
                    <ListItemIcon className={classes.root}>
                        <RoomIcon />
                    </ListItemIcon>
                    <ListItemText primary="Location" className={classes.text} />
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer
