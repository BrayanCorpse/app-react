import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './index.css';




class MyComponent extends React.Component{

  render(){

    const information = {
      name: 'Brayan', 
      lastName: 'Manzano',
      abilities: ['Diseñar','Pintar','Cantar']
    }

    const scholarship = {
      grade: '9°',
      group: 'ITIC-94'
    }

    const age = 17


  
    function nameStudent(information){
      return <h3>{information.name + ' ' + information.lastName}</h3>
    }
  
    function ageStudent(age){
      return <h4>{age}</h4>
    }

    function schoolData(scholarship){
    return <h5>{scholarship.grade + ' ' + scholarship.group}</h5>
    }
  
    function yourAge(information){
  
      if(age >= 18)
      {
      
      if(information.name !== 'Brayan'){
        return <div>
                  <h5>Ya estas viejo |<small> Alumno Incorrecto</small></h5>
               </div>
      }
      // return alert('Tienes la edad Adecuada pero Tu si eres brayan!')
    }
    else
    {
      return(
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Alumno Correcto y muy joven!</h5>
        School Data: {schoolData(scholarship)}
        <hr/>
        </section>
      )
      
    }
     
    }
  

 return(
 
    <div className="App">
      <header className="App-header">
     
      Hola! {nameStudent(information)} 
      Your Age is: {ageStudent(age)}  
      Estatus: {yourAge(information)}  
  
      </header>
    </div>
  
 );


  }

}


ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

export default MyComponent;

  
