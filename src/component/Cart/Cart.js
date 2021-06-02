import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {
   const {cart, removeFromCart} = props
    return (
        <div>
            <h4>this is Cart</h4>
            <ul>
                {

                   // cart.map(id => <li>{id} <button onClick = {() => removeFromCart(id)}>X</button></li>)
                    cart.map(pd => <li key ={pd.cartId}>{pd.name} <button
                        onClick = {()=> removeFromCart(pd.cartId)}
                        > X</button></li>)
                }
            </ul>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {

    removeFromCart : removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);