import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ListPeople from './components/ListPeople/ListPeople'
import Winner from './components/Winner/Winner'
import RaffleButton from './components/Button/RaffleButton'
import getPeople from './services/googleForms/csv/getPeople';

const App: React.FC = () => {
  // eslint-disable-next-line
  const [people, setPeople] = useState([
    { id: 1, name: '----------------', },
  ])
  const [winner, setWinner] = useState({ id: 0, name: '--------------' })

  useEffect(() => {
    getPeople(setPeople)
  }, [])

  function changeWinner(): void {
    const loop = setInterval(() => {
      const number = Math.floor(Math.random() * (people.length - 1 + 1)) + 1
      const newWinner = people.filter(person => person.id === number)[0]
      setWinner(newWinner)
    }, 50)

    const audio = new Audio('./sounds/winner.mp3');
    audio.play();

    setTimeout(() => clearInterval(loop), 6000)
  }

  return (
    <Container>
      <Row className="main-container">
        <Col xs={12} className="title">
          <h1>Code Easy Raffle</h1>
        </Col>
        <Col xs={12} lg={6}>
          <ListPeople people={people} />
        </Col>
        <Col xs={12} lg={6}>
          <Winner winner={winner} />
          <RaffleButton raffle={changeWinner} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
