import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { countryOptions } from '../data';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class AddTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);

    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
  }

  // UPDATE START DATE
  handleChangeStartDate(date) {
    this.setState({
      startDate: date
    });
  }

  // UPDATE END DATE
  handleChangeEndDate(date) {
    this.setState({
      endDate: date
    });
  }

  render(){
    // console.log('AddTrip Props', this.props)

    const animatedComponents = makeAnimated();
    console.log('AddTrip state', this.state)
    return(
      <div>

        <form onSubmit={this.handleLogin}>
          <div>
            Title
            <input type="text" name="title" />
          </div>
          <div>
            Start Date
            <DatePicker selected={this.state.startDate}
            onChange={this.handleChangeStartDate} />
          </div>
          <div>
            End Date
            <DatePicker selected={this.state.endDate}
            onChange={this.handleChangeEndDate} />
          </div>
          <div>
            Country

            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              // defaultValue={countryOptions[4]}
              isMulti
              options={countryOptions}
            />
          </div>
          <input type="submit" value="Done" />
        </form>
      <Link to="/">Go back</Link>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return { trips: store.trips }
}

export default connect(mapStateToProps)(AddTrip)
