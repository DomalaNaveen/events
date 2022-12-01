import './index.css'

const registrationStatus = {
  yetToRegister: YET_TO_REGISTER,
  registered: REGISTERED,
  registrationClosed: REGISTRATION_CLOSED,
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const noActiveEventNow = () => (
    <p className="no-active-para">
      Click on an Event, to view its registration details
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1>You have already registered for this event</h1>
    </div>
  )

  const renderYetToRegisteredView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="register-para">
        A live performance brings so much to your relationship with dance.
        seeing the live dance can often make you fall totally love with the
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.registrationClosed:
        return renderRegistrationsClosedView()
      case registrationStatus.yetToRegister:
        return renderYetToRegisteredView()
      case registrationStatus.registered:
        return renderRegisteredView()
      default:
        return noActiveEventNow()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
