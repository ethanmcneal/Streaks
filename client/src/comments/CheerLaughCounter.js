import React, {useState, useEffect, useReducer} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import {Button, Header} from 'semantic-ui-react'
import CardContainer from '../style_components/CardContainer'

const CheerLaughCounter = (props) => {
  
  const {initCheer, initLaugh, defaultCommentID} = props
  const HANDLE_CHEER = Symbol("HANDLE_CHEER");
  const HANDLE_LAUGH = Symbol("HANDLE_LAUGH");
  const initialState = {
    cheers: initCheer,
    laughs: initLaugh,
    active: null
  };
  const [editCheerLaugh, setEditCheerLaugh] = useState({
    cheer: initCheer, 
    laugh: initLaugh,
    // comment_id: defaultCommentID
  })

  const handleCheerLaugh = async(e) => {
    console.log('handleCheerLaugh called')
    // e.preventDefault()
    try{
      console.log('def comm id', defaultCommentID)
      let res = await axios.put(`/api/comments/${defaultCommentID}`, editCheerLaugh)
      // history.push(`/streaks/${id}`)
      // window.location.reload()
    }catch(err){
      alert('err in handleEditComment')
    }
  }

  const handleChange = (e) => {
    console.log('handle change called')
    setEditCheerLaugh({...editCheerLaugh, [e.target.name]: e.target.value})
    console.log('cheere', editCheerLaugh.cheer)
    console.log('laugh', editCheerLaugh.laugh)
    handleCheerLaugh()
  }
 


  const reducer = (state, action) => {
    const { cheers, laughs, active } = state;
    switch (action.type) {
      case HANDLE_CHEER:
        return {
          ...state,
          cheers: state.cheers + 1,
          laughs: active === "laugh" ? laughs - 1 : laughs,
          active: "cheer",
          value: cheers + 1,
          name:'cheer'
        };
      case HANDLE_LAUGH:
        return {
          ...state,
          cheers: active === "cheer" ? cheers - 1 : cheers,
          active: "laugh",
          laughs: state.laughs + 1,
          value:'28888',
          name:'laugh'
        };
      default:
        return state;
    }
  };

  // onClick={handleCheerLaugh}
  // onChange={handleChange}
  // value={editCheerLaugh.cheer}
  // name='cheer'
  // value={editCheerLaugh.laugh}
  // name='laugh'

  const CheerOrLaugh = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { cheers, laughs, active } = state;
    return (
      <div style={{ display: "flex" }}>
        <button
          style={{
            color: active === "cheer" ? "green" : "black",
            marginRight: "10px"
          }}
          onClick={() =>
            active !== "cheer" ? dispatch({ type: HANDLE_CHEER }) : null,
            // handleCheerLaugh,
            handleChange
          }
        
        >

          <strong>cheers</strong>
          &nbsp;|&nbsp;
          {cheers}

        </button>
        <button
          style={{ color: active === "laugh" ? "red" : "black" }}
          onClick={() =>
            active !== "laugh" ? dispatch({ type: HANDLE_LAUGH }) : null,
            // handleCheerLaugh,
            handleChange
          }
          // onChange={handleChange}
          value={28888}
          name='laugh'
        >

          <strong>laughs</strong>
          &nbsp;|&nbsp;
          {laughs}
        </button>

      </div>
    );
  };

  return (
    <>
    <div><CheerOrLaugh /></div>
    </>
  )

  // 
}

export default CheerLaughCounter

// return (
//     <>
//     <div>
//       <form onSubmit={handleEditComment}>
//       <input value={editComment.info} label='Comment:' placeholder={editComment.info} name='info' onChange={handleChange}/>
//       {console.log('edit comment', editComment)}
//       <br/>
//       <input value={editComment.media} label='Other Media:' placeholder='media' name='media' onChange={handleChange}/>
//       <Button type='submit'>Edit Comment</Button>
//       </form>
//     </div>
//     </>
//   )

//todo maybe something here place in teh other function somehow? halp
  // 