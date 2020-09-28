import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import DrawerContent from '../DrawerContent/DrawerContent'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Adopter} from '../../graphql/queries/adopters'

interface MenuProps {
    onItemSelected: (adopter: Adopter)=>void
}

const drawerWidth = '25%';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            width: drawerWidth,
        },
    }),
);

const Menu: React.FC<MenuProps> = ({onItemSelected}) => {
    const classes = useStyles();

    return (
        <Drawer
            classes={{
                paper: classes.drawerPaper,
            }}
            variant="permanent"
            anchor='right'
            open
        >
            <DrawerContent onItemSelected={onItemSelected}  ></DrawerContent>
        </Drawer>
    )
}

export default Menu