import * as React from 'react'
import { Row, Col } from 'reactstrap'
import './RaffleButton.css'

interface IProps {
  raffle: () => void
}

const RaffleButton: React.FC<IProps> = ({raffle}: IProps) => {
  return (
    <Row>
      <Col className="button-box" onClick={raffle}>
        SORTEAR
      </Col>
    </Row>
  )
}

export default RaffleButton
