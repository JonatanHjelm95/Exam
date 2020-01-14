import React from 'react';
import facade from '../apiFacade'

class DriverTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drivers: [],
            name: '',
        };

    }
    componentDidMount() {
        this.getData()
    }

    async getData() {
        let drivers = await facade.getDrivers()
        this.setState({
            drivers: drivers
        })
    }

    onChange(e) {
        e.preventDefault();
        let name = document.getElementById('drivername').value
        facade.addDriver(name)
    }
    onChange = e => {
        e.persist();
        this.setState({ name: e.target.value });
    };

    handleKeyPress(event) {
        // [Enter] should not submit the form when choosing an address.
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
    render() {
        if (this.state.drivers && this.state.drivers.length > 0) {
            return (
                <div>
                    <table className="ResultTable"><thead>
                        <tr><th>name</th><th>Truck</th><th>Capacity</th><th>status</th></tr></thead>
                        <tbody>
                            {
                                this.state.drivers.map((items =>
                                    <tr className="ResultRow__normalRow"><td>{items.name}</td><td>{items["truck"] ? (<p>{items["truck"]["name"]}</p>) : (<p>N/A</p>)}</td><td>{items["truck"] ? (<p>{items["truck"]["capacity"]}</p>) : (<p>N/A</p>)}</td><td>{!items["truck"] ? (<p>Available</p>) : (<p>On duty</p>)}</td></tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="LoginForm">
                    <form onSubmit={this.onSubmit} onChange={this.onChange}>
                        <input placeholder="Drivername" id="drivername" />
                        <button type="submit" className="login">Add Driver</button>
                    </form>
                    </div>
                </div>
            );
        }

        return null;
    }

}

export default DriverTable;