import './register.scss'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">

          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Hello World.</h1>
          <p>This is my new project</p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Register