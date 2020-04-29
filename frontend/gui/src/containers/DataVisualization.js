import React from "react";

class DataVisualization extends React.Component{
    state = {
        data: []
    }
    
    fetchData(){
        fetch("https://covid-19-data.p.rapidapi.com/totals?format=undefined", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "SIGN-UP-FOR-KEY"
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });
    
    }

    render(){
    return <p>{this.state.data}</p>
    }
}
    
export default DataVisualization;