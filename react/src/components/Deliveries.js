import React from 'react';
import facade from '../apiFacade'
const Deliveries = () => {
    const onClick = () => {
        console.log(facade.getToken())
        /* if (tokenSplit[1] === "eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoidXNlciIsImV4cCI6MTU3ODk1MzUwMywiaWF0IjoxNTc4OTUxNzAzLCJpc3N1ZXIiOiJzZW1lc3RlcnN0YXJ0Y29kZS1kYXQzIiwidXNlcm5hbWUiOiJhZG1pbiJ9"){
            console.log("admin");
        }
        if (tokenSplit[1] === "eyJzdWIiOiJicnVnZXIiLCJyb2xlcyI6InVzZXIiLCJleHAiOjE1Nzg5NTM1MzAsImlhdCI6MTU3ODk1MTczMCwiaXNzdWVyIjoic2VtZXN0ZXJzdGFydGNvZGUtZGF0MyIsInVzZXJuYW1lIjoiYnJ1Z2VyIn0" ){
            console.log("user");
        } */
    }
    return (
        <div>
            <button onClick={onClick}>hej</button>
            <p>
                Deliveries</p>
        </div>
    );
}

export default Deliveries;