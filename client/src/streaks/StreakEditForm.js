import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import {Button, Form, Table} from 'react-bootstrap'
import { Container } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider"
import DatePicker from 'react-datepicker'
import moment from 'moment'
import '../style_components/basicstyle.css';
import "react-datepicker/dist/react-datepicker.css"


const StreakEditForm = () => {
    
    const [validated, setValidated] = useState(false);
    const history = useHistory()
    const {id} = useParams()
    const {user} = useContext(AuthContext)
    let [streak, setStreak] = useState({name:null, description:null, reward:null, punishment:null, category:null, timeline:null, open:true, owner: user.id})

    useEffect(() => {
            getStreak()
           
        },[])

    const getStreak = async() => {
        try {
            let res = await axios.get(`/api/streaks/${id}`)
            setStreak(res.data)
            
        } catch (error) {
            console.log(error)
        }}

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
        if(streak.name && streak.description && streak.reward && streak.punishment && streak.timeline){
            try {
                let res = await axios.put(`/api/streaks/${id}`, streak)
               
                setValidated(true) 
                history.push(`/streaks/${id}`)
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("in handle Submit")
            setValidated(false)
        }}

    const handleDropDown = (data) => {
        setStreak({...streak, ['category']: data})
        
        }

    const handleChange = (e) => {
        setStreak({...streak, [e.target.name]: e.target.value})
        
        if(e.target.value.length >= 2){
            setValidated(true)
        }else{
            setValidated(false)
        }}

    const handleDateChange = (e) => {
        setStreak({...streak, timeline: e})
        }

    return(
        <div>
        
        <div style={{ margin: '3em 7em 3em'}}>
        <h1 className='new-streak-title'>Edit Streak</h1>
            <div >
             <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <br/>
            <Form.Label> Category </Form.Label>
            <Form.Control as='select' placeholder='category' selection onChange={(e)=> handleDropDown(e.target.value)} style={{width: '250px'}}>
                <option>{streak.category}</option>
                <option>Sports</option>
                <option>Health</option>
                <option>Habit</option>
                <option>Intellect</option>
                <option>Art</option>
                <option>Game</option>
                <option>Physical Feat</option>
                <option>Cuisine</option>
            </Form.Control>
            <br/>


            <Form.Label> Streak Name </Form.Label>
            <Form.Control required style={{width: '500px'}}
                minlength="2"
                placeholder='e.g. Workout Daily'
                defaultValue={streak.name}
                name='name'
                value={streak.name}
                onChange={handleChange}/>
                <br/>
           

            <Form.Label> Description </Form.Label>
            <Form.Control required style={{width: '500px'}}
                minlength="2"
                placeholder='e.g. A pact to work out daily'
                name='description'
                value={streak.description}
                defaultValue={streak.description}
                onChange={handleChange}/>
                <br/>
             
            
            <Form.Label> Reward </Form.Label>
                <Form.Control required style={{width: '500px'}}
                minlength="2"
                placeholder='e.g. A Steak Dinner'
                name='reward'
                defaultValue={streak.reward}
                value={streak.reward}
                onChange={handleChange}/>
                <br/>

            <Form.Label> Punishment </Form.Label>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Form.Control required style={{width: '500px'}}
                minlength="2"
                placeholder='e.g. All losers must pay for the winners steak dinner'
                name='punishment'
                defaultValue={streak.punishment}
                value={streak.punishment}
                onChange={handleChange}/>  
                <br/>

            <Button className='button-orange' disabled={!validated} type='submit' variant="warning" style={{width: '125px'}}>Update Streak</Button>
            </div>
            <br/>

            <Form.Label>Start Date</Form.Label>

            <br />
            <DatePicker
                selected={new Date(streak.timeline)}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp" 
                filterDate = {(date) => {
                    return moment() < date;
                  }}/>
                  
        </Form>
        <br/>
        
        </Container>
        
        </div>
        
       

        </div>
        
        </div>
        
    )
}

export default StreakEditForm