import React from 'react';
import facade from '../apiFacade'
import DeliveryTable from './DeliveryTable';

class Deliveries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trucks: [],
            truckCapacity: '',
        };

    }
    componentDidMount() {
    }


    render() {
            return (
                <DeliveryTable />
            )
        

    }

}

export default Deliveries;