

import AxiosCallCard from "./AxiosCallCard"
import Button from "./Button"
import CardContainer from "./CardContainer"
import FormattedMessage from "./FormattedMessage"
import Input from "./Input"
import RegisterForm from "./RegisterForm"
const StyledComponents = () =>{
    return(
        <div>
        <Button>Button</Button>
        <Input 
        placeholder='styled input'/>

        <CardContainer>
           <h1>Card </h1>
           
           <p>card body: odsjflasdjfoasjdfoisjdfljsdfljasdlfjsaldjfasldfjsdljflsfjl</p>
           <Input placeholder='styled input in da card'/>
           <Button>Button in da card</Button>
        </CardContainer>

        <RegisterForm />

        {/* this part was borrowed from james, I just wanted to have the format and plan on changing it in the future when I use this project */}

        <CardContainer>
            <h1>Messages</h1>
        <FormattedMessage type={'alert'}>Alert</FormattedMessage>
        <FormattedMessage type={'warn'}>warn</FormattedMessage>
        <FormattedMessage>Notify</FormattedMessage>
        
        </CardContainer>

        <AxiosCallCard />
        </div>
    )
    

}

export default StyledComponents