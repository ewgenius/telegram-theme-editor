import './App.css';
import * as React from 'react';
import { Component, Props } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TelegramTheme } from '../../lib/TelegramTheme';
import { State } from '../../reducers';

interface AppOwnProps extends Props<App> { }

interface AppStateProps {
  theme: TelegramTheme;
}

interface AppDispatchProps {
  setProperty: () => any;
}

interface AppProps extends AppOwnProps, AppStateProps, AppDispatchProps { }

const mapStateToProps = (state, ownProps?): AppStateProps => ({
  theme: state.theme,
  ...ownProps
});
const mapDispatchToProps = (dispatch: Dispatch<any>): AppDispatchProps => ({
  setProperty: () => { }
});
class App extends Component<AppProps, {}> {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
