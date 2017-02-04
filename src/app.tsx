import './styles/index.scss';
import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { reducer } from './reducers';
import App from './components/App/App';

injectTapEventPlugin();

const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

const theme = getMuiTheme({
  appBar: {
    height: 54,
    textColor: '#a8a8a8'
  }
}, lightBaseTheme);

render(<Provider store={store}>
  <MuiThemeProvider muiTheme={theme}>
    <App />
  </MuiThemeProvider>
</Provider>, document.getElementById('root'));
