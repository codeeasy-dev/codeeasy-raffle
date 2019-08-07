import * as React from 'react'
import { Row, Col } from 'reactstrap'
import './Winner.css';
import IPerson from '../../interfaces/IPerson';

interface IProps {
  winner: IPerson
}

const Winner: React.FC<IProps> = ({winner}: IProps) => {
  return (
    <Row>
      <Col className="winner-box">
        <p className="winner">{winner.name.split(' - ')[0]}</p>
      </Col>
    </Row>
  )
}

export default Winner
