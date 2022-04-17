import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from './file/user.json';
import data from './file/data.json';
import friends from './file/friends.json';
import transactions from './file/transactions.json';

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

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
