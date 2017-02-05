import './ThemeEditor.scss';
import * as React from 'react';
import { Component, Props } from 'react';
import { TelegramTheme, getPropertyValue, ThemeKey } from '../../lib/TelegramTheme';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';

interface ThemeEditorProps extends Props<ThemeEditor> {
  theme: TelegramTheme;
  onChangeProperty: (key: ThemeKey, value: string, ref?: boolean) => any;
}

export default class ThemeEditor extends Component<ThemeEditorProps, {}> {
  componentDidMount() {

  }

  componentWillReceiveProps(next) {

  }

  render() {
    const {theme} = this.props;

    return <div className='theme-editor'>
      <AppBar
        showMenuIconButton={false}
        title='Theme settings' />
      <div className='scroller'>
        {
          Object.keys(theme).map((key: ThemeKey) => {
            const property = theme[key];
            const value = getPropertyValue(theme, key);
            return <ListItem
              key={key}
              primaryText={key}
              secondaryText={property.ref ? `${property.value} ${value}` : value}
              rightAvatar={<Avatar backgroundColor={value} />}
              onTouchTap={() => this.props.onChangeProperty(key, property.value, property.ref)} />;
          })
        }
      </div>
    </div>;
  }
}