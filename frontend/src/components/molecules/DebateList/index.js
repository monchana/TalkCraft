import React from 'react';
import { CustomPagination } from 'components';

import { Button } from 'react-bootstrap'
import { Link } from 'components'
import { MDBDataTable } from 'mdbreact';

class DebateList extends React.Component {
    constructor() {
        super();

        var yesnoList = [...Array(120).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

        this.state = {
            yesnoList: yesnoList,
            pageOfItems: [],
            toggledYesButtons: [],
            toggledNoButtons: []
        }

        this.onChangePage = this.onChangePage.bind(this)
        this.onClickButton = this.onClickButton.bind(this)
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    onClickButton(e) {
      let targetButton = Number(e.target.id)
      let buttonType = e.target.name

      if(buttonType == "yesbtn") {
        if(this.state.toggledYesButtons.includes(targetButton)) {
          this.setState({
            toggledYesButtons: this.state.toggledYesButtons.filter(id => id != targetButton)
          })
        } else {
          this.setState({
            toggledYesButtons: [...this.state.toggledYesButtons, targetButton]
          })
        }
      }

      else if(buttonType == "nobtn") {
        if(this.state.toggledNoButtons.includes(targetButton)) {
          this.setState({
            toggledNoButtons: this.state.toggledNoButtons.filter(id => id != targetButton)
          })
        } else {
          this.setState({
            toggledNoButtons: [...this.state.toggledNoButtons, targetButton]
          })
        }
      }
    }

   handleRowClick = e => {
     e.preventDefault()
   }

    render() {
      let data = this.state.yesnoList.map(item =>
        ({
          id : item.id,
          clickEvent: this.handleRowClick,
          'category' : 'category ' + item.id,
          'title' : 'Debate Topic ' + item.id
        })
      )
      let json = {
        rows: data
      }

       return (
         <div>
         <Button style={{float:"right"}}>
           write
         </Button>
         <MDBDataTable
           btn
           small
           hover={true}
           data={json}
         />
         </div>
       );
   }

}

export default DebateList
