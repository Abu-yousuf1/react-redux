import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    
    const {products,addToCart} = props;
    return (
        <div>
            <h3>this is shop</h3>
            {
                products.map(pd => <Product 
                    product = {pd}
                    key = {pd.id}
                    addToCart = {addToCart}
                    ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
       
        products: state.products
    }
}

 const mapDispatchToProps = {
     addToCart: addToCart
 }

export default  connect(mapStateToProps,mapDispatchToProps)(Shop);