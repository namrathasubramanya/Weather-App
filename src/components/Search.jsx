import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    fontColor: '#ffffff',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  input: {
     color: 'white'
  },
  textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
  },
  cssLabel: {
  	'fontSize': '15px',
  	'color': green[50],
    '&$cssFocused': {
      color: green[50],
    },
  },
  cssFocused: {
  	'fontSize': '15px',
  	'color': green[50],
    '&$cssFocused': {
      color: green[50],
    },
  },
  cssUnderline: {
  	'borderBottomColor': '#ffffff',
  	'&:before': {
      borderBottomColor: green[50],
    },
    '&:hover': {
      borderBottomColor: green[50],
    },
    '&:after': {
      borderBottomColor: green[50],
    },
  },
  cssOutlinedInput: {
  	'borderColor': '#ffffff',
    '&$cssFocused $notchedOutline': {
      borderColor: green[50],
    },
  },
  notchedOutline: {
  	'borderColor': '#ffffff',
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 1,
    },
  },
  overrides: {
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ffffff',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#ffffff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const StyledButton = withStyles({
  root: {
    background: 'white',
    borderRadius: 3,
    border: 0,
    color: '#1abc9c',
    height: 40,
    fontSize: '14px',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    left: '40%',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const theme = createMuiTheme({
  palette: {
    primary: {main: green[50]},
  },
  typography: { useNextVariants: true },
});

class Search extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
         city: ''
     }
    // this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        this.props.getWeather(this.state.city);
    }
}

// handleSubmit(e) {
//   e.preventDefault();
//   this.props.getWeather(this.state.city);
// }

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="searchForm">
            <form onSubmit={this.props.getWeather}>
              <MuiThemeProvider theme={theme}>
                  <TextField fullWidth color="primary"
                    className={classes.margin}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    label="Enter the City Name:"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    value = {this.state.city}
                    onChange={e => this.setState({city: e.target.value})}
                  />
                </MuiThemeProvider>
                <StyledButton type="submit" variant="contained">Get Weather</StyledButton>
              </form>
          </div>
      </div>
    );
  }

}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
