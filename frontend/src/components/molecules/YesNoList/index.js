import React from 'react';
import { CustomPagination } from 'components';

import { Button } from 'react-bootstrap'
import { Link } from 'components'
import { MDBDataTable } from 'mdbreact';

class YesNoList extends React.Component {
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


    render() {
      let data = this.state.yesnoList.map(item =>
        ({
          id : item.id,
          'category' : 'category ' + item.id,
          'yesbutton' :
           <Button
            id={item.id}
            name="yesbtn"
            variant={this.state.toggledYesButtons.includes(item.id) ? 'default' : ' '}
            onClick={this.onClickButton.bind(this)}
            disabled={this.state.toggledNoButtons.includes(item.id)}
           >
           Yes
           </Button>,
          'title' :
          <Link href="/yesno-detail">
            <h5>Yes or No Topic {item.id} </h5>
            <br/>
            votes count 0
           </Link>
           ,
          'nobutton' :
           <Button
           id={item.id}
           name="nobtn"
           variant={this.state.toggledNoButtons.includes(item.id) ? 'pink' : ' '}
           onClick={this.onClickButton.bind(this)}
           disabled={this.state.toggledYesButtons.includes(item.id)}
          >
          No
          </Button>
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

export default YesNoList
