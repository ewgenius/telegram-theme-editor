import './TelegramApp.scss';
import * as React from 'react';
import { Component } from 'react';
import { TelegramTheme } from '../../../../lib/TelegramTheme';

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
        className={`telegram-sidebar-container${showSidebar ? '' : ' hidden'}`}
        onClick={this.toggleSidebar}
      >
        <div className='telegram-sidebar'>
          sidebar
        </div>
      </div>,
      <div className='telegram-chats-list'>
        <button onClick={this.toggleSidebar}></button>
      </div>,
      <div className='telegram-chat-view'>chats view</div>
      ];
    }
  }

  render() {
    const {showSidebar} = this.state;
    return <div className='telegram-app'>
      {this.renderContent()}
    </div>;
  }
}