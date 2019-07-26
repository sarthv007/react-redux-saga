import React,{ useEffect } from 'react';
import { connect } from 'react-redux'
import {getPosts } from '../actions';
const Posts = (props) =>{

useEffect(() => {
	props.getPosts()	
},[]);

const postStyle={
	border: '8px solid cyan',
	padding:'10px',
	margin:'20px',
	color:'pink',
	background:'green'
}



return (
		<React.Fragment>
		<h4 style={{ minHeight: '110px',fontSize:'60px',borderBottom:'5px solid green',textAlign:'center',color:'lime' }}>This is a redux-saga example </h4>
		{
			props.posts ? props.posts.map( post =>(
			<div style={postStyle}>{post.title} 
			<p>{post.body}</p>
			</div> )) : null
		}
		</React.Fragment>
	)
}

const mapStateToProps = (state) => ({
	posts: state.posts,
})

const mapDispatchToProps = {
     getPosts: getPosts,
};

export default connect(mapStateToProps,mapDispatchToProps)(Posts);