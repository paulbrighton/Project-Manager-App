const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login success')
      return {
        ...state,
        authError: null
      }
    case 'LOGOUT_SUCCESS':
      console.log('signout sucess')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('signup sucess')
      return {
        ...state,
        authError: 'Login success'
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer
