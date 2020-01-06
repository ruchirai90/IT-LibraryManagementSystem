import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../actions/AddBookAction';
import './BookFormModal.css';
import Button from '../Button/Button';
import Form from '../Form/Form';


class AddBooks extends React.Component {

    /*
    *Handler to save the book details
    */
    saveBookHandler = () => {

        if (this.props.btnAction === 'add') {
            this.clearState();
            //creates the payload which has to be saved in backend
            let obj = this.getFormObject(
                Math.random(),
                this.props.selectedRecord.name,
                this.props.selectedRecord.description,
                this.props.selectedRecord.category,
                this.props.selectedRecord.author,
                this.props.selectedRecord.price
            )
            this.props.onAddClick(obj)

        }
        else if (this.props.btnAction === 'edit') {
            let obj = this.getFormObject(this.props.selectedRecord.index, this.props.selectedRecord.name,
                this.props.selectedRecord.description,
                this.props.selectedRecord.category,
                this.props.selectedRecord.author,
                this.props.selectedRecord.price)
            this.props.onUpdateClick(obj)
        }
        this.props.manageModal(false, '');
    }
//Title is mandatory field, if it isnot entred disable save else enable save
    InputChange = (event) => {
        if (event.target.name === 'name') {
            if (event.target.value) {
                this.props.enableSave(true);
            }
            else {
                this.props.enableSave(false);

            }
        }
        this.props.changeRecord(event.target.name, event.target.value);
    }

    //handler to clear the form details
    clearState = () => {
        this.props.clearRecord();
    }
    clearHandler = () => {
        this.clearState();
    }
    handleCloseClick = () => {
        this.props.manageModal(false, '');
    }

    //create the form payload which has to be add to backend
    getFormObject = (index, name, desc, category, author, price) => {
        let obj = {
            index: index,
            name: name,
            description: desc,
            category: category,
            author: author,
            price: price
        }
        return obj;
    }
    render() {
        return (
            <>
                {this.props.showModal ?
                    <div className="modal">
                        <div className="innerModal">
                            <h5 className='modalHeader'>Edit</h5>
                            <span onClick={this.handleCloseClick} className="closeButton">&times;</span>
                            <Form item={this.props.selectedRecord} handleChange={this.InputChange.bind(this)} />
                            <div className='modalAction'>
                                <Button text="save" parentClickHandler={this.saveBookHandler}
                                    state={this.props.isSaveDisabled} />
                                <Button text="Clear" parentClickHandler={this.clearHandler} />
                            </div>
                        </div>
                    </div> : null}
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        books: store.books,
        selectedIndex: store.selectedIndex,
        btnAction: store.btnAction,
        showModal: store.showModal,
        selectedRecord: store.selectedRecord,
        isSaveDisabled: store.isSaveDisabled
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddClick: (obj) => {
            return dispatch(actionCreator.addBook(obj))
        },

        onUpdateClick: (obj) => {
            return dispatch(actionCreator.updateBook(obj))
        },
        manageModal: (showModal, action) => {
            return dispatch(actionCreator.manageModal(showModal, action))
        },
        changeRecord: (name, value) => {
            return dispatch(actionCreator.changeRecord(name, value))
        },
        clearRecord: (obj) => {
            return dispatch(actionCreator.clearRecord())
        },
        enableSave: (value) => {
            return dispatch(actionCreator.enableSave(value))
        }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBooks);