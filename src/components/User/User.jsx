import PropTypes from 'prop-types';

import css from './User.module.css';

export default function User({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.user}>
      <div className={css.info}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@ {tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.number,
};
