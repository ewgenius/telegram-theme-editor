import './App.scss';
import * as React from 'react';
import { Component, Props } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TelegramTheme, PropertyPayload, ThemeKey } from '../../lib/TelegramTheme';
import { setPropertyAction } from '../../actions/theme';
import { State } from '../../reducers';
import ThemeEditor from '../ThemeEditor/ThemeEditor';
import ThemePreview from '../ThemePreview/ThemePreview';

interface AppOwnProps extends Props<App> { }

interface AppStateProps {
  theme: TelegramTheme;
}

interface AppDispatchProps {
  setProperty: (payload: PropertyPayload) => void;
}

interface AppProps extends AppOwnProps, AppStateProps, AppDispatchProps { }

const mapStateToProps = (state: State, ownProps?): AppStateProps => ({
  theme: state.theme,
  ...ownProps
});
const mapDispatchToProps = (dispatch: Dispatch<any>): AppDispatchProps => ({
  setProperty: (payload: PropertyPayload) => {
    dispatch(setPropertyAction(payload));
  }
});
class App extends Component<AppProps, {}> {
  setProperty = (key: ThemeKey, value: string, ref?: boolean) => {
    this.props.setProperty({
      key,
      value,
      ref
    });
  }

  render() {
    const {theme} = this.props;
    return <div className='App'>
      <ThemeEditor theme={theme} onChangeProperty={this.setProperty} />
      <ThemePreview theme={theme} />
    </div>;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
