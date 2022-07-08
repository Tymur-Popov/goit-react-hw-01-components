import User from './User/User';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionsHistory from './Transactions/Transactions';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div
      style={{
        //   height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        paddingBottom: '50px',
      }}
    >
      <User
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics tittle="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
