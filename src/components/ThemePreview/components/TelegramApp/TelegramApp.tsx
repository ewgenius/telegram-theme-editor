import './TelegramApp.scss';
import * as React from 'react';
import { Component, CSSProperties } from 'react';
import { TelegramTheme, getPropertyValue } from '../../../../lib/TelegramTheme';

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
      <div key='3' className='telegram-chats-list'>
        <button onClick={this.toggleSidebar}></button>
      </div>,
      <div key='4' className='telegram-chat-view'>chats view</div>
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