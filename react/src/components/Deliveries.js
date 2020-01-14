import React from 'react';
import facade from '../apiFacade'

class Deliveries extends React.Component {

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
        console.log(this.state.trucks)
    }

    render() {
        if (this.state.trucks && this.state.trucks.length > 0) {
            return (
                <div>
                    <table>
                        <tr><th>name</th><th>capacity</th><th>status</th></tr>
                        {
                            this.state.trucks.map((items =>
                                <tr><td>{items.name}</td><td>{items.capacity}</td><td>{items.deliveries ? (<p>Available</p>) : (<p>On duty</p>)}</td></tr>
                            ))
                        }
                    </table>
                </div>
            );
        }

        return null;
    }

}

export default Deliveries;