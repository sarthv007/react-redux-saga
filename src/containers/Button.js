import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
let Button=({getPosts})=>(
   <button onClick={getPosts}>Press to see posts</button>
)
const mapDispatchToProps = {
     getPosts: getPosts,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;