import React from 'react';
import {Card,CardBody,CardImg,Row,Col, CardTitle, CardText, Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import BlogData from './BlogData';

 function Blog(props) {
     const ChnagePage = () => props.history.push('blog')
    const blogArticle = BlogData.map(blog =>{
        return(
            <Col>
                <Card>
                    <CardImg top width="100%" src={require(`assets/img/${blog.img}`)} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="text-center">{blog.title}</CardTitle>
                        <CardText>
                            {blog.shortDiscription}
                        </CardText>
                        
                        
                        <div className="blog-auther  text-center">
                        <Button className="btn-link" color="info" 
                            onClick={ChnagePage}
                        >
                            See more
                        </Button> {"  "}
                            
                        </div>
                        <small>{blog.author}</small>{"  "}
                            <small>{blog.date_of_publish}</small> 
                        
                    </CardBody>
                </Card>
            </Col>
        )
    })
    return (
        <>
            <Row>
                {blogArticle}
            </Row>
        </>
    )
}
export default withRouter(Blog);