import React from 'react'
import { ListGroup } from 'react-bootstrap'

const MainListGroup = ({ children, ...props }) => {
  return (
    <ListGroup as="ul" className="list-group-horizontal w-100" style={{marginTop:"10px"}}>
      <ListGroup.Item as="li" className="w-25 p-3">
       Preparing Debate List
         <ListGroup>
          <ListGroup.Item>
          Debate List 1
          </ListGroup.Item>
          <ListGroup.Item>
          Debate List 2
          </ListGroup.Item>
          <ListGroup.Item>
          Debate List 3
          </ListGroup.Item>
          <ListGroup.Item>
          Debate List 4
          </ListGroup.Item>
          <ListGroup.Item>
          Debate List 5
          </ListGroup.Item>
        </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item as="li" className="w-25 p-3">
       Current Debate List
       <ListGroup>
        <ListGroup.Item>
        Debate List 1
        </ListGroup.Item>
        <ListGroup.Item>
        Debate List 2
        </ListGroup.Item>
        <ListGroup.Item>
        Debate List 3
        </ListGroup.Item>
        <ListGroup.Item>
        Debate List 4
        </ListGroup.Item>
        <ListGroup.Item>
        Debate List 5
        </ListGroup.Item>
      </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item as="li" className="w-25 p-3">
       Current Yes or No List
       <ListGroup>
        <ListGroup.Item>
        Yes or No List 1
        </ListGroup.Item>
        <ListGroup.Item>
        Yes or No List 2
        </ListGroup.Item>
        <ListGroup.Item>
        Yes or No List 3
        </ListGroup.Item>
        <ListGroup.Item>
        Yes or No List 4
        </ListGroup.Item>
        <ListGroup.Item>
        Yes or No List 5
        </ListGroup.Item>
      </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item as="li" className="w-25 p-3">
       Brief Ranking & My Rank
       <ListGroup>
        <ListGroup.Item>
        Rank 1
        </ListGroup.Item>
        <ListGroup.Item>
        Rank 2
        </ListGroup.Item>
        <ListGroup.Item>
        Rank 3
        </ListGroup.Item>
        <ListGroup.Item>
        Rank 4
        </ListGroup.Item>
        <ListGroup.Item>
        Rank 5
        </ListGroup.Item>
      </ListGroup>
      </ListGroup.Item>
    </ListGroup>
  )
}


export default MainListGroup
