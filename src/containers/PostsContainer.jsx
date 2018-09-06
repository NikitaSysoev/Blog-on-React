import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux';
import {load, loadNext} from 'actions/posts';

import PostsList from '../components/PostsList';

class PostsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const {loadPosts, page} = this.props;
        loadPosts(page);
    }

    render() {
        const {posts, loading, page, loadNext} = this.props;

        return (
            posts && !loading ? <div><PostsList posts={posts}/>
                <button onClick={loadNext}>ee</button>
            </div> : 'Loading...'
        );
    }
}

function mapToStateProps(state, props) {
    return {
        ...props,
        posts: state.posts.entities,
        loading: state.posts.loading,
        page: state.posts.page,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        loadPosts: () => load(dispatch),
        loadNext: () => dispatch(loadNext()),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(PostsContainer);