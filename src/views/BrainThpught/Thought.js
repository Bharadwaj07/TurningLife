import React from 'react'
import ThoughtNavBar from 'components/Navbars/ThoughtNavBar'
import ThoughtHeader from 'components/Headers/ThoughtHeader'
import { Container ,Row,Col} from 'reactstrap'

 function Thought() {
    return (
        <>
        <ThoughtNavBar/>
        <div className="wrapper">
            {/* <ThoughtHeader/> */}
            <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Lorem Ipsum!</h2>
              </Col>
            </Row>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg4.jpg") + ")"
                    }}
                  >
                  </div>
                </Col>
                <Col md="5">
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  
                </Col>
              </Row>
              <Row>
            
                <Col md="6">
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  
                </Col>
                <Col md="5">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg4.jpg") + ")"
                    }}
                  >
                  </div>
                  
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        </div>
        </>
    )
}
export default Thought;