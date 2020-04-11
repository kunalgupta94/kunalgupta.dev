import React from 'react'
import withStyles from 'react-jss';
import { getTheme } from '../../state/Theme/theme.selectors';
import { toggleTheme } from '../../state/Theme/theme.Actions';
import { connect } from 'react-redux';

const styles = theme => ({
    switcherButton: {
        // margin: '10%',
        display: 'inline-block',
        cursor: 'pointer',
        alignSelf: 'center'
    },
    buttonImage: {
        width: 65,
        height: 65,
    },
    '@media (max-width: 1024px)': {
        buttonImage: {
            width: 45,
            height: 45
        }
    },
    '@media (max-width: 768px)': {
        buttonImage: {
            width: 35,
            height: 35
        }
    },
    // '@media (max-width: 375px)': {
    //     buttonImage: {
    //         width: 20,
    //     }
    // }
})

const ThemeSwitcher = ({ classes, toggle, currentTheme }) => {
    const getButton = () => {
        return currentTheme === 'dark' ? <NightButton /> : <DayButton />
    }

    const NightButton = () => (
        <svg className={classes.buttonImage} width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.7443 53.978C63.0522 55.4743 59.0158 56.2983 54.787 56.2983C37.1947 56.2983 22.9334 42.037 22.9334 24.4448C22.9334 14.625 27.3768 5.84309 34.3627 -6.10352e-05C15.6933 1.06066 0.881104 16.536 0.881104 35.4709C0.881104 55.0931 16.788 70.9999 36.4101 70.9999C49.2519 70.9999 60.5025 64.1868 66.7443 53.978Z" fill="#F9F9F9" />
        </svg>

    )

    const DayButton = () => (
        <svg className={classes.buttonImage} width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35.5" cy="35.5" r="35.5" fill="#FFC670" />
        </svg>
    )

    return (
        <div className={classes.switcherButton} onClick={() => currentTheme === 'light' ? toggle('dark') : toggle('light')}>
            {getButton()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentTheme: getTheme(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggle: (theme) => dispatch(toggleTheme(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ThemeSwitcher));