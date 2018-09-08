import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import {load, loadNext, loadPrev} from 'actions/posts';

import PostsList from '../components/PostsList';
import Pagination from '../components/Pagination';

class PostsContainer extends PureComponent {
    componentDidMount() {
        const {loadPosts} = this.props;
        loadPosts();
    }

    render() {
        const {posts, loading, loadNext, loadPrev, page} = this.props;
        return (
            posts && !loading ?
                <div>
                    <PostsList posts={posts}/>
                    <Pagination page={page} loadPrev={loadPrev} loadNext={loadNext}/>
                </div>
                :
                'Loading...'
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
        loadPosts: () => dispatch(load()),
        loadNext:  () => dispatch(loadNext()),
        loadPrev:  ()=>dispatch(loadPrev()),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(PostsContainer);