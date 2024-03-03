import React from 'react';
import './about.css';
import aboutImg from '../images/img1.jpg';
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import Person1 from '../images/person1.jpg'
function About() {
  return (
    <div className='about-page'>
      <header className='mt-0 w-100'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light display-2'>About</h1>
        </div>
      </header>

      <div className='container my-5'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores necessitatibus quaerat non, explicabo consectetur laudantium vel dicta consequatur eum quo aspernatur officia? Tempore doloribus enim quas nam aspernatur est nostrum sint facere iste nesciunt nemo explicabo, vitae aut impedit, voluptatem reiciendis corrupti similique laudantium! Quaerat itaque ipsum quo eaque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus recusandae ducimus saepe consequuntur velit dolorem similique assumenda, asperiores voluptatum vel modi minima omnis a quia quo molestiae. Incidunt cumque ea odit optio, iusto voluptas ratione vitae obcaecati temporibus fuga minima provident aut quasi autem expedita quia dolores at placeat perferendis. Nisi qui earum inventore soluta explicabo, labore ut ea nemo reprehenderit minus repellat, impedit atque vel debitis autem veritatis optio laboriosam officiis molestiae maxime repellendus beatae tempora sapiente! Quam!</p>

        <div className='row'>
          <div className='col-lg-6'>
            <img src={aboutImg} className='img-fluid my-4' alt="" />
          </div>
          <div className='col-lg-6'>
            <img src={aboutImg} className='img-fluid my-4' alt="" />
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse nulla, debitis similique, ad nihil architecto maiores doloribus quis blanditiis distinctio. Praesentium, harum atque fuga nobis eius laboriosam totam consequuntur officia dolorem quo velit incidunt fugiat at maxime, molestias esse dignissimos accusantium enim debitis. Id et quidem sapiente adipisci dolor ipsa amet tempora porro atque perferendis. Libero odio, molestiae aliquam modi facere, veritatis, illo labore deserunt ducimus ipsam rem ipsum perspiciatis eveniet maiores excepturi. Architecto sit ducimus inventore officia porro vel? Accusantium recusandae nisi autem iste suscipit distinctio, libero rem.</p>
      </div>
      <div className="content-section container p-5">
        <div className="row ">
          <div className="col-lg-6 deta">
            <Card className="h-100 shadow">
              <CardBody>
                <div className="p-4">
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                  </CardText>
                </div>
              </CardBody>
              <CardFooter className="d-flex align-items-center">
                <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                <CardTitle className="text-success">John Mike<br />Designation</CardTitle>
              </CardFooter>
            </Card>
          </div>
          <div className="col-lg-6 deta">
            <Card className="h-100 shadow">
              <CardBody>
                <div className="p-4">
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                  </CardText>
                </div>
              </CardBody>
              <CardFooter className="d-flex align-items-center">
                <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                <CardTitle className="text-success">John Mike<br />Designation</CardTitle>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;