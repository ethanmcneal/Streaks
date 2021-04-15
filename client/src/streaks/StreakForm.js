import axios from "axios"
import { useContext, useState } from "react"
import {Button, Form, Table} from 'react-bootstrap'
import { AuthContext } from "../providers/AuthProvider"

const StreakForm = () => {

    // const [name, setName] = useState(null)
    // const [description, setDescription] = useState(null)
    // const [reward, setReward] = useState(null)
    // const [punishment, setPunishment] = useState(null)
    // const [category, setCategory] = useState(null)

    const {user} = useContext(AuthContext)

    let [streak, setStreak] = useState({name:null, description:null, reward:null, punishment:null, category:null})


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
          try {
              let res = await axios.post('/api/streaks/', streak)
              let res2 = await axios.post(`/api/user_streaks/`, {user_id: user.id, streak_id: res.data.id, status: 'upcoming'} )
              console.log(res)
          } catch (error) {
              
              console.log(error)
          }
          }

        //   const handleSubmit = async() => {
        //       axios.post('/api/streaks/', streak).then(response => {
        //           debugger
        //           console.log(response)
        //           axios.post(`/api/user_streaks/`, {status: 'upcoming', user_id: user.id, streak_id: response.data.id} )}
        //       ).catch(error => {
        //           console.log(error)
        //       })
        //   }

      

      const handleDropDown = (data) => {
          setStreak({...streak, ['category']: data})
          console.log(data)
      }

      const handleChange = (e) => {
        setStreak({...streak, [e.target.name]: e.target.value})
      }
    return(
        <div>
        <h1 style={{marginLeft: '3em'}}>New Streak</h1>
        <div style={{backgroundColor:'white', margin: '3em 7em 3em'}}>
            <div style={{padding: '20px 60px'}}>
        <Form onSubmit={handleSubmit}>
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
            <Form.Control style={{width: '500px'}}
            placeholder='e.g. Workout Daily'
            name='name'
            value={streak.name}
            onChange={handleChange}/>
            <Form.Label> description </Form.Label>
            <Form.Control style={{width: '500px'}}
            placeholder='e.g. A pact to work out daily'
            name='description'
            value={streak.description}
            onChange={handleChange}/>
            <Form.Label> reward </Form.Label>
            <Form.Control style={{width: '500px'}}
            placeholder='e.g. A Steak Dinner'
            name='reward'
            value={streak.reward}
            onChange={handleChange}/> 
                     
            <Form.Label> punishment </Form.Label>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Form.Control style={{width: '500px'}}
            placeholder='e.g. All losers must pay for the winners steak dinner'
            name='punishment'
            value={streak.punishment}
            onChange={handleChange}/>
            
            
            <Button type='submit' variant="success" style={{width: '125px'}}>Publish Streak</Button>
            </div>
        </Form>
        </div>
       

        </div>
        <h1 style={{margin: '3em 3em 0em'}}>Templates</h1>
        <div style={{backgroundColor:'white', margin: '3em 7em 3em'}}>
            
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
        </div>
        </div>
        
    )
}

export default StreakForm


// create_table "streaks", force: :cascade do |t|
//     t.string "name"
//     t.string "description"
//     t.datetime "timeline"
//     t.string "reward"
//     t.string "punishment"
//     t.string "category"
//     t.boolean "open"
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at", precision: 6, null: false
//   end
