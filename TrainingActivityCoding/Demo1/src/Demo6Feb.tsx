import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IEmp {
    fname: string;
    lname: string;
}

function TestFC() 
{
   const [emps, setEmps] = useState<IEmp[]>([]);
  // const [emp, setEmp] = useState<IEmp>({ fname: "", lname: "" }); 
//    const [msg1, setMessage1] = useState<string>("Hello");
//    const [msg2, setMessage2] = useState<string>("Bye");

   const token:string = sessionStorage.getItem("token") || "";
   useEffect( () => {
        // console.log("Liked Component Did Mount");
        // axios.get("https://dummyjson.com/users").then( (response) => {
        //     const empArray: IEmp[] = response.data.users.map( (u:any) => {
        //         return { fname: u.firstName, lname: u.lastName };
        //     } );
        //     setEmps(empArray);
        // });
        axios.get("http://localhost:9999/emps",{
            headers:{Authorization:`Bearer ${token}`}
        }).then( (response) => {
            const empArray: IEmp[] = response.data.users.map( (u:any) => {
                return { fname: u.firstName, lname: u.lastName };
            } );
            setEmps(empArray);
        });
    }, [] ); //empty dependency array means run only once like componentDidMount  
	//Use here the axios call code like below like componentDidMount
        //Use XHR code given here:
        //https://bonaventuresystems.com/code3.txt

        //and replace below code with XHR call instead of wrapper called axios
        //axios.get("https://dummyjson.com/users").then( (response) => {
           // console.log(response.data);
           // response.data.users.forEach( (u:any) => {
           //     let emp1: IEmp = { fname: u.firstName, lname: u.lastName };
            //    this.setState( (prevState) => ({
             //       emps: [...prevState.emps, emp1]
            //    }) );
      //  } );  
       // });
    


//     useEffect( () => {
//         console.log("Liked Component Did Update only on msg1 change");
//    }, [msg1] );

//     useEffect( () => {
//         console.log("Liked Component Did Update only on msg2 change");
//    }, [msg2] );


//     useEffect( () => {
//         console.log("Liked Component Did Update but when msg1 or msg2 changes");
//    }, [msg1, msg2] );

return (
    emps.map( (e, index) => (
        <p key={index}>
            {e.fname} {e.lname}
        </p>  
    ))
)   

   
}

export default TestFC;