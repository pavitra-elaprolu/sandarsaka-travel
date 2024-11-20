import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import blogPosts from './db1.json';
import "./BlogDetail.css";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/common/Header/Header.jsx';
import "../components/common/Header/Header.css"

const BlogPostDetails = () => {
  const { id } = useParams();
  
  const blog = blogPosts.posts.find((post) => post.id === id);
  console.log("blog",blog)
  console.log("bloglikes",blog.likes)

  const [likes, setLikes] = useState(blog.likes);
  const blogid = blog.id;
  console.log(blogid)
  

  const handleLikes = async () => {
    try {
      const updatedLikes = likes + 1;
      await axios.put(`http://localhost:5000/posts/${blogid}`, {
        ...blog,
        likes: updatedLikes
      });
      setLikes(updatedLikes);
    } catch (err) {
      console.log("error while updating likes",err);
    }
  };

  return (
    <>
    <Header/>
    <div className="blog-details">
      <Card className="person-blog-card">
        <Carousel>
          {blog.images.map((image, index) => (
            <Carousel.Item key={index}>
              <Card.Img variant="top" src={image} className="person-thumbnail" />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Text className="content-title">{blog.title}</Card.Text>
          <Card.Text className="blog-content">{blog.content}</Card.Text>
          <div className="blog-actions">
            <Button variant="success" onClick={handleLikes}>Likes({likes})</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default BlogPostDetails;
