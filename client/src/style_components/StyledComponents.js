

import Button from "./Button"
import CardContainer from "./CardContainer"
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
        </div>
    )
    

}

export default StyledComponents