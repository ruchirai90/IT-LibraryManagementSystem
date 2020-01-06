import React from 'react';
import { Component } from 'react';
import Table from '../Table/Table';
import SearchBook from '../SearchBook/SearchBook'
import Button from '../Button/Button';
import { connect } from 'react-redux';
import * as actionCreator from '../../actions/AddBookAction';
import * as utils from '../../utils/common';
import './Home.css';
import Label from '../label/label';

//container 

class Home extends Component {

    addBookHandler = () => {
        //manage modal - true/false to show/hide overlay
        this.props.manageModal(true, 'add');
    }

    //selectedIndex - index of selected item
   changeCurry = (selectedIndex, method) => e => {
        method(selectedIndex);

    }
    //search handler- debounced to avoid filtering on every key press.
    //Debounce is more useful if it is server side search.
    filterList = utils.debounced((value) => {
        this.props.filterList(value);
    }, 300);

    onChangeHandler = (selectedIndex) => {
        this.props.onSelectionChange(selectedIndex);
        this.props.manageModal(true, 'edit');
    }
    handleSearch = (event) => {
        this.filterList(event.target.value)

    }
    filterDebounce = (value) => {
        this.props.filterList(value);
    }

    //Load the books list intially
    componentDidMount() {
        this.props.getBooks();
    }
    render() {

        return (
            <div>
                <div className='tableHeader'>
                    <div className='tableActions'>
                        <Button text="Add" parentClickHandler={this.addBookHandler} />
                    </div>
                    <SearchBook parentSearchHandler={this.handleSearch} />
                </div>
                <Table onChangeHandler={this.onChangeHandler} bookList={this.props.books} parentTableSelection={this.changeCurry} />
                {this.props.books.length === 0 && <Label noDataClass="noDataClass" text="No Books Available" />}
            </div>
        )
    }

}
const mapStateToProps = store => {
    return {
        books: store.books,
        selectedIndex: store.selectedIndex,
        books: store.books
    };
};

const mapDispatchToProps = dispatch => {
    return {
        manageModal: (showModal, action) => {
            return dispatch(actionCreator.manageModal(showModal, action))
        },
        onSelectionChange: (index) => {
            return dispatch(actionCreator.selectItem(index))
        },
        getBooks: (index) => {
            return dispatch(actionCreator.getBooks())
        },
        filterList: (value) => {
            return dispatch(actionCreator.searchBook(value))
        }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

