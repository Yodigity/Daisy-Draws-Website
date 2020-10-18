import React from "react";
import { Row, Col, Image, Table, Tooltip, OverlayTrigger } from "react-bootstrap";

import PageLayout from "../Components/PageLayout";

export const Resume = () => {

  
  return (
    //Sort out Cols and Rows
    <PageLayout>
      <div className='resume-basic-info '>
        <Row>
          <Col>
            <h1 className='resume-name'>Daisy Peng</h1>
          </Col>
        </Row>
        <Row>
          <Col>Email: pengmingdan@hotmail.com</Col>
        </Row>
      </div>

      {/* About */}
      <Row>
        <Col>
          <h1>
            <u>About</u>
          </h1>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className='my-2 mx-auto'>
        <Col>
          <p>
            Artist with 5 years of related work experience, as well as portfolio
            of varied accomplishments, including referenced articles,
            exhibitions, and academic achievements. Possess a strong sense of
            artistry and forward-thinking that is consistently displayed across
            all art pieces.
          </p>
        </Col>
      </Row>
      {/* Work Experience */}
      <Row>
        <Col>
          <h1>
            <u>Experience</u>
          </h1>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className='my-2'>
        <Col className='my-auto'>
          <h2>ARTIST </h2>
          <p className='mb-0'>Freelance</p>
          <p>Oct 2019 - Present</p>
        </Col>
        <Col>
          <ul className='my-auto'>
            <li>
              - Design, develop, and deliver art pieces to clients according to
              specifications{" "}
            </li>

            <li>
              - Produce stylized and realistic photos for 3 online websites
            </li>
          </ul>
        </Col>
      </Row>
      <hr />
      {/* <Row>
        <Col className='my-auto'>
          <h2>Waitress</h2>
          <p className='mb-0'>Langzhou Beef Noodle Bar</p>
          <p>Oct 2019 - April 2020</p>
        </Col>
        <Col>
          <ul className='my-auto'>
            <li>- Provide the perfect service experience for every Guest</li>
            <li>
              - Ensure the Guest feels important and welcome in the restaurant
            </li>
            <li>- Must know all food liquor, beer, wine and retail offered</li>
            <li>- Apply positive suggestive sales approach to guide Guests</li>
          </ul>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className='my-auto'>
          <h2>Housekeeper</h2>
          <p className='mb-0'>Perisher Ski Resort</p>
          <p>Oct 2019 - April 2020</p>
        </Col>
        <Col>
          <ul className='my-auto'>
            <li>- Inventoried stock to ensure adequate supplies.</li>
            <li>
              - Assigned workers their duties and inspected work for conformance
              to prescribed standards.
            </li>
            <li>
              - Supervised work activities of cleaning personnel to ensure
              clean, orderly attractive rooms.
            </li>
            <li>
              - Conducted in-service training of other employees to explain
              housekeeping work procedures.
            </li>
          </ul>
        </Col>
      </Row>{" "} */}

      {/* Skills */}
      {/* <Row>
        <Col>
          <h1>
            <u>Skills</u>
          </h1>
        </Col>
        <Col />
        <Col />
      </Row>
      <Row>
        <Col />
        <Col>
          <ul>
            <Row>
              <li>
                <Image
                  src='../Images/Resume-Icons/AutoCAD-icon.jpeg'
                  roundedCircle
                  height='50'
                />{" "}
                AutoCAD
              </li>
            </Row>
            <Row>
              <li>
                <Image
                  src='../Images/Resume-Icons/Photoshop-Icon.png'
                  roundedCircle
                  height='50'
                />{" "}
                Photoshop
              </li>
            </Row>
            <Row>
              <li>
                <Image
                  src='../Images/Resume-Icons/UG-Icon.jpeg'
                  roundedCircle
                  height='50'
                />{" "}
                UG
              </li>
            </Row>
          </ul>
        </Col>
        <Col>
          <Col></Col>
          <ul>
            <Row>
              <li>
                <Image
                  src='../Images/Resume-Icons/Adobe-Illustrator-Icon.png'
                  roundedCircle
                  height='50'
                />{" "}
                Adobe Illustrator
              </li>
            </Row>
            <Row>
              <li>
                <Image
                  src='../Images/Resume-Icons/Inventor-Icon.png'
                  roundedCircle
                  height='50'
                />
                Inventor
              </li>
            </Row>

            <li>Something else</li>
          </ul>
        </Col>
        <Col></Col>
      </Row> */}


<Row>
        <Col>
          <h1>
            <u>Skills</u>
          </h1>
        </Col>
        <Col />
        <Col />
      </Row>

<Row className="my-3">
  <Col >
      <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip className="skill-tooltip">
    AutoCAD
  </Tooltip>}
  >
    <Image
        src='../Images/Resume-Icons/AutoCAD-icon.jpeg'
        roundedCircle
        height='50'
      /> 
      </OverlayTrigger>
      </Col>
     
     <Col>
        <OverlayTrigger placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip className="skill-tooltip">
    Inventor
  </Tooltip>}>
        <Image
                  src='../Images/Resume-Icons/Inventor-Icon.png'
                  roundedCircle
                  height='50'
                />
        </OverlayTrigger>
    </Col>
   
   <Col>
        <OverlayTrigger placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip className="skill-tooltip">Photoshop</Tooltip>}>
  <Image
                  src='../Images/Resume-Icons/Photoshop-Icon.png'
                  roundedCircle
                  height='50'
                />
        </OverlayTrigger>
       </Col>

       <Col>
        <OverlayTrigger placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip className="skill-tooltip">Adobe Illustrator</Tooltip>}>
  <Image
      src='../Images/Resume-Icons/Adobe-Illustrator-Icon.png'
      roundedCircle
      height='50'
    />
        </OverlayTrigger>
     </Col>
    
    <Col>
      <OverlayTrigger 
      placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip className="skill-tooltip">
    UG
  </Tooltip>}>
  <Image
                  src='../Images/Resume-Icons/UG-Icon.jpeg'
                  roundedCircle
                  height='50'
                />
      </OverlayTrigger>
      </Col>
      </Row>

      <hr />
      {/* Education */}
      <Row className='mb-2'>
        <Col>
          <h1>
            <u>Education</u>
          </h1>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className='my-2'>
        {/* <Col className='p-0'></Col> */}

        <Row lg={6} className='mx-auto'>
          <Col>
            <h4>Mechanical Design</h4>
          </Col>
          <Col></Col>
          <Col>
            <h5>Dalian Vocational & Technical College</h5>

            <h6>Sept 2009-June 2012</h6>
          </Col>
        </Row>
      </Row>
    </PageLayout>
  );
};
