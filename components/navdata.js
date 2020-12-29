import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';


export const NavData = [
    {
        title: 'Top',
        Icon: <HomeIcon />,
        link: "#top"
    },
    {
        title: 'About',
        Icon: <PersonIcon/>,
        link: "#about"
    },
    {
        title: 'Skills',
        Icon: <CodeIcon/>,
        link: "#skills"
    },
    {
        title: 'Projects',
        Icon: <WebIcon/>,
        link: "#projects"
    },
    {
        title: 'Contact',
        Icon: <MailIcon/>,
        link: "#contact"
    },
]