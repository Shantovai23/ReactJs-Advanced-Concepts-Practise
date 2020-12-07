import React,{Component} from 'react'
import { UserConsumer } from './UserContext'

class ComThree extends Component{

    render(){
        return(<>
            <UserConsumer>
                {(value)=>{
                    return(<>
                        <h1>Hello {value}</h1>
                    </>)
                }}
            </UserConsumer>
        </>)
    }
}

export default ComThree