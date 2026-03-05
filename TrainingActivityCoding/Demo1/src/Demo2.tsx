import React from 'react';
import { Component } from 'react';

interface Iprops{

}
interface Iemp{
    id:number,
    fname:string,
    lName:string,
}

interface Istate{
    employee1: Iemp,
    employeeList:Iemp[],
}

class Demo2 extends Component<Iprops,Istate>{
    state:Istate={
        employee1:{id:1,fname:"Nirdesh",lName:"Kumar"},
        employeeList:[
            {id:1,fname:"Updesh",lName:"Kumar"},
            {id:2,fname:"Rajeev",lName:"Sharma"},
            {id:3,fname:"Rajneesh",lName:"Verma"},
        ],
    }
    clickFunction=()=>{
        debugger;
        this.setState({
            employee1:{...this.state.employee1, id:2,fname:"Rahul"},
        })
    }

    render() {
        debugger;
        return(
            <React.Fragment>
                <h2>Employee Details</h2>
                <p>ID: {this.state.employee1.id}</p>
                <p>First Name: {this.state.employee1.fname}</p>
                <p>Last Name: {this.state.employee1.lName}</p>
                <button onClick={this.clickFunction}>Click Here</button>
                <ul>
                    {this.state.employeeList.map((emp)=>{
                        return(
                            <li key={emp.id}>
                                {emp.id} . {emp.fname} {emp.lName}
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Demo2;