import React from 'react';
import './App.css';


const INITIAL_POSTS = [
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
];
const INITIAL_FRIENDS = [
  {
    name: 'Neil Mapayapa',
  },
  {
    name: 'Kathryn Bagongligo',
  },
  {
    name: 'Justin Alapaap',
  },
];

const App = () => {
 
  return (
    <div className="App">
      TODO: Add your code to this file

      <br />
      Start by creating a Post component to render the initial posts and 
      a Friend component to render the initial friends

      <br />

      Then you can add buttons and inputs to control the top friend and top post

    </div>
  );
}

export default App;
