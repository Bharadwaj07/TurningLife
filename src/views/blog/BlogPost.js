import React from 'react';
import BlogNavBar from 'components/Navbars/BlogNavBar';
import {Container,Row,Col} from 'reactstrap'
 function BlogPost() {
    return (
        <>
            <BlogNavBar/>
            <div className="wrapper">
                <div className="section section-about-us">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">What is Lorem Ipsum?</h2>
                            </Col>
                        </Row>
                            
                            <div className="section-story-overview">
                            <div
                                    className="image-container"
                                    style={{
                                    backgroundImage:
                                        "url(" + require("assets/img/bg4.jpg") + ")"
                                    }}
                                ></div>
                            <div className='section'>
                                <h3>
                                    So what does the new record for the lowest level of winter
                                    ice actually mean
                                </h3>
                                    <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use
                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
                                    from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the 
                                    word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
                                    "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on 
                                    the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
                                    comes from a line in section 1.10.32.
                                    </p>
                                    <h3>
                                    So what does the new record for the lowest level of winter
                                    ice actually mean
                                    </h3>
                                    <p>
                                        The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue 
                                        whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, 
                                        it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, 
                                        there’s huge variety of the state of the ice.For a start, it does not automatically follow that a record amount of ice 
                                        will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight 
                                        sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear 
                                        pattern of decline, decade-by-decade.
                                        The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever 
                                        happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always 
                                        be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety 
                                        of the state of the ice.
                                    </p>
                            </div>
                            
                            </div>
                        </Container>
                </div>
            </div>
        </>
    )
}
export default BlogPost;