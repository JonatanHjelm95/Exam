/* eslint-disable no-throw-literal */
const URL = "https://jmhdat3.com/eksamen";
//const URL = "http://localhost:8080/ca3";
function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

class ApiFacade {
    //Insert utility-methods from a latter step (d) here
    makeOptions(method, addToken, body) {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && this.loggedIn()) {
            opts.headers["x-access-token"] = this.getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    login = async (user, pass) => {
        const options = this.makeOptions("POST", false, { username: user, password: pass });
        // return fetch(URL + "/api/login", options)
        //     .then(handleHttpErrors) 
        //     .then(res => this.setToken(res.token))
        //     .then(res => res)
        const res = await fetch(URL +"/api/login", options)
        const json = await res.json();
        if (!res.ok) {
            throw { status: res.status, fullError: json }
        }
        this.setToken(json.token)
        sessionStorage.setItem("user", JSON.stringify({ Username: json.username }));
        return json;
    }

    register = async (user, pass, type) => {
        const options = this.makeOptions("POST", false, { username: user, password: pass, userRole: type });
        const res = await fetch(URL +"/api/register", options)
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        const json = await res.json();
        this.setToken(res.token)
        return json;
    }

    addDriver = async(name) => {
        const options = this.makeOptions("POST", false, { name: name });
        const res = await fetch(URL +"/api/driver/add", options)
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        const json = await res.json();
        return json;
    }


    getTrucks = async () => {
        let data
        await fetch(URL + "/api/trucks/all")
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                data = jsonData
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
            return data
    }

    getDeliveries = async () => {
        let data
        await fetch(URL + "/api/deliveries/all")
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                data = jsonData
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
            return data
    }

    getDrivers = async () => {
        let data
        await fetch(URL + "/api/drivers/all")
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                data = jsonData
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
            return data
    }


    CheckUserRole = async (username) => {
        let data
        await fetch(URL + "/api/check/"+username)
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                data = jsonData
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
            return data
    }

    CheckIfAdmin(list) {
        return fetch(URL + "/api/check/admin")
            .then(function (response) {
                return response.json();
            }).then(res => { list.unshift(res) })
    }

    TryGet() {
        return fetch(URL + "/api/products/all").then(res => res.json())

    }

    setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    loggedIn = () => {
        const loggedIn = this.getToken() != null;
        return loggedIn;
    }
    logout = async () => {
        await localStorage.removeItem("jwtToken");
    }

}
const facade = new ApiFacade();

export default facade;
