import React, {useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap'
const AddMovie = ({addFilm, length}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [rate, setRate] = useState('');
  const [PosterUrl, setTPosterUrl] = useState('');

//   console.log({title, description, rate, PosterUrl});
//   const handleChangeTitle = (e) => {
    // console.log(e)
    // setTitle(e.tarrget.value)
//   };
const handleAddFilm=()=>{
    let id= length+1
    let newMovie = {id, title, description, rate, PosterUrl}
    addFilm(newMovie)
    handleClose()
}
  return (
    <div>
        {" "}
        <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie to Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Movie's title"value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Movie's description"  value={description} onChange={(e)=>setdescription(e.target.value)}/>
        <Form.Group className="mb-3" controlId="rate">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="1 --->5" value={rate} onChange={(e)=>setRate(e.target.value)}/>
        <Form.Group className="mb-3" controlId="posterUrl">
        <Form.Label>Poster URL</Form.Label>
        <Form.Control type="text" placeholder="Movie's posterUrl" value={PosterUrl} onChange={(e)=>setTPosterUrl(e.target.value)}/>
      </Form.Group>
      </Form.Group>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddFilm}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie