import check from './images/cheque.png'
import './stylesheets/Success.css'

const Success = ({message}: any)  => {
  return (
    <div className='success'>
      <img src={check} alt="" />
        <p>{message}</p>
    </div>
  )
}

export default Success