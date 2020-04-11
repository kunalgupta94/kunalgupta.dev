import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import withStyles from 'react-jss';

const styles = (theme) => ({
    logoText: {
        color: theme.palette.logoText.color,
        fontFamily: 'Righteous',
        fontWeight: '400',
        fontSize: '4rem',
        margin: '0',
        display: 'inline-block',
    },
    '@media (min-width: 1920px)': {
        logoText: {
          margin: '0'
        }
      },
    header: {
        padding: '80px 9%',
        display: 'flex',
        justifyContent: 'space-between',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
    }
})

const Header = ({ classes }) => {
    return (
        <div className={classes.header}>
            <a href="https://www.kunalgupta.dev/"><h1 className={classes.logoText}>kunalgupta.dev</h1></a>
            <ThemeSwitcher />
        </div>
    )
}

export default withStyles(styles)(Header); 