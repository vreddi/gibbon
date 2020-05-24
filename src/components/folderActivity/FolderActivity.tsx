import React, { Component } from 'react';
import Props from './FolderActivity.props';
import State from './FolderActivity.state';

import './FolderActivity.scss';
import { Event } from './FolderActivity.types';

class FolderActivity extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      events: [
        {
          author: 'Ellie Caramina',
          type: 'addTag',
          link: 'https://www.youtube.com/watch?v=yFLOeJ4XBKQ',
          title: 'Manchester United',
          thumbnail: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/imp_1f47f.png',
          dateTimeStamp: '3 days ago'
        },
        {
          author: 'Ellie Caramina',
          type: 'addTag',
          link: 'https://www.youtube.com/watch?v=yFLOeJ4XBKQ',
          title: 'Sports',
          thumbnail: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/soccer-ball_26bd.png',
          dateTimeStamp: '3 days ago'
        },
        {
          author: 'Ellie Caramina',
          type: 'addVideo',
          link: 'https://www.youtube.com/watch?v=yFLOeJ4XBKQ',
          title: 'Manchester United - Striker\'s Glory',
          thumbnail: 'http://i3.ytimg.com/vi/yFLOeJ4XBKQ/maxresdefault.jpg',
          dateTimeStamp: '3 days ago'
        },
        {
          author: 'Ellie Caramina',
          type: 'createFolder',
          dateTimeStamp: '5 days ago'
        }
      ]
    }
  }

  getLoadingView(): JSX.Element {
    const placeholders: JSX.Element[] = [];

    for (let i: number= 0; i < 4; ++i) {
      placeholders.push(
        (
          <React.Fragment>
            <div className="paragraph">
              <div className="large line"></div>
              <div className="medium line"></div>
            </div>
  
            <div className="paragraph">
              <div className="large line"></div>
              <div className="short line"></div>
            </div>
          </React.Fragment>
        )
      )
    }

    return (
      <div className="ui placeholder gibbon-activity-loadingPlaceholder">
        {placeholders}
      </div>
    );
  }

  getFeed(): JSX.Element {
      return (
        <div className="ui feed">
          {this.state.events.map(event => this.getEvent(event))}
        </div>
      );
  }

  getEvent(event: Event): JSX.Element {
    switch (event.type) {
      case 'createFolder':
        return this.getCreateFolderEvent(event);

      case 'addVideo':
        return this.getAddVideoEvent(event);

      case 'addTag':
        return this.getAddTagEvent(event);

      default:
        return <React.Fragment />;
    }
  }

  getCreateFolderEvent(event: Event): JSX.Element {
    return (
      <div className="event">
        <div className="label">
          <img
            alt="Celebration"
            className="gibbon-feedLabelImage"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/party-popper_1f389.png" />
        </div>

        <div className="content">
          <div className="summary">
            <a href="/#" className="user">
              {event.author}
            </a> created a new folder.
            <div className="date">
              {event.dateTimeStamp}
            </div>
          </div>
        </div>
      </div>
    );
  }

  getAddVideoEvent(event: Event): JSX.Element {
    return (
      <div className="event">
        <div className="label">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/microsoft/209/clapping-hands-sign_1f44f.png" />
        </div>
        <div className="content">
          <div className="summary">
            <a>{event.author}</a> added a new <a target="_blank" rel="noopener noreferrer" href={event.link}>video</a>.
            <div className="date">
              {event.dateTimeStamp}
            </div>
          </div>
          <div className="extra images">
            <a target="_blank" rel="noopener noreferrer" href={event.link}><img src={event.thumbnail} /></a>
          </div>
        </div>
      </div>
    );
  }

  getAddTagEvent(event: Event): JSX.Element {
    return (
      <div className="event">
        <div className="label">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/thumbs-up-sign_1f44d.png" />
        </div>
        <div className="content">
          <div className="summary">
            <a>{event.author}</a> added a new <a target="_blank" rel="noopener noreferrer" href={event.link}>tag</a>.
            <div className="date">
              {event.dateTimeStamp}
            </div>
          </div>
          <div className="extra">
            <a className="ui image label">
              <img src={event.thumbnail} />
              {event.title}
            </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="gibbon-folderActivity">
        <div className="header">Recent activity</div>
        <div className="gibbon-folderActivity-content">
          {this.state.isLoading && this.getLoadingView()}
          {!this.state.isLoading && this.getFeed()}
        </div>
      </div>
    )
  }
}

export default FolderActivity;
