import {Form} from 'react-bootstrap'
import './index.css'
import { useRef } from 'react'

function App() {
  const searchInput = useRef(null)
  const handleSearch = (event) =>{
    event.preventDefault();
    console.log(searchInput.current.value)
  } 


  const handleSelection = (selection) =>{
    searchInput.current.value = selection
  }

  return (
    <div className='container'>
     <h1 className='title'>Image Search</h1>
     <div className="search-section">
      <Form onSubmit={handleSearch}><Form.Control className='search-input' type="search" placeholder="go ahead search something...."  ref={searchInput}/></Form>
     
     </div>
     <div className='filters'>
      <div onClick={()=> handleSelection('Hire')}>Hire</div>
      <div onClick={()=> handleSelection('birds')}>birds</div>
      <div onClick={()=> handleSelection('cat')}>Cat</div>
      <div onClick={()=> handleSelection('me')}>Me</div>
     </div>
    </div>
  )
}

export default App
