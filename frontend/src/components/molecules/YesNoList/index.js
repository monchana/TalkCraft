import React from 'react';
import { CustomPagination } from 'components';
import { Button, Spinner } from 'react-bootstrap'
import { Link, Paragraph  } from 'components'
import { MDBDataTable } from 'mdbreact';
import styled from 'styled-components'

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

class YesNoList extends React.Component {
    constructor() {
        super();

        this.state = {
            pageOfItems: [],
            toggledYesButtons: [],
            toggledNoButtons: [],
            yesnoList: null,
            loading: true,
            isLoggedIn: false,


            data:[]
        }

        this.onChangePage = this.onChangePage.bind(this)
        this.onClickButton = this.onClickButton.bind(this)
    }

    componentWillMount() {
      fetch('http://localhost:8000/yesorno/write/')
      .then(response => response.json())
      .then(data => this.setState({ yesnoList: data, loading: false }))

      this.setState({
        isLoggedIn: (localStorage.hasOwnProperty('user')) ? true : false
      })

    //  //FIXME
    //   fetch('http://localhost:8000/yesorno/detail/' + '1' + '/')
    //   .then(response => response.json())
    //   .then(data => this.setState({data: data, loading: false}))
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
      let data = (this.state.loading) ? []
      :
      this.state.yesnoList.map(item =>
        ({
          id : item.id,
          'category' : item.mainTopic,
          'yesbutton' :
           <Button
            id={item.id}
            name="yesbtn"
            variant={this.state.toggledYesButtons.includes(item.id) ? 'default' : ' '}
            onClick={this.onClickButton.bind(this)}
            disabled={this.state.toggledNoButtons.includes(item.id) || !this.state.isLoggedIn}
           >
           {item.pictureA != null?  <img src={item.pictureA} width="200rem" id={item.id} name="yesbtn"/> : 'Yes'}
           </Button>,
          'title' :
          <div>
          {!this.state.toggledYesButtons.includes(item.id) && !this.state.toggledNoButtons.includes(item.id) || !this.state.isLoggedIn
          ? <div>
             <h5>{item.title}</h5>
              {item.summary}
             <br/>
               votes count 0
             </div>
          : <Link href={"/yesno-detail/" + item.id} key={item.title}>
              <h5>{item.title}</h5>
               {item.summary}
              
             </Link>}
            </div>
           ,
          'nobutton' :
           <Button
           id={item.id}
           name="nobtn"
           variant={this.state.toggledNoButtons.includes(item.id) ? 'pink' : ' '}
           onClick={this.onClickButton.bind(this)}
           disabled={this.state.toggledYesButtons.includes(item.id) || !this.state.isLoggedIn}
          >
          {item.pictureB != null?  <img src={item.pictureB} width="200rem" id={item.id} name="nobtn" /> : 'No'}
          </Button>
        })
      )
      let json = {
        rows: data
      }

      let listUI = (this.state.loading) ?
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      :
       <div>
       <Description>
        자세한 내용이 보고 싶으시면 로그인 후 원하는 토픽에 투표를 해주세요!
       </Description>
      <Button style={{float:"right"}}
              href="yesno-write">
        write
      </Button>
      <MDBDataTable
        btn
        small
        hover={true}
        data={json}
      />
      </div>

       return (
         listUI
       );
   }

}

export default YesNoList
