import './ThemePreview.scss';
import * as React from 'react';
import { Component, Props } from 'react';
import { TelegramTheme } from '../../lib/TelegramTheme';
import TelegramApp from './components/TelegramApp/TelegramApp';

interface ThemePreviewProps extends Props<ThemePreview> {
  theme: TelegramTheme;
}

export default class ThemePreview extends Component<ThemePreviewProps, {}> {
  componentDidMount() {

  }

  componentWillReceiveProps(next) {

  }

  render() {
    const {theme} = this.props;

    return <div className='theme-preview'>
      <TelegramApp theme={theme} />
    </div>;
  }
}