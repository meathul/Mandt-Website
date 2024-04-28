import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <button>
            <Link to={`/home`}>
                Login
            </Link>
        </button>
    </div>
  )
}

export default Login