import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface HeaderProps {
    title: string,
    icons: React.FC[],
    info: React.FC
}
const Header: React.FC<HeaderProps> = ({ title , icons, info: Info}) => {
    return (
        <div>
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <img src='https://firebasestorage.googleapis.com/v0/b/ofek-leaders.appspot.com/o/ofekIcon.svg?alt=media' alt='icon' style={{ height: '50px', width: 'auto' }}></img>

                    {icons.map((icon)=>{
                        const Icon = icon;
                        return <Icon />
                    })}

                    <Info/>
                   
                   
                    <Typography variant="h6">
                        {title}

                    </Typography>
                    
                   
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header;