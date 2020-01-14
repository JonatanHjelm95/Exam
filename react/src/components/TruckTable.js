import React from 'react';
import facade from '../apiFacade'

class TruckTable extends React.Component {

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
        console.log(trucks)
    }

    render() {
        if (this.state.trucks && this.state.trucks.length > 0) {
            return (
                <div>
                    <table className="ResultTable"><thead>
                        <tr><th>name</th><th>capacity</th><th>status</th></tr></thead>
                        <tbody>
                        {
                            this.state.trucks.map((items =>
                                <tr className="ResultRow__normalRow"><td>{items.name}</td><td>{items.capacity}</td><td>{items.deliveries ? (<p>Available</p>) : (<p>On duty</p>)}</td></tr>
                            ))
                        }
                        </tbody>
                    </table>
                    <div className="LoginForm">
                    <form onSubmit={this.onSubmit} onChange={this.onChange}>
                        <input placeholder="truckname" id="truckname" />
                        <input placeholder="capacity" id="capacity" />

                        <button type="submit" className="login">Add Truck</button>
                    </form>
                    </div>
                </div>
            );
        }

        return null;
    }

}

export default TruckTable;