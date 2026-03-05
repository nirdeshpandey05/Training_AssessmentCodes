import React, { Component, ChangeEvent } from 'react';
import Validate from './Validate';
import Row from './Row';

interface IProps {}

export interface IEmp {
  fname: string;
  lname: string;
}

interface IState {
  emp: IEmp;
  emps: IEmp[];
  error:{}
}

class Basics1 extends Component<IProps, IState> {
  state: IState = {
    emp: { fname: '', lname: '' },
    emps: [],
    error:{},
  };

//   basicXhrCode = () => {
//     // const xhr = new XMLHttpRequest();
//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        
//   }

  componentDidMount(): void {
      var helper = new XMLHttpRequest(); //readystate = 0
        helper.onreadystatechange = () => {
        console.log(helper.readyState);
        if (helper.readyState === 4 && helper.status === 200) {
          console.log(helper.responseText);
          JSON.parse(helper.responseText).users.forEach((element: any) => {
          let emp1:IEmp={fname:element.firstName,lname:element.lastName};
          console.log(emp1);
          this.setState(prev => ({ emps: [...prev.emps, emp1] }));
 
          });
        }
      };

      helper.open("GET", "https://dummyjson.com/users"); //readystate = 1
      helper.send(); //readystate = 2 

  }

  Change1 = () => {
    this.setState((prev) => ({ emp: { ...prev.emp, fname: 'Jane' } }));
  };

  OnTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      emp: {
        ...prev.emp,
        [name]: value,
      } as IEmp,
    }));
  };

  ValidateFormData= () => {
    let error:any={};
    if(Validate.ValidateIsEmpty(this.state.emp.fname)){
        error.fname="First Name is required"
    }

    if(Validate.ValidateIsEmpty(this.state.emp.lname)){
        error.lname="Last Name is required"
    }
    this.setState({error:error});
    if(Object.keys(error).length>0){
        return false;
    }
    else{
        return true;
    }
  }

  Add = () => {
    if(!this.ValidateFormData()){
        return;
    }

    this.setState((prev) => ({
      emps: [...prev.emps, { ...prev.emp }], 
      emp: { fname: '', lname: '' },       
    }));
  };

  RemoveEmployee = (index: number) => {
    this.setState((prev) => ({
      emps: prev.emps.filter((_, i) => i !== index),
    }));
  };

  EditEmployee = (index: number) => {
    const empToEdit = this.state.emps[index];
    if (empToEdit) {
      this.setState({ emp: { fname: empToEdit.fname, lname: empToEdit.lname } });
    }
  };

  render() {
    const { emp, emps } = this.state;

    return (
      <>
        <hr />
        FName:{' '}
        <input
          type="text"
          value={emp.fname}
          onChange={this.OnTextChange}
          name="fname"
        />
        <span style={{ color: 'red' }}>{this.state.error.fname}</span>
        <br />
        LName:{' '}
        <input
          type="text"
          value={emp.lname}
          onChange={this.OnTextChange}
          name="lname"
        />
        <span style={{ color: 'red' }}>{this.state.error.lname}</span>
        <br />
        <button onClick={this.Add}>Add Employee</button>

        <hr />
        <h2>--------------------------------------------------------</h2>
        <h2>Employees</h2>

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Remove</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <Row
              employeesList={emps}
              RemoveEmployee={this.RemoveEmployee}
              EditEmployee={this.EditEmployee}
            />
          </tbody>
        </table>
      </>
    );
  }
}

export default Basics1;