import React, { Component } from "react";
import "./styles.css";

export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 0,
      year: 0,
      date: 0,
      monthInput: 0,
      yearInput : 0
    };
  }
  showCalender = (month, year) => {
    let result = [];
    if (month > 0 && year) {
      let rowCalender = 6;
      let d = new Date();
      d.setMonth(month - 1);
      d.setDate(1);
      d.setFullYear(year);
      let dayUnderMonth = d.getDay();
      let dayOfMonth = this.dayOfMonth(month, year);
      if (dayOfMonth + dayUnderMonth <= 35) {
        rowCalender = 5;
      }

      for (let i = 0; i < rowCalender; i++) {
        result.push(
          <tr key={i + 1}>
            {this.showWeek(
              i,
              rowCalender,
              dayUnderMonth,
              dayOfMonth,
              month,
              year
            )}
          </tr>
        );
      }
      if (result === []) {
        result = "";
      }
      return result;
    }
  };

  componentWillMount() {
    var d = new Date();
    this.setState({
      month: d.getMonth() + 1,
      year: d.getFullYear(),
      date: d.getDate(),
    });
  }

  showWeek = (i, rowCalender, dayUnderMonth, dayOfMonth, month, year) => {
    let result = [];
    for (let j = 0; j < 7; j++) {
      let date = i * 7 + j + 1 - dayUnderMonth;
      if (date <= 0) {
        let dateBefore = 0;
        if (month === 1) {
          dateBefore = this.dayOfMonth(12, year - 1);
        } else {
          dateBefore = this.dayOfMonth(month - 1, year);
        }

        result.push(
          <th
            key={date}
            className="hideDate"
            onClick={() => this.onClick(dateBefore + date, month - 1, year)}
          >
            {dateBefore + date}
          </th>
        );
      }
      if (date > 0 && date <= dayOfMonth) {
        let styleDay = "";
        var d = new Date();
        if (date === this.state.date) {
          styleDay = "style_date";
        }

        if (
          date === d.getDate() &&
          month === d.getMonth() + 1 &&
          year === d.getFullYear()
        ) {
          styleDay = "style_today";
          if (date === this.state.date) {
            styleDay = "style_today style_date";
          }
        }
        result.push(
          <th
            key={date}
            className={styleDay}
            onClick={() => this.onClick(date, month, year)}
          >
            {date}
          </th>
        );
      }
      if (date > dayOfMonth) {
        result.push(
          <th
            key={date}
            className="hideDate"
            onClick={() => this.onClick(date - dayOfMonth, month + 1, year)}
          >
            {date - dayOfMonth}
          </th>
        );
      }
    }
    return result;
  };

  onClick = (date, month, year) => {
    console.log(date);

    if (month === 13) {
      this.setState({
        month: 1,
        year: year + 1,
        date,
      });
    }
    if (month === 0) {
      this.setState({
        month: 12,
        year: year - 1,
        date,
      });
    }
    if (month > 0 && month < 13) {
      this.setState({
        month,
        year,
        date,
      });
    }
  };

  dayOfMonth = (month, year) => {
    switch (month) {
      case 1:
        return 31;
      case 2:
        if (year % 4 === 0) {
          return 29;
        } else {
          return 28;
        }

      case 3:
        return 31;
      case 4:
        return 30;
      case 5:
        return 31;
      case 6:
        return 30;
      case 7:
        return 31;
      case 8:
        return 31;
      case 9:
        return 30;
      case 10:
        return 31;
      case 11:
        return 30;
      case 12:
        return 31;
      default:
        break;
    }
  };

  onChangeDate = (event) => {
    let value = parseInt(event.target.value);
    let name = event.target.name;
    this.setState({
      [name]: value,
      date: 0,
    });
    
  };

  onSubmit=(event)=>{
      event.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.month}</h2>
        <h2>{this.state.year}</h2>
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Month :</label>
            <input
              type="number"
              name="month"
              onChange={this.onChangeDate}
              value={this.state.month}
            ></input>
            <label>Year :</label>
            <input
              type="number"
              name="year"
              onChange={this.onChangeDate}
              value={this.state.year}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>

        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Sunday</th>
              <th>monday</th>
              <th>thurday</th>
              <th>tuesday</th>
              <th>friday</th>
              <th>wennday</th>
              <th>Satuday</th>
            </tr>
          </thead>
          <tbody>{this.showCalender(this.state.month, this.state.year)}</tbody>
        </table>
      </div>
    );
  }
}
