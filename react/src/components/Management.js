import React from 'react';
import facade from '../apiFacade'
import TruckTable from './TruckTable';

class Management extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trucks: [],
            truckCapacity: '',
        };

    }
    componentDidMount() {
        this.getData()
    }

    async getData() {
        let trucks = await facade.getTrucks()
        this.setState({
            trucks: trucks
        })
    }

    render() {
            return (
                <TruckTable />
            )
        

    }

}

export default Management;