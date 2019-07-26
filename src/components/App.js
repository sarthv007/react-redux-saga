import React from 'react';
import Button from '../containers/Button';
import Posts from '../containers/Posts'
import Loading from '../containers/Loading'
let App = () => (
  <div>
     <Loading />
     <Posts />
  </div>
);
export default App;