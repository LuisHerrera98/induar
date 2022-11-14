import error from './images/error.png'
import './stylesheets/Error.css'

const Error = ({message}: any)  => {
  return (
    <div className='success'>
      <img src={error} alt="" />
        <p>{message}</p>
    </div>
  )
}

export default Error