import React, { Component } from 'react';
import type { IEmp } from './Basics1';

interface IProps {
  employeesList: IEmp[];
  RemoveEmployee: (index: number) => void;
  EditEmployee: (index: number) => void;
}

interface IState {}

class Row extends Component<IProps, IState> {
  render() {
    const { employeesList, RemoveEmployee, EditEmployee } = this.props;

    return (
      <>
        {employeesList.map((e, index) => (
          <tr key={index}>
            <td>{e.fname}</td>
            <td>{e.lname}</td>
            <td>
              <button onClick={() => RemoveEmployee(index)}>Remove</button>
            </td>
            <td>
              <button onClick={() => EditEmployee(index)}>Edit</button>
            </td>
          </tr>
        ))}
      </>
    );
  }
}

export default Row;