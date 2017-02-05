import './ThemePreview.scss';
import * as React from 'react';
import { Component, Props } from 'react';
import { TelegramTheme } from '../../lib/TelegramTheme';
import TelegramApp from './components/TelegramApp/TelegramApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiTheme } from 'material-ui/styles';

interface ThemePreviewProps extends Props<ThemePreview> {
  theme: TelegramTheme;
}

export default class ThemePreview extends Component<ThemePreviewProps, {
  muiTheme: MuiTheme | null
}> {
  state = {
    muiTheme: null
  };

  componentDidMount() {
    this.setMuiTheme(this.props.theme);
  }

  componentWillReceiveProps(next) {
    this.setMuiTheme(next.theme);
  }

  setMuiTheme(theme: TelegramTheme) {
    this.setState({
      muiTheme: getMuiTheme({
        appBar: {
          height: 54,
          textColor: '#a8a8a8'
        }
      }, lightBaseTheme)
    });
  }

  render() {
    const {theme} = this.props;
    const {muiTheme} = this.state;

    return <div className='theme-preview'>
      {
        theme && muiTheme && <MuiThemeProvider muiTheme={muiTheme}>
          <TelegramApp theme={theme} />
        </MuiThemeProvider>
      }
    </div>;
  }
}