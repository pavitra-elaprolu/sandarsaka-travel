import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios';
import './BlogCreation.css';
import Header from '../components/common/Header/Header.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateBlog = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const data = {
    author: author,
    title: title,
    images: images,
    description: description,
    content: content,
    likes: 0
  };

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:5000/posts", data);
        /* run the json server on port 5000 only */
        toast.success("Blog created successfully!");
    } catch (err) {
        toast.error("Error creating blog. Please try again.");
    }
  };

  return (
    <>
    <Header/>
    
    <Container className="blog-form-container">
      <h1 className="my-4 text-center blog-form-title">Create Your Blog</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formAuthor">
          <Form.Label column sm={2} className="blog-form-label">
            Author
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="blog-form-input"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formTitle">
          <Form.Label column sm={2} className="blog-form-label">
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="blog-form-input"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDescription">
          <Form.Label column sm={2} className="blog-form-label">
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="blog-form-input"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formContent">
          <Form.Label column sm={2} className="blog-form-label">
            Content
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="blog-form-textarea"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formImages">
          <Form.Label column sm={2} className="blog-form-label">
            Images
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              onChange={(e) => setImages([...images, e.target.value])}
              className="blog-form-input"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-4">
          <Col className="text-center">
            <Button
              variant="warning"
              onClick={handleClick}
              className="blog-form-button"
            >
              Post
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>

    <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default CreateBlog;
