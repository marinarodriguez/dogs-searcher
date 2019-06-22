import React from 'react';
import './styles.scss';
import Homepage from "../Homepage";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataDogs:[],
      filter: '',
      isLoading: true,
     }
     this.handleFilter=this.handleFilter.bind(this);
     this.handleDelete=this.handleDelete.bind(this);
  }

  handleDelete(event){
    const id = event.target.value
    fetch(`https://dogtest-c855.restdb.io/rest/dogs/${id}`, {
      method: "DELETE",
      headers: {
        'x-apikey' : '5d0e613652556062830a46a9',
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  componentDidMount(){
    fetch('https://dogtest-c855.restdb.io/rest/dogs', {
      method: "GET",
      headers: {
        'x-apikey' : '5d0e613652556062830a46a9',
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data=> {
      this.setState({
        dataDogs: data,
      })
    })
  }
  handleFilter(event){
    const value = event.target.value;
    this.setState({
      filter: value
    })
  }

  render() { 
    const { dataDogs, filter } = this.state;
    return ( <div>
      <Homepage dataDogs={dataDogs.filter(dog => filter === "" || dog.breed.includes(filter.toLowerCase()) )} filter={filter} handleFilter={this.handleFilter} handleDelete={this.handleDelete}/>
    </div> );
  }
}
 

export default App;
