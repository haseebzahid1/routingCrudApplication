import React,{useState}  from 'react'
import { Link } from 'react-router-dom'



const AddUser = () => {

    const [user, setUser] = useState({
        firstName:'',
        username:'',
        email:'',
        phone:'',
        website:'',
    });


  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
          <h2 className='text-center mb-4'>Add A User</h2>
          <form>
              <div className="mb-3">
              <input type="text" class="form-control form-control-lg" placeholder="Enter Your Name" name="First Name" value={firstName} />
              </div>
              <div className="mb-3">
              <input type="text" class="form-control form-control-lg" placeholder="Enter Your User Name" name="User Name" value={userName} />
              </div>
              <div className="mb-3">
              <input type="text" class="form-control form-control-lg" placeholder="Enter Your Email Address" name="Email Address" value={email} />
              </div>
              <div className="mb-3">
              <input type="text" class="form-control form-control-lg" placeholder="Enter Your Phone Number" name="Phone Number" value={phone} />
              </div>
              <div className="mb-3">
              <input type="text" class="form-control form-control-lg" placeholder="Enter Your Website Name" name="Website Name" value={website} />
              </div>

              <Link to='/' className='btn btn-primary btn-block'>Add User</Link>
          </form>
      </div>
    </div>
  )
}

export default AddUser