import React, {useState, useEffect, useReducer, useContext} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import {Button, Card, Comment, Header, Image, Divider} from 'semantic-ui-react'
import CardContainer from '../style_components/CardContainer'
import CommentEdit from './CommentEdit'
import ReactDOM from "react-dom";
import CheerLaughCounter from './CheerLaughCounter'
import { AuthContext } from '../providers/AuthProvider'
import '../style_components/basicstyle.css'
import InfiniteScroll from 'react-infinite-scroller'
import moment from 'moment';
import CommentMediaEdit from './CommentMediaEdit'
import CommentTextEdit from './CommentTextEdit'

const CommentsStreak = () => {
  const [comments, setComments] = useState('')
  const [hideEditFields, setHideEditFields] = useState(false)
  const {id} = useParams()
  const [hideDeleteButt, setHideDeleteButt] = useState(false)
  const {user} = useContext(AuthContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const [modalEditMediaShow, setEditMediaModalShow] = useState(false)
  const [modalEditTextShow, setEditTextShow] = useState(false)

  useEffect(()=>{
    getComments()
    },[])

  const getComments = async (page = 1) => {
    try{let res =  await axios.get(`/api/streak/${id}?page=${page}`)
      setComments(res.data.comments)
      setCurrentPage(page)
      setTotalPages(res.data.total_pages)
      console.log('res.data in comments streak', res.data)
      
    } catch(err) {
      console.log('get comments id for commentsstreak in getcomments', id)
      alert(err)
    }
  }
  // /api/comments/:id
  const deleteComment = async(id) => {
    try{
      let res = await axios.delete(`/api/comments/${id}`)
      window.location.reload()
    }catch(err){
      alert('error in deleteComment')
    }
  }
    const loadMore = async() => {
      let pagex = currentPage + 1
      if (
        comments.length > 0
      )
      {
        let res = await axios.get(`/api/streak/${id}?page=${pagex}`)
        setComments(res.data.comments)
        setCurrentPage(pagex)
      }
    }  

    
    
    
   


    const renderFullComments = () => {
      return (
        <Comment.Group>
          {comments &&
            comments.map((comment) => (
              <Comment>
                <Comment.Avatar src={comment.image} />
                <Comment.Content>
                  <Comment.Author>{comment.nickname}</Comment.Author>
                  <Comment.Metadata>
                    <div>{moment(comment.created_at).fromNow()}</div>
                  </Comment.Metadata>
                  
                  <Comment.Text>
                    
                    {comment.info}
                  </Comment.Text>
                  <img className="comments-media-carousel" src={comment.media} />
                  <div>
                    <CheerLaughCounter
                      defaultCommentID={comment.comment_id}
                      initCheer={comment.cheer}
                      initLaugh={comment.laugh}
                    />
                  </div>
                  <br />
                  {user.id === comment.user_id && (
                    <Button onClick={() => deleteComment(comment.comment_id)}>
                      Delete
                    </Button>
                  )}
                  {user.id === comment.user_id && (
                    <>
                    <Button variant="primary" onClick={() => setEditMediaModalShow(true)} >
                     Edit Comment Media
                    </Button>

                    <CommentMediaEdit
                    defaultInfo={comment.info}
                    defaultMedia={comment.media}
                    defaultCheer={comment.cheer}
                    defaultLaugh={comment.laugh}
                    defaultCommentID={comment.comment_id}
                    show={modalEditMediaShow}
                    onHide={() => setEditMediaModalShow(false)}
                  />
                  </>
                  )}
                  {user.id === comment.user_id && (
                    <>
                  
                    <Button variant="primary" onClick={() => setEditTextShow(true)} >
                     Edit Comment Text
                    </Button>

                    <CommentTextEdit
                    defaultInfo={comment.info}
                    defaultMedia={comment.media}
                    defaultCheer={comment.cheer}
                    defaultLaugh={comment.laugh}
                    defaultCommentID={comment.comment_id}
                    show={modalEditTextShow}
                    onHide={() => setEditTextShow(false)}
                  />
                  </>
                  )}
                  {/* {hideEditFields && (
                    <CommentEdit
                      defaultInfo={comment.info}
                      defaultMedia={comment.media}
                      defaultCheer={comment.cheer}
                      defaultLaugh={comment.laugh}
                      defaultCommentID={comment.comment_id}
                    />
                  )} */}
                  {console.log('comment.info garbage', comment.info)}
                  <Divider/>
                </Comment.Content>
              </Comment> 
            ))}
        </Comment.Group>
      );
    };
  

    return (
      <>
        <div>
          <InfiniteScroll
            pageStart={currentPage}
            loadMore={() => loadMore()}
            hasMore={currentPage >= totalPages ? false : true}
            // loader={
            //   <div className="loader" key={0}>
            //     Loading ...
            //   </div>
            // }
          >
           
            {renderFullComments()}
          </InfiniteScroll>
        </div>
      </>
    );
  };


export default CommentsStreak