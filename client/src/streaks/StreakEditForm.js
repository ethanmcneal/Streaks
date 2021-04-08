import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Card, Dropdown, Form, Input } from "semantic-ui-react"

const StreakEditForm = () => {

    // const [name, setName] = useState(null)
    // const [description, setDescription] = useState(null)
    // const [reward, setReward] = useState(null)
    // const [punishment, setPunishment] = useState(null)
    // const [category, setCategory] = useState(null)

    let [streak, setStreak] = useState({name:null, description:null, reward:null, punishment:null, category:null})

    const {id} = useParams()

    useEffect(() => {
        getStreak()
        console.log(id)
    },[])
    const getStreak = async() => {
        try {
            let res = await axios.get(`/api/streaks/${id}`)
            setStreak(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

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
              let res = await axios.put(`/api/streaks/${id}`, streak)
              console.log(res)
          } catch (error) {
              console.log(error)
          }

      }

      const handleDropDown = (e, data) => {
          setStreak({...streak, ['category']: data.value})
          console.log(data.value)
      }

      const handleChange = (e) => {
        setStreak({...streak, [e.target.name]: e.target.value})
      }
    return(
        <div style={{display: 'flex', justifyContent:'center'}}>
        {streak && <Form onSubmit={handleSubmit}>
            <p> Name </p>
            <Input 
            placeholder='name'
            name='name'
            defaultValue={streak.name}
            value={streak.name}
            onChange={handleChange}/>
            <p> description </p>
            <Input 
            placeholder='description'
            name='description'
            defaultValue={streak.description}
            value={streak.description}
            onChange={handleChange}/>
            <p> reward </p>
            <Input 
            placeholder='reward'
            name='reward'
            defaultValue={streak.reward}
            value={streak.reward}
            onChange={handleChange}/>            
            <p> punishment </p>
            <Input 
            placeholder='punishment'
            name='punishment'
            defaultValue={streak.punishment}
            value={streak.punishment}
            onChange={handleChange}/>
            <p> category </p>
            <Dropdown placeholder='category' fluid selection options={options} onChange={handleDropDown} />
            <Button type='submit'>Add</Button>
        </Form> }
        </div>
    )
}

export default StreakEditForm


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
