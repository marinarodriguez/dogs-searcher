import React from "react";
import "./styles.scss";
import fetchDogs from "../../services/fetchDogs";
import Homepage from "../Homepage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDogs: [],
      filter: "",
      isLoading: true,
      newDog: {
        name: "",
        age: "",
        gender: "",
        location: "",
        breed: ""
      }
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(prevState => {
      return {
        newDog: {
          ...prevState.newDog,
          [name]: value
        }
      };
    });
  }

  handleAdd() {
    fetch(`https://dogtest-c855.restdb.io/rest/dogs`, {
      method: "POST",
      body: JSON.stringify(this.state.newDog),
      headers: {
        "x-apikey": "5d0e613652556062830a46a9",
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response =>
      response.json().then(
        fetchDogs().then(data => {
          this.setState({
            dataDogs: data,
            isLoading: false
          });
        })
      )
    );
  }

  handleDelete(event) {
    this.setState({
      isLoading: true,
    })
    const id = event.target.value;
    fetch(`https://dogtest-c855.restdb.io/rest/dogs/${id}`, {
      method: "DELETE",
      headers: {
        "x-apikey": "5d0e613652556062830a46a9",
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response =>
      response.json().then(
        fetchDogs().then(data => {
          this.setState({
            dataDogs: data,
            isLoading: false
          });
        })
      )
    );
  }

  componentDidMount() {
    fetchDogs().then(data => {
      this.setState({
        dataDogs: data,
        isLoading: false
      });
    });
  }

  handleFilter(event) {
    const value = event.target.value;
    this.setState({
      filter: value
    });
  }

  render() {
    const { dataDogs, filter, isLoading, newDog } = this.state;
    return (
      <div>
        <Homepage
          dataDogs={dataDogs.filter(
            dog => filter === "" || dog.breed.includes(filter.toLowerCase())
          )}
          filter={filter}
          isLoading={isLoading}
          handleFilter={this.handleFilter}
          handleDelete={this.handleDelete}
          handleInputChange={this.handleInputChange}
          newDog={newDog}
          handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
