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

const CommentsStreak = () => {
  const [comments, setComments] = useState('')
  const [hideEditFields, setHideEditFields] = useState(false)
  const {id} = useParams()
  const [hideDeleteButt, setHideDeleteButt] = useState(false)
  const {user} = useContext(AuthContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  
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
                  {/* <img src={comment.image}/> */}
                  <Comment.Text>
                    
                    {comment.info}
                  </Comment.Text>
                  <img className="comments-media-carousel" src={comment.media} />
                  {/* <h1>cheers: {comment.cheer}</h1>
               <h1><laughs: {comment.laugh}</h1> */}
                  <div>
                    <CheerLaughCounter
                      defaultCommentID={comment.comment_id}
                      initCheer={comment.cheer}
                      initLaugh={comment.laugh}
                    />
                  </div>
                  {/* todo: make delete and edit only visible to curernt user for their comments */}
                  <br />
                  {user.id === comment.user_id && (
                    <Button onClick={() => deleteComment(comment.comment_id)}>
                      Delete
                    </Button>
                  )}
                  {user.id === comment.user_id && (
                    <Button
                      onClick={() => {
                        setHideEditFields(!hideEditFields);
                      }}
                    >
                      {hideEditFields ? "Cancel Edit" : "Edit"}
                    </Button>
                  )}
                  {hideEditFields && (
                    <CommentEdit
                      defaultInfo={comment.info}
                      defaultMedia={comment.media}
                      defaultCheer={comment.cheer}
                      defaultLaugh={comment.laugh}
                      defaultCommentID={comment.comment_id}
                    />
                  )}
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