import React from 'react';
import facade from '../apiFacade'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class DeliveryTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deliveries: '',
        };

    }
    componentDidMount() {
        this.getData()
    }

    async getData() {
        let deliveries = await facade.getDeliveries()
        let del = [];
        for (var i = 0; i < deliveries.length; i++) {
            let tableRow = "<tr className='ResultRow__normalRow'>";
            let deliveriesSplit = deliveries[i].split(',')
            let d1 = deliveriesSplit[1].split("=")
            tableRow += "<td>" + d1[1] + "</td>";
            let d2 = deliveriesSplit[2].split("=")
            tableRow += "<td>" + d2[1] + "</td>";
            let d3 = deliveriesSplit[3].split("=")
            tableRow += "<td>" + d3[1] + "</td>";
            tableRow += '</tr>'
            del.push(tableRow)
        }
        let res = del.join(',')
        res = res.replace(',', '');
        this.setState({
            deliveries: res
        });
    }





    render() {
        if (this.state.deliveries && this.state.deliveries.length > 0) {
            return (
                <div>
                    <table className="ResultTable"><thead>
                        <tr><th>Shipping Date</th><th>From</th><th>Destination</th></tr></thead>
                        <tbody>

                            {ReactHtmlParser(this.state.deliveries)}
                        </tbody>
                    </table>
                </div>
            );
        }

        return null;
    }

}

export default DeliveryTable;