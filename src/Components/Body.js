import React from 'react'
import withStyles from 'react-jss'
import Header from './Header/Header';
import { connect } from 'react-redux';
import { toggleTheme } from '../state/Theme/theme.Actions';

// import profilePic from '../assets/IMG_0322.JPG';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.backgroundColor,
  },
  profileImage: {
    borderRadius: '50%',
    width: '10vw',
    height: '10vw',
    'background-size': 'cover',
  },
  bodyContainer: {
    padding: '30px 15%',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  mainText: {
    alignSelf: 'center',
    width: '50vw',
    fontFamily: 'Roboto Mono',
    fontSize: '1.8rem',
    color: theme.palette.mainText.color,
    margin: 'auto',
  },
  socialIcons: {
    width: 80,
    height: 80,
    margin: '40px'
  },
  svgPath: {
    fill: theme.palette.logoText.color
  },
  socialContainer: {
    textAlign: 'center'
  }
})

const Body = ({ classes, toggle }) => {
  if (window.localStorage.getItem('theme')) {
    toggle(window.localStorage.getItem('theme'))
  }
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.bodyContainer}>
        {/* <div className={classes.profileImage} style={{ backgroundImage: profilePic }} ></div> */}
        <p className={classes.mainText}>I develop ReactJS applications. Also sometimes nodejs, Python apps, Microservices, shell scripting and some more.</p>
      </div>
      <div className={classes.socialContainer}>
        <a href="https://www.linkedin.com/in/kunalgupta26/" rel="noopener noreferrer" target="_blank"><svg className={classes.socialIcons} width="415" height="415" viewBox="0 0 415 415" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={classes.svgPath} d="M328.542 0H86.4583C38.716 0 0 38.716 0 86.4583V328.542C0 376.284 38.716 415 86.4583 415H328.542C376.301 415 415 376.284 415 328.542V86.4583C415 38.716 376.301 0 328.542 0ZM138.333 328.542H86.4583V138.333H138.333V328.542ZM112.396 116.407C95.6921 116.407 82.1354 102.747 82.1354 85.905C82.1354 69.0629 95.6921 55.4025 112.396 55.4025C129.1 55.4025 142.656 69.0629 142.656 85.905C142.656 102.747 129.117 116.407 112.396 116.407ZM345.833 328.542H293.958V231.639C293.958 173.401 224.792 177.81 224.792 231.639V328.542H172.917V138.333H224.792V168.853C248.931 124.137 345.833 120.834 345.833 211.667V328.542Z" fill="black" />
        </svg></a>
        <a href="https://github.com/kunalgupta94" rel="noopener noreferrer" target="_blank">
          <svg className={classes.socialIcons} width="415" height="415" viewBox="0 0 415 415" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={classes.svgPath} d="M207.5 0C92.9254 0 0 92.9081 0 207.5C0 299.18 59.4487 376.958 141.913 404.4C152.27 406.32 155.625 399.887 155.625 394.423V355.793C97.9054 368.347 85.8877 331.308 85.8877 331.308C76.4465 307.325 62.8379 300.944 62.8379 300.944C44.0073 288.062 64.2731 288.339 64.2731 288.339C85.1096 289.791 96.0725 309.728 96.0725 309.728C114.575 341.441 144.61 332.277 156.455 326.968C158.305 313.567 163.683 304.402 169.631 299.232C123.549 293.958 75.0977 276.165 75.0977 196.675C75.0977 174.006 83.2075 155.504 96.4702 140.979C94.326 135.74 87.2192 114.626 98.4933 86.0606C98.4933 86.0606 115.923 80.4927 155.573 107.329C172.121 102.73 189.862 100.43 207.5 100.344C225.137 100.43 242.896 102.73 259.479 107.329C299.094 80.4927 316.489 86.0606 316.489 86.0606C327.781 114.644 320.674 135.757 318.53 140.979C331.844 155.504 339.885 174.023 339.885 196.675C339.885 276.373 291.347 293.924 245.144 299.059C252.579 305.492 259.375 318.115 259.375 337.481V394.423C259.375 399.939 262.695 406.423 273.226 404.383C355.62 376.906 415 299.146 415 207.5C415 92.9081 322.092 0 207.5 0Z" fill="black" />
          </svg>
        </a>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggle: (theme) => dispatch(toggleTheme(theme))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Body));