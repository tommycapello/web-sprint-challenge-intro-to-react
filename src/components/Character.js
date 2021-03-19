import React from 'react'
import styled from 'styled-components'

const StyledChars = styled.div`
display:flex;
flex-direction: column;
align-items:center;
text-align: center;
h2,p{
  width:30%
}`

export default function Character(props) {
  const {data} = props
  return (
    <StyledChars className='container'>
      <button onClick={(e) => {e.target.style.display = "none"} }>{data.name}</button>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair Color: {data.hair_color}</p>
      <p>Eye Color: {data.eye_color}</p>
      <p>Gender: {data.gender}</p>
      <p>Birth Year{data.birth_year}</p>
    </StyledChars>
  )
}
