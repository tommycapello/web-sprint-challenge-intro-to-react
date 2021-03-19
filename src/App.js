import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './components/'
import Character from './components/Character'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  h1 {
    text-align:center;
    font-size: 4rem;
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([]);

  const getCharacter = () =>  {
    axios.get(`${BASE_URL}people/`)
      .then(res => {
        setCharacterData(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(getCharacter, []);

  return (
    <StyledApp className='container'>
      <h1>Star Wars Characters!</h1>
      {
        characterData.map(char => {
          return <Character key={char.id} data={char}/>
        })
      }
    </StyledApp>
  )
}
export default App;
