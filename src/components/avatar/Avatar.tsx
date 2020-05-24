import React from 'react';
import Props from './Avatar.props';
import Bounce from 'bounce.js';

import './Avatar.scss';

const Avatar = (props: Props) => {
  let avatarClass: string;

  const splatToLeft = new Bounce();

    splatToLeft
      .translate({
        from: { x: 300, y: 0 },
        to: { x: 0, y: 0 },
        easing: 'bounce',
        duration: 600,
        bounces: 4,
        stiffness: 4,
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 0.1, y: 2.3 },
        easing: 'sway',
        duration: 800,
        bounces: 4,
        stiffness: 2,
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 5, y: 1 },
        easing: 'sway',
        duration: 300,
        bounces: 4,
        stiffness: 3,
      });
  
      splatToLeft.define('splat-to-left');

  switch (props.size) {
    case 'small':
      avatarClass = 'gibbon-avatar-small';
      break;

    case 'medium':
      avatarClass = 'gibbon-avatar-medium';
      break;

    case 'large':
      avatarClass = 'gibbon-avatar-large';
      break

    default:
      avatarClass = 'gibbon-avatar-small';
      break;
  }

  return (
    <img
      alt={props.userName}
      className={`ui circular image ${avatarClass}`}
      src="https://semantic-ui.com/images/avatar/large/stevie.jpg"
    />
  );
}

export default Avatar;
