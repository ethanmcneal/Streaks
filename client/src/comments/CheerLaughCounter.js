import React, {useReducer} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

const CheerLaughCounter = (props) => {
  let history = useHistory()
  const {initCheer, initLaugh, defaultCommentID} = props
  const HANDLE_CHEER = Symbol("HANDLE_CHEER");
  const HANDLE_LAUGH = Symbol("HANDLE_LAUGH");
  const {id} = useParams();
  const initialState = {
    cheers: initCheer,
    laughs: initLaugh,
    active: null
  };
  const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);


  const handleCheerLaugh = async(state) => {
    try{
      
      let res = await axios.put(`/api/comments/${defaultCommentID}`, {cheer: state.cheers, laugh: state.laughs})
    }catch(err){
      alert('err in handleEditComment')
    }
  }


  const reducer = (state, action) => {
    const { cheers, laughs, active } = state;
    switch (action.type) {
      case HANDLE_CHEER:
        handleCheerLaugh({...state,
          cheers: state.cheers + 1,
          laughs: active === "laugh" ? laughs - 1 : laughs,
          })
        return {
          ...state,
          cheers: state.cheers + 1,
          laughs: active === "laugh" ? laughs - 1 : laughs,
          active: "cheer",
          value: cheers + 1,
          name:'cheer'
        };
      case HANDLE_LAUGH:
        handleCheerLaugh({...state,
          cheers: active === "cheer" ? cheers - 1 : cheers,
          active: "laugh",
          laughs: state.laughs + 1
        })
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
        <button className='cheer-laugh'
          style={{
            color: active === "cheer" ? "green" : "black",
            marginRight: "10px"
          }}
          onClick={() =>
            active !== "cheer" ? dispatch({ type: HANDLE_CHEER }) : null
          }
        
        >

          <strong><Emoji symbol="🙌"/></strong>
          &nbsp;|&nbsp;
          {cheers}

        </button>
        <button className='cheer-laugh'
          style={{ color: active === "laugh" ? "red" : "black" }}
          onClick={() =>
            active !== "laugh" ? dispatch({ type: HANDLE_LAUGH }) : null
          }
          // onChange={handleChange}
          value={28888}
          name='laugh'
        >

          <strong><Emoji symbol="😆"/></strong>
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

}

export default CheerLaughCounter
