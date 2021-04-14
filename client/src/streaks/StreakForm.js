import axios from "axios"
import { useContext, useState } from "react"
import {Button, Form} from 'react-bootstrap'
import { AuthContext } from "../providers/AuthProvider"

const StreakForm = () => {

    // const [name, setName] = useState(null)
    // const [description, setDescription] = useState(null)
    // const [reward, setReward] = useState(null)
    // const [punishment, setPunishment] = useState(null)
    // const [category, setCategory] = useState(null)

    const user = useContext(AuthContext)

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
      
      const handleSubmit = async() => {
          try {
              submitStreak()
              let res = await axios.post('/api/streaks/', streak)
              let res2 = await axios.post(`/api/user_streaks/`, {status: 'upcoming', user_id: user.id, streak_id: res.data.id} )
              
              console.log(res)
          } catch (error) {
              console.log(error)
          }

      }

      const handleDropDown = (data) => {
          setStreak({...streak, ['category']: data})
          console.log(data)
      }

      const handleChange = (e) => {
        setStreak({...streak, [e.target.name]: e.target.value})
      }
    return(
        <div style={{backgroundColor:'white', margin: '3em 300px 200px'}}>
            <div style={{padding: '20px 60px'}}>
        <Form onSubmit={handleSubmit}>
        <Form.Label> category </Form.Label>
            <Form.Control as='select' placeholder='category' fluid selection onChange={(e)=> handleDropDown(e.target.value)}>
            <option>Sports</option>
            <option>Health</option>
            </Form.Control>
            <Form.Label> Streak Name </Form.Label>
            <Form.Control 
            placeholder='name'
            name='name'
            value={streak.name}
            onChange={handleChange}/>
            <Form.Label> description </Form.Label>
            <Form.Control 
            placeholder='description'
            name='description'
            value={streak.description}
            onChange={handleChange}/>
            <Form.Label> reward </Form.Label>
            <Form.Control 
            placeholder='reward'
            name='reward'
            value={streak.reward}
            onChange={handleChange}/>            
            <Form.Label> punishment </Form.Label>
            <Form.Control 
            placeholder='punishment'
            name='punishment'
            value={streak.punishment}
            onChange={handleChange}/>
            
            
            <Button type='submit'>Add</Button>
        </Form>
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
