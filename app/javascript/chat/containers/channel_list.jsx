import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions';

// export function(state = null, action) {
//   switch (action.type) {
//     case FETCH_MESSAGES: {
//       return action.payload.messages;
//     }
//     case MESSAGE_POSTED: {
//       const copiedState = state.slice(0);
//       copiedState.push(action.payload);
//       return copiedState;
//     }
//     case CHANNEL_SELECTED: {
//       return []; // Channel has changed. Clearing view.
//     }
//     default:
//       return state;
//   }
// }
/* eslint no-bitwise:off */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions/index';
import { Link } from 'react-router-dom';


class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  // handleClick = (channel) => {
  //   this.props.selectChannel(channel);
  // }

  renderChannel = (channel) => {
    return (
      <Link to={`/channels/${channel}`} key={channel.id}>
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? 'active' : null}
        role="presentation"
      >
        #{channel}
      </li>
      </Link>
    );
  }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
    // selectedChannel: state.selectedChannel not needed anymore as it's being taken from the route
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
