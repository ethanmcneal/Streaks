import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Form, Button, Divider, List } from 'semantic-ui-react';
import { getComments } from '../actions/Comments';
import InfiniteScroll from 'react-infinite-scroller';
import '../styles/pagination.css';
import Comment from './Comment'
class Comments extends Component {
  state = { comment: '', hasMore: true };
  componentDidMount() {
    this.props.dispatch(getComments());
  }

  getNextPage = (e) => {
    const { pagination, dispatch } = this.props;
    if(pagination.totalPages) {
      if(e <= pagination.totalPages)
        dispatch(getComments(e));
      else
        this.setState({ hasMore: false });
    }
  }
  displayComments = () => {
    return this.props.comments.map( comment => {
      return(
        // <Comment key={comment.id} comment={comment} />
        <p>{comment.info}</p>
      );
    });
  }
  render() {
    const { pagination } = this.props;
    return(
      <Segment basic>
        <Header as='h2' textAlign='center'>Comments</Header>
        
        <Divider horizontal>Comments</Divider>
          <div style={{ height: '700px', overflow: 'auto' }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.getNextPage}
              hasMore={this.state.hasMore}
              loader={<div className="loader">Loading ...</div>}
              useWindow={false}
            >
              {this.displayComments()}
            </InfiniteScroll>
          </div>
      </Segment>
    );
  }
}
const mapStateToProps = (state) => {
  return { comments: state.comments.data, pagination: state.comments.pagination };
}
export default connect(mapStateToProps)(Comments);





