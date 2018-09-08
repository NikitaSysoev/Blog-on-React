import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {load, loadPrev, loadNext} from 'actions/comments';

import CommentsList from '../components/CommentsList';
import Pagination from '../components/Pagination';

class CommentsListContainer extends Component {
    componentDidMount() {
        const {loadComments} = this.props;
        loadComments();
    }


    render() {
        const {comments, loading, loadNext, loadPrev, page} = this.props;
        return (
            comments && !loading ?
                <Fragment>
                    <CommentsList comments={comments}/>
                    <Pagination page={page} loadNext={loadNext} loadPrev={loadPrev}/>
                </Fragment>
                :
                'Loading...'
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        comments: state.comments.entities,
        loading: state.comments.loading,
        page: state.comments.page,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        loadComments: () => dispatch(load()),
        loadNext: () => dispatch(loadNext()),
        loadPrev: () => dispatch(loadPrev()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);