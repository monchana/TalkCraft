

import React, {Component} from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, Overall
} from 'components'
import PostPageInfoList from 'components'

// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'

class YesOrNoWritePage extends Component {
  id = 2
  state = {
    information: [
      {
        id:0, 
        title: 'First',
        mainTopic: 'Test'
      },
      {
        id: 1,
        title: 'Second',
        mainTopic: 'Test2'
      }
    ],
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }  
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
    console.log(data);
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter( info => info.id !==id )
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }
  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
       <Overall
          onCreate = {this.handleCreate}
       />
       <p>
         {/* Finding keyword input */}
         <input 
          placeholder= "Find title to search.."
          onChange={this.handleChange}
          value={keyword}
          />
       </p>
       <hr />
        <PostPageInfoList data = {filteredList}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    ); // end of return
  }
}

export default YesOrNoWritePage
