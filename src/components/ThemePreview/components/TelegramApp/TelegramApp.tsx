import './TelegramApp.scss';
import * as React from 'react';
import { Component, CSSProperties } from 'react';
import { TelegramTheme, getPropertyValue } from '../../../../lib/TelegramTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class TelegramApp extends Component<{
  theme: TelegramTheme;
}, {
    welcome?: boolean;
    showSidebar?: boolean;
  }> {
  state = {
    welcome: false,
    showSidebar: false
  };

  toggleSidebar = () => this.setState({ showSidebar: !this.state.showSidebar });

  renderContent() {
    const {showSidebar, welcome} = this.state;
    const {theme} = this.props;
    const sidebarStyle: CSSProperties = {
      backgroundColor: getPropertyValue(theme, 'windowBg'),
      color: getPropertyValue(theme, 'windowFg')
    };
    if (welcome) {
      return <div className='telegram-welcome'>
        <header>header</header>
        <main>
          <section>
            <h2>Telegram Desktop</h2>
            <p>Weolcome to unofficial telegram UI emulator.</p>
          </section>
        </main>
      </div>;
    } else {
      return [<div
        key='1'
        className={`telegram-sidebar-container${showSidebar ? '' : ' hidden'}`}
        onClick={this.toggleSidebar}
      >
        <div key='2' className='telegram-sidebar'>
          <header>
          </header>
        </div>
      </div>,

      <div key='3' className='telegram-chats-list' style={{
        borderRight: '1px solid #e7e7e7'
      }}>
        <AppBar
          zDepth={0}
          onLeftIconButtonTouchTap={this.toggleSidebar}
          style={{
            backgroundColor: '#fff'
          }}
          titleStyle={{
            fontSize: 16
          }}
          title={<input className='search' placeholder='Search' style={{
            backgroundColor: '#f1f1f1'
          }} />} />

        <div className='scroller'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(chat => <ListItem
            key={chat}
            leftAvatar={<Avatar size={46} style={{ top: 8 }} src={`https://robohash.org/${chat}.png?bgset=any`} />}
            height={62}
            innerDivStyle={{ paddingTop: 13, paddingBottom: 13 }}
            primaryText='Firstname Lastname'
            secondaryText='last message' />)}
        </div>
      </div>,
      <div key='4' className='telegram-chat-view'>
        <AppBar
          showMenuIconButton={false}
          zDepth={0}
          style={{
            backgroundColor: '#fff',
            borderBottom: '1px solid #e7e7e7'
          }}
          title={<ListItem
            innerDivStyle={{
              padding: '9px 0'
            }}
            primaryText='Firstname Lastname'
            secondaryText='Firstname Lastname'
            rightIconButton={<IconButton style={{ marginTop: -9 }}>
              <SearchIcon color='#a8a8a8' />
            </IconButton>}
          />}
          iconElementRight={<IconButton>
            <MoreVertIcon />
          </IconButton>} />
      </div>
      ];
    }
  }

  render() {
    const {showSidebar} = this.state;
    const {theme} = this.props;
    const windowStyle: CSSProperties = {
      backgroundColor: getPropertyValue(theme, 'windowBg'),
      color: getPropertyValue(theme, 'windowFg')
    };
    return <div className='telegram-app' style={windowStyle}>
      {this.renderContent()}
    </div>;
  }
}