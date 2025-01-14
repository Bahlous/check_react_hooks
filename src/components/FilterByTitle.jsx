import React from 'react'
import { Form } from 'react-bootstrap'
const FilterByTitle = ({searchTitle,setsearchTitle}) => {
  return (
    <div>

        <Form.Control type="text" placeholder="search by title..." value={searchTitle} onChange={(e)=>setsearchTitle(e.target.value)}/>
        </div>
  )
}

export default FilterByTitle