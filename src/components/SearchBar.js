import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbar,
  MDBCollapse,
  MDBNavbarNav
} from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchPage extends Component {
  state = {
    collapsed: false,
    difficulty: "",
    startDate: new Date(),
    endDate: new Date(),
    category: ""
  };

  constructor(props) {
    super(props);
  }

  changeCategory = (event) => {
    this.setState({
      category: event.target.value
    }, () =>
    {this.props.changeParentCategory(this.state.category)});
  };

  changeDifficulty = (event) => {
    this.setState({
      difficulty: event.target.value
    }, () =>
    {this.props.changeParentDifficulty(this.state.difficulty)});
  };

  changeStartDate = date => {
    this.setState({
      startDate: date
    }, () =>
    {if (typeof this.startDate !== 'undefined') {
      this.props.parent.changeStartDate(this.startDate.toISOString())
    }}
    );
  };

  changeEndDate = date => {
    this.setState({
      endDate: date
    }, () =>
    {if (typeof this.endDate !== 'undefined') {
      this.props.parent.changeEndDate(this.endDate.toISOString())
    }}
    );
  };

  handleSubmit = (event) => {
    this.props.parent.componentDidMount();
  }

  render() {
    var dateFormat = require('dateformat');
    return (
      <div>
        <MDBCol md="14">
          <MDBNavbar
            color="blue accent-4"
            className="text-white darken-3"
            dark
            expand="md"
          >
            <MDBNavbarBrand>Jeopardy<b>Search</b></MDBNavbarBrand>
            <Router>
              <MDBCollapse isOpen={this.state.collapsed} navbar>
                <MDBNavbarNav right>
                  <MDBFormInline className="md-form mr-auto m-0">
                    <div style={{marginRight: '20px'}}>
                      <select
                        className="browser-default custom-select"
                        onChange={this.changeDifficulty} value={this.state.value}
                        style={{
                          color: "white",
                          backgroundColor: "#E5144F",
                          fontSize: "14px",
                          border: "none"
                        }}
                      >
                        <option>Difficulty</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                        <option value="900">900</option>
                        <option value="1000">1000</option>
                      </select>
                    </div>

                    <div style={{marginRight: '20px'}}>
                      <select
                        className="browser-default custom-select"
                        onChange={this.changeCategory} value={this.state.value}
                        style={{
                          color: "white",
                          backgroundColor: "#BA1354",
                          fontSize: "14px",
                          border: "none"
                        }}
                      >
                        <option>Popular Categories</option>
                        <option value="306">Potpourriiii</option>
                        <option value="21">Animals</option>
                        <option value="42">Sports</option>
                        <option value="25">Science</option>
                        <option value="442">People</option>
                        <option value="67">Television</option>
                        <option value="114">History</option>
                        <option value="49">Food</option>
                        <option value="267">Nature</option>
                        <option value="357">Organizations</option>
                      </select>
                    </div>
                    Start Date
                    <div>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.changeStartDate}
                      />
                    </div>

                    End Date
                    <div>
                      <DatePicker
                        selected={this.state.endDate}
                        onChange={this.changeEndDate}
                      />
                    </div>
                    
                    <MDBBtn
                      outline
                      color="white"
                      size="sm"
                      className="mr-auto"
                      onClick={this.handleSubmit}
                    >
                      Search
                    </MDBBtn>
                  </MDBFormInline>
                </MDBNavbarNav>
              </MDBCollapse>
            </Router>
          </MDBNavbar>
        </MDBCol>
      </div>
    );
  }
}

export default SearchPage;
