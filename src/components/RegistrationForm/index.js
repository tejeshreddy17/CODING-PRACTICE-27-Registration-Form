// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    secondname: '',
    firstnameblur: false,
    lastNameblur: false,
    submittingForm: false,
  }

  onblurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstnameblur: true})
      console.log('blurred')
    } else {
      this.setState({firstnameblur: false})
    }
  }

  onChangingInputFirstName = event => {
    this.setState({firstname: event.target.value, firstnameblur: false})
  }

  onblurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameblur: true})
      console.log('blurred')
    } else {
      this.setState({lastNameblur: false})
    }
  }

  onChangingInputLastName = event => {
    this.setState({secondname: event.target.value, lastNameblur: false})
  }

  correctCredentials = () => {
    this.setState({submittingForm: true})
  }

  onsubmitting = event => {
    event.preventDefault()
    const {firstname, secondname} = this.state
    if (firstname !== '' && secondname !== '') {
      this.correctCredentials()
    } else if (firstname === '' && secondname === '') {
      this.setState({firstnameblur: true, lastNameblur: true})
    } else if (firstname === '') {
      this.setState({firstnameblur: true})
    } else if (secondname === '') {
      this.setState({lastNameblur: true})
    }
  }

  submittingAnotherForm = () => {
    this.setState({
      firstname: '',
      secondname: '',
      firstnameblur: false,
      lastNameblur: false,
      submittingForm: false,
    })
  }

  render() {
    const {firstnameblur, lastNameblur, submittingForm} = this.state
    return (
      <div className="background-card">
        <h1 className="heading">Registration </h1>
        <div className="form-card">
          {submittingForm ? (
            <>
              <img
                alt="success"
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              />
              <p className="message-style">Submitted Successfully</p>
              <button onClick={this.submittingAnotherForm} type="button">
                Submit Another Response
              </button>
            </>
          ) : (
            <form className="form-style">
              <label htmlFor="firstName"> FIRST NAME</label>
              <input
                onBlur={this.onblurFirstName}
                onChange={this.onChangingInputFirstName}
                id="firstName"
                className={
                  firstnameblur ? 'input-box blurred-box ' : 'input-box'
                }
                type="text"
                placeholder="First Name"
              />
              {firstnameblur ? <p>Required</p> : ''}
              <label htmlFor="lastName"> LAST NAME</label>
              <input
                id="lastName"
                onBlur={this.onblurLastName}
                onChange={this.onChangingInputLastName}
                className={
                  lastNameblur ? 'input-box blurred-box ' : 'input-box'
                }
                type="text"
                placeholder="Last Name"
              />
              {lastNameblur ? <p>Required</p> : ''}
              <button onClick={this.onsubmitting} type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
