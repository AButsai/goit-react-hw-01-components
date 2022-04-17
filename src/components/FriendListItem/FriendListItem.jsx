import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, name, avatar }) => {
  const isActive = isOnline ? 'onLine' : 'offLine';

  return (
    <li className={s.item}>
      <span role="status" className={s[isActive]}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export { FriendListItem };
