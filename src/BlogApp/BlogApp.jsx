import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogPosts from './db1.json';
import './BlogApp.css';
import Header from '../components/common/Header/Header.jsx';
import "../components/common/Header/Header.css"

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogPosts.posts);
  }, []);

  return (
    <>
      <Header/>
      <div className="blog-title">
        <h1>SANDARSAKA BLOGS</h1>
      </div>
      <div className="createPost-container">
        <Link to="/create-post">
          <button className="primaryBtn">CREATE BLOG</button>
        </Link>
      </div>
      <div className="blog-container">
        <Row>
          {blogs.map((blog) => (
            <Col md={4} key={blog.id}>
              <Card className="blog-card">
                <Card.Img variant="top" src={blog.images[0]} loading='lazy' />
                <h4 className="author-name">Author: {blog.author}</h4>
                <Card.Body>
                  <h1 className="content-title">{blog.title}</h1>
                  <Card.Text>{blog.description}</Card.Text>
                  <Link to={`/blogs/${blog.id}`}>
                    <Button className="button">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default BlogList;
