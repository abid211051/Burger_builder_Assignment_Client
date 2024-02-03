import React, { Component, useState } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { addIngredient, removeIngredient, updatePurchasable } from '../../redux/actionCreators';
import { Outlet, useNavigate } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable()),
    }
}

const BurgerBuilder = (props) => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const addIngredientHandle = type => {
        props.addIngredient(type);
        props.updatePurchasable();
    }

    const removeIngredientHandle = type => {
        props.removeIngredient(type);
        props.updatePurchasable();
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const handleCheckout = () => {
        navigate("/checkout");
    }

    return (
        <div>
            <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={props.ingredients} />
                <Controls
                    ingredientAdded={addIngredientHandle}
                    ingredientRemoved={removeIngredientHandle}
                    price={props.totalPrice}
                    toggleModal={toggleModal}
                    purchasable={props.purchasable}
                />
            </div>
            <Modal isOpen={modalOpen}>
                <ModalHeader>Your Order Summary</ModalHeader>
                <ModalBody>
                    <h5>Total Price: {props.totalPrice.toFixed(0)} BDT</h5>
                    <Summary ingredients={props.ingredients} />
                </ModalBody>
                <ModalFooter>
                    <Button style={{ backgroundColor: "#D70F64" }} onClick={handleCheckout}>Continue to Checkout</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);