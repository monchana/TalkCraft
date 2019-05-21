import React from 'react'
import { ListGroup } from 'react-bootstrap'

const RankListUsers = ({ children, ...props }) => {
  return (
    <ListGroup as="ul" className="list-group-horizontal w-100" style={{ marginTop: "10px" }}>
      <ListGroup.Item as="li" className="w-25 p-3">
        Top Rank
       <ListGroup>
          <ListGroup.Item>
            User 1
        </ListGroup.Item>
          <ListGroup.Item>
            User 2
        </ListGroup.Item>
          <ListGroup.Item>
            User 3
        </ListGroup.Item>
        </ListGroup>
      </ListGroup.Item>
    </ListGroup>
  )
}
export default RankListUsers
