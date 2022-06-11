import React from 'react';
import MoonsamaMFFOrders from '../components/MoonsamaMFFOrders';
import { connect } from 'react-redux';

class OrdersPage extends React.Component {
    render() {
        return (
            <div>
            <MoonsamaMFFOrders />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        player: 'test'        
    };
}
export default connect(mapStateToProps)(OrdersPage);