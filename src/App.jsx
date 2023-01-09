import React,{useState} from 'react'
import './style.css'

function App() {
  //usestate
  const[btn,setBtn]=useState([])
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[adress,setAdress]=useState("")
  const[adress2,setAdress2]=useState("")
  const[city,setCity]=useState("")
  const[chs,setChs]=useState("")
  const[zip,setZip]=useState("")
  const[chk,setChk]=useState("")

  //funtion
  function clkbtn(){
    setBtn([{
      email:email,
      password:password,
      adress:adress,
      adress2:adress2,
      city:city,
      zip:zip,
    }])
    console.log(
    [{
        email:email,
        password:password,
        adress:adress,
        adress2:adress2,
        city:city,
        zip:zip,
      }])
    
  }    
  

  return (
    <>
    <div>
   <div className='container' id='main'>
   <div className="row g-3" >
  <div className="col-md-6">
    <label HTMLFor="inputEmail4" className="form-label">Email</label>
    <input value={email}   onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="inputEmail4" />
  </div>  
  <div className="col-md-6">
    <label HTMLFor="inputPassword4" className="form-label">Password</label>
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" className="form-control" id="inputPassword4"  />
  </div>
  <div className="col-12">
    <label HTMLFor="inputAddress" className="form-label">Address</label>
    <input value={adress} onChange={(e)=>{setAdress(e.target.value)}} type="text" className="form-control" id="inputAddress" />
  </div>
  <div class="col-12">
    <label HTMLFor="inputAddress2" className="form-label">Address 2</label>
    <input value={adress2} onChange={(e)=>{setAdress2(e.target.value)}} type="text" className="form-control" id="inputAddress2" />
  </div>
  <div className="col-md-6">
    <label HTMLFor="inputCity" className="form-label">City</label>
    <input value={city} onChange={(e)=>{setCity(e.target.value)}} type="text" className="form-control" id="inputCity"/>
  </div>
  
  <div className="col-md-2">
    <label HTMLFor="inputZip" className="form-label">Zip</label>
    <input value={zip} onChange={(e)=>{setZip(e.target.value)}} type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input value={chk} onChange={(e)=>{setChk(e.target.value)}} className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" HTMLFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button  onClick={clkbtn} type="submit" className="btn btn-primary">Sign in</button>
  </div>
</div>
   </div>
   </div>
    </>
  )
}

export default App