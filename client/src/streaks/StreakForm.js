import axios from "axios"
import { useContext, useState } from "react"
import { useHistory } from 'react-router-dom'
import {Button, Form, Table} from 'react-bootstrap'
import { Container } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider"
import DatePicker from 'react-datepicker'
import '../style_components/basicstyle.css';
import "react-datepicker/dist/react-datepicker.css"

const StreakForm = () => {
    const [validated, setValidated] = useState(false);
    const history = useHistory()
    // const [name, setName] = useState(null)
    // const [description, setDescription] = useState(null)
    // const [reward, setReward] = useState(null)
    // const [punishment, setPunishment] = useState(null)
    // const [category, setCategory] = useState(null)

    const {user} = useContext(AuthContext)
    // const [startDate, setStartDate] = useState(null);

    let [streak, setStreak] = useState({name:null, description:null, reward:null, punishment:null, category:null, timeline:null})


    const options = [
        { key: 'Sport', text: 'Sport', value: 'Sport' },
        { key: 'Health', text: 'Health', value: 'Health' },
        { key: 'Habit', text: 'Habit', value: 'Habit' },
        { key: 'Intellect', text: 'Intellect', value: 'Intellect' },
        { key: 'Art', text: 'Art', value: 'Art' },
        { key: 'Game', text: 'Game', value: 'Game' },
        { key: 'Physical Feat', text: 'Physical Feat', value: 'Physical Feat' },
        { key: 'Cuisine', text: 'Cuisine', value: 'Cuisine' },
      ]
      
      const handleSubmit = async(e) => {
          e.preventDefault()
          if(streak.name && streak.description && streak.reward && streak.punishment){
          try {
              let res = await axios.post('/api/streaks/', streak)
              let res2 = await axios.post(`/api/user_streaks/`, {user_id: user.id, streak_id: res.data.id, status: 'upcoming'} )
              console.log(res)
              setValidated(true) 
              history.push(`/streaks`);  
          } catch (error) {
              console.log(error)
          }
        } else {
            alert("in handle Submit")
            setValidated(false)
            }
        }

      

      const handleDropDown = (data) => {
          setStreak({...streak, ['category']: data})
          console.log(data)
      }

      const handleChange = (e) => {
        setStreak({...streak, [e.target.name]: e.target.value})
        // console.log(e.target.value.length)
        console.log(streak.description)
        if(e.target.value.length >= 2){
            setValidated(true)
        }else{
            setValidated(false)
        }

      }

      const handleDateChange = (e) => {
        setStreak({...streak, timeline: e})
        // console.log(e)
      }
    return(
        <div>
        <h1 style={{marginLeft: '3em'}}>New Streak</h1>
        <div style={{ margin: '3em 7em 3em'}}>
            <div >
                <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Label> Category </Form.Label>
            <Form.Control as='select' placeholder='category' selection onChange={(e)=> handleDropDown(e.target.value)} style={{width: '250px'}}>
            <option>Select a Category</option>
            <option>Sports</option>
            <option>Health</option>
            <option>Habit</option>
            <option>Intellect</option>
            <option>Art</option>
            <option>Game</option>
            <option>Physical Feat</option>
            <option>Cuisine</option>
            </Form.Control>

            <Form.Label> Streak Name </Form.Label>
            <Form.Control required style={{width: '500px'}}
            minlength="2"
            placeholder='e.g. Workout Daily'
            name='name'
            value={streak.name}
            onChange={handleChange}/>

            <Form.Label> description </Form.Label>
            <Form.Control required style={{width: '500px'}}
            minlength="2"
            placeholder='e.g. A pact to work out daily'
            name='description'
            value={streak.description}
            onChange={handleChange}/>
             
            
            <Form.Label> reward </Form.Label>
                <Form.Control required style={{width: '500px'}}
                minlength="2"
                placeholder='e.g. A Steak Dinner'
                name='reward'
                value={streak.reward}
                onChange={handleChange}/>

            <Form.Label> punishment </Form.Label>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Form.Control required style={{width: '500px'}}
                minlength="2"
                placeholder='e.g. All losers must pay for the winners steak dinner'
                name='punishment'
                value={streak.punishment}
                onChange={handleChange}/>  

            <Button disabled={!validated} type='submit' variant="success" style={{width: '125px'}}>Publish Streak</Button>
            </div>

            <Form.Label>Start Date</Form.Label>
                <br />
                <DatePicker
                    selected={streak.timeline}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="Pp" />
                    <br />
            
            
        </Form>
        
        </Container>
        
        </div>
        
       

        </div>
        <h1 style={{margin: '3em 3em 0em'}}>Templates</h1>
        <div style={{ margin: '3em 7em 3em'}}>
            <Container>
            
            <Table bordered hover>
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Reward</th>
                        <th>Punishment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>No Coffee</td>
                        <td>See who can go the longest without coffee!</td>
                        <td>5$ from each loser</td>
                        <td>Pay the winner 5$</td>
                        </tr>
                        <tr>
                        <td>Annoying Ringtone</td>
                        <td>See who can go the longest with "kiss me thru the phone" by SouljaBoy as their Ringtone!</td>
                        <td>Pat on the back</td>
                        <td>You have to make a tik tok on Main Street in your town</td>
                        </tr>
                        <tr>
                        <td>Run everyday</td>
                        <td>See who can run a mile everyday with no rest days</td>
                        <td>Steak Dinner</td>
                        <td>Every loser pitches in to buy Steak Dinner</td>
                        </tr>
                        <tr>
                        <td>No Smoking!</td>
                        <td>Lets all quit Smoking together!</td>
                        <td>10+ more years with your friends and loved ones</td>
                        <td>You have to try again!</td>
                        </tr>
                    </tbody>
                    </Table>
                    </Container>
        </div>
        </div>
        
    )
}

export default StreakForm