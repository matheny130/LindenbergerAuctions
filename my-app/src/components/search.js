import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

class Search extends Component {
  onChange = e => {
    if (e.target.value === '') {
      this.props.fetchData({ category: '*' });
    } else {
      this.props.fetchData({ category: e.target.value });
    }
  };

  onClear = e => {
    let searchInput = ReactDOM.findDOMNode(this.refs.searchInput);
    searchInput ? (searchInput.value = '') : '';
    this.props.fetchData({ category: '*' });
   };

   onSubmit = e => {
    e.preventDefault();
  };

  renderTitleAndForm() {
    let titleAndForm = (
      <Container>
        <Row className="show-grid top10">
          <h2> Filter Authors Database by First Name</h2>
        </Row>
        <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                type="search"
                name="search"
                ref="searchInput"
                id="searchInput"
                placeholder="First Name"
                onChange={this.onChange}
              />
            </FormGroup>
            <Button className="btn-ll5" onClick={this.onClear}>
              Clear
            </Button>
          </Form>
        </Row>
      </Container>
    );

    return titleAndForm;
  }

  renderFullForm() {
    let fullForm = (
      <Container>
        <Row className="show-grid top10">
          <h2>Lamps</h2>
        </Row>
        <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup>
              <Input type="search" name="search" id="searchInput" placeholder="First Name" onChange={this.onChange} />
            </FormGroup>
            <Button className="btn-ll5" onClick={this.onClear}>
              Clear
            </Button>
          </Form>
        </Row>
        <Row className="show-grid top10">
          <BootstrapTable data={this.props.searchData} search={false}>
            <TableHeaderColumn dataField="category">Category</TableHeaderColumn>
            <TableHeaderColumn dataField="price" isKey={true}>
              Last Name
            </TableHeaderColumn>
          </BootstrapTable>
        </Row>
      </Container>
    );
    return fullForm;
  }

  render() {
    if (this.props.searchData.length !== 0) {
      return this.renderFullForm();
    } else {
      return this.renderTitleAndForm();
    }
  }
}

function mapStatetoProps(state) {
  return {
    searchData: state.searchData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: firstName => dispatch({ type: 'FETCH_SEARCH_DATA', payload: category })
  };
}

const ConnectedSearch = connect(mapStatetoProps, mapDispatchToProps)(Search);

export default ConnectedSearch;
