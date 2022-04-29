import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      tinggi: null,
      berat: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const tinggi = parseInt(this.refs.tinggi.value);
    const berat = parseInt(this.refs.berat.value);

    var result = berat / (tinggi / 100 * tinggi / 100)

    if (result < 18.5) {
      var status = "Anda kekurangan berat badan"
    } else if ((result > 18.5) && (result <= 24.9)) {
      var status = "Berat badan anda Normal (ideal)"
    } else if ((result > 24.9) && (result <= 29.9)) {
      var status = "Anda kelebihan berat badan"
    } else if (result > 30) {
      var status = "Anda mengalami Kegemukan (obesitas)"
    }

    this.setState({ tinggi, berat, result, status });

    this.refs.tinggi.value = null;
    this.refs.berat.value = null;
  }

  renderResult() {
    const { tinggi, berat, result, status } = this.state;
    if (this.state.result) {
      return (
        <div>
          <br />
          <p className="alert alert-success">
            {"BMI = " + result}
            <br />
            {"Status = " + status}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App-header">
        <div className="container col-md-6 pt-3">
          <div className="card-header text-center">
          <h2>Body Mass Index Calculator</h2>
          </div>
          <div class="card-body">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label> Tinggi (cm) : </label>
              <input type="number" ref="tinggi" className="form-control" />
              <label> Berat (kg) : </label>
              <input type="number" ref="berat" className="form-control" />
              <hr />
              <div className='d-flex align-items-end justify-content-end'>
                <button className="btn btn-primary form-control">Hitung</button>
              </div>
            </form>
          </div>
          <div class="card-footer">
            {this.renderResult()}
          </div>
        </div>
      </div>
    );
  }
}


export default App;