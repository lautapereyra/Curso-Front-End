/*import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import { useState } from 'react';
import Child from './components/child';


function App() {
  return (
    <div>
      <Hello name='Fabian' age='61'></Hello>
      <Hello name='Claudia' age='54'></Hello>
      <Hello name='Guadalupe' age='24'></Hello>
      <Hello name='Lautaro' age='23'></Hello>
      <Hello name='Franco' age='24'></Hello>
    </div>

  );
}

export default App;

function App() {

  const [x, setX] = useState(15);
  const [name, setName] = useState('Lautaro');

  function changeto20() {
    setX(20);
  }
  function changename() {
    setName('Fabian');
  }
  return (
    <div className='App'>
      <h1>the value of x is {x}</h1>
      <button onClick={changeto20}>Chage x to 20</button>
      <h1>Hi im {name}</h1>
      <button onClick={changename}>Chage name to Fabian</button>

    </div>
  );
}

export default App;


function App() {

  const [x, setX] = useState(15);
  const [name, setName] = useState('Lautaro');
  function changeme() {
    setX(30);
  }
  function changeto20() {
    setX(20);
  }
  function changename() {
    setName('Fabian');
  }
  return (
    <div className='App'>
      <h1>the value of x is {x}</h1>
      <button onClick={changeto20}>Chage x to 20</button>
      <h1>Hi im {name}</h1>
      <button onClick={changename}>Chage name to Fabian</button>
      <Child change={changeme}></Child>
    </div>
  );
}

export default App;*/
/*
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [nameerror, setNameerror] = useState('')
  function namechange(event) {
    setName(event.target.value);
  }
  function nameblur(e) {
    if (e.target.value.length <= 4) {
      setNameerror('Name is having less than 5 characters');
    } else {
      setNameerror('');
    }
  }
  function emailblur(e) {
    if (e.target.value.length <= 3) {
      setError('Invalid email');
    } else {
      setError('');
    }
  }
  return (
    <div className='App'>
      <input type='text'
        id='name'
        placeholder='Enter Name'
        onChange={namechange}
        onFocus={(e) => e.target.value = ''}
        onBlur={nameblur} />
      <input
        type='text'
        id='email'
        placeholder='Enter Email'
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        onFocus={(event) => { setEmail(''); event.target.value = '' }}
        onBlur={emailblur}
      />
      <br />
      <br />
      <br />

      {name !== '' && name.length >= 3 ? (<p style={{ marginTop: '20px' }}>Name is {name}</p>) : ''}
      {email !== '' && email.length >= 3 ? (<p style={{ marginTop: '20px' }}>Email is {email}</p>) : ''}
      {error !== '' ? (<p style={{ backgroundColor: 'blue', color: '#fff', padding: '10px 0px' }}>{error}</p>) : ''}
      {nameerror !== '' ? (<p style={{ backgroundColor: '#111', color: 'orange', padding: '10px 0px', marginTop: '20px' }}>{nameerror}</p>) : ''}

    </div >
  );
}

export default App;
*/
/*
import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
 
  return (
    <>
      <h1>I am inside React Fragment</h1>
      <p>I am a paragraph</p>
      <button>Click me</button>
    </>
  )
}

export default App;*/


import logo from './logo.svg';
import './App.css';
import React from 'react';
import Fruits from './components/fruits';
function App() {
  const fruits = ['banana', 'apple', 'pear', 'watermellon']
  return (
    <>
      {fruits.map((fruits) =>
        <Fruits fav={fruits} key={fruits} />
      )}
    </>
  )
}

export default App;
