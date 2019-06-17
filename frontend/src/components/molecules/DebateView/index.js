// https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-react-part-3-add-display-post--cms-28685
import React from 'react';
import { MDBDataTable } from 'mdbreact';

//import { CustomPagination } from './node_modules/components';
import { Image } from 'react-bootstrap'
class DebateView extends React.Component {
    constructor(props) {
        super(props);
        var debate = 0; //get debate

    }
    // after backend updated
    //should load debate and
    //replace fake informations below
    //with debate information

    render() {
        return (
            <div class="container">
                <h2>TITLE HEADING</h2>
                <h5> jun 1, 2019</h5>
                <Image src="img.jpg" fluid />
                <p>Debate text</p>
            </div>

        )
    }

}
export default DebateView
