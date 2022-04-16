import PropTypes from 'prop-types';

import Profile from './Profile/Profile';

import user from './file/user.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
