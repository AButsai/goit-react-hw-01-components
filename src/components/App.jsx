import PropTypes from 'prop-types';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from './file/user.json';
import data from './file/data.json';

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

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
