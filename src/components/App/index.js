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
      isDisabled: true,
      newDog: {
        name: "",
        age: "",
        gender: "",
        location: "",
        breed: ""
      }
    };
    this.getDog = this.getDog.bind(this);
    this.handleEditDog = this.handleEditDog.bind(this);
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(prevState => {
      return {
        newDog: {
          ...prevState.newDog,
          [name]: value
        }
      };
    })
    if (this.state.newDog.name !== "" && this.state.newDog.breed !== "") {
      this.setState({
        isDisabled: false,
      })
    }
    else if (this.state.newDog.name === "" || this.state.newDog.breed === ""){
      this.setState({
        isDisabled: true,
      })
    }
    ;
  }

  handleAdd = () => {
    fetch(`https://dogtest-c855.restdb.io/rest/dogs`, {
      method: "POST",
      body: JSON.stringify(this.state.newDog),
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
  getDog(id) {
    const { dataDogs } = this.state;
    return dataDogs.find(dog => dog._id === id);
  }
  handleEditDog(event) {
    const id = event.target.value;
    this.setState({
      isLoading: true
    });
    fetch(`https://dogtest-c855.restdb.io/rest/dogs/${id}`, {
      method: "PATCH",
      body: JSON.stringify(this.state.newDog),
      headers: {
        "x-apikey": "5d0e613652556062830a46a9",
        "Accept": "application/json",
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


  handleDelete = event => {
    this.setState({
      isLoading: true
    });
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

  handleFilter = event => {
    const value = event.target.value;
    this.setState({
      filter: value
    });
  }

  compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  render() {
    const { dataDogs, filter, isLoading, newDog, isDisabled } = this.state;
    return (
      <div>
        <Homepage
          dataDogs={dataDogs
            .sort(this.compare)
            .filter(
              dog => filter === "" || dog.breed.includes(filter.toLowerCase())
            )}
          filter={filter}
          isLoading={isLoading}
          handleFilter={this.handleFilter}
          handleDelete={this.handleDelete}
          handleInputChange={this.handleInputChange}
          newDog={newDog}
          handleAdd={this.handleAdd}
          isDisabled={isDisabled}
          getDog={this.getDog}
          handleEditDog={this.handleEditDog}
        />
      </div>
    );
  }
}

export default App;
