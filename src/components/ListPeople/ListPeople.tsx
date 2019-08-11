import * as React from 'react'
import { Row, Col } from 'reactstrap'
import './ListPeople.css'
import IPerson from './../../interfaces/IPerson'

interface IProps {
  people: IPerson[]
}

const ListPeople: React.FC<IProps> = ({people}: IProps) => {
  function showPeople() {
    return people.map((person) => (
        <div key={person.id} className="person">
          <p>{person.name}</p>
          <hr className="personal-hr"/>
        </div>
    ))
  }

  return (
    <Row>
      <Col className="borders background-config box text-center">
        {showPeople()}
      </Col>
    </Row>
  )
}

export default ListPeople
