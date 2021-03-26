import React from 'react';
import './App.css';
import TopBar from './TopBar/TopBar';
import UserInput from './UserInput/UserInput';
import FriendList from './FriendList/FriendList';
import Post from './Post/Post';

const App = () => {
  const [posts, setPosts] = React.useState([
    {
      user: 'Kevin Dimadapa',
      post:
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Maya Angelou",
    },
    {
      user: 'Beatrice Kasingkasing',
      post:
        'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end." -Aristotle',
    },
  ]);

  const [friends, setFriends] = React.useState([
    {
      name: 'Neil Mapayapa',
    },
    {
      name: 'Kathryn Bagongligo',
    },
    {
      name: 'Justin Alapaap',
    },
  ]);

  const handleUserNameChange = (event) => {
    const firstPost = { ...posts[0] };
    firstPost.user = event.target.value;
    setPosts([firstPost, posts[1]]);
  }

  const handlePostTextChange = (event) => {
    const firstPost = { ...posts[0] };
    firstPost.post = event.target.value;

    setPosts([firstPost, posts[1]]);
  }

  const handleTopFriendChange = (event) => {
    setFriends([
      {
        name: event.target.value,
      },
      friends[1],
      friends[2],
    ]);
  }

  return (
    <div className="App">
      <TopBar />
      <UserInput
        label="User:"
        currentName={posts[0].user}
        changed={handleUserNameChange}
      />
      <UserInput
        label="What's on your Mind?:"
        currentName={posts[0].post}
        changed={handlePostTextChange} />
      <Post user={posts[0].user} post={posts[0].post} />
      <Post user={posts[1].user} post={posts[1].post} />
      <UserInput
        label="Top Friend:"
        changed={handleTopFriendChange} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
