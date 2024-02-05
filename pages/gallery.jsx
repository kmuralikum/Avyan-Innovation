
import { Nav, Tab } from "react-bootstrap";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const Gallery = () => {

  return (
    <Layout header={3}>
      <PageBanner pageTitle={"Gallery"} />
      
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-area pt-40 pb-70">
        <div className="container">
          {/*====== Start Tab  Section ======*/}
          <Tab.Container defaultActiveKey={"descrptions"}>
            <div className="row">
              <div className="col-xl-8 ml-300 pl-130 mt-20">
                <div className=" description-wrapper mt-30 wow fadeInUp">
                  <div className="description-tabs mb-10">
                    <Nav as={"ul"} className="nav">
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          href="#descrptions"
                          eventKey="descrptions"
                          >
                          Description
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          href="#information"
                          eventKey="information"
                          >
                          Additional Information
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          href="#reviews"
                          eventKey="reviews"
                          >
                          Reviews
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
            </div>
            <Tab.Content className="tab-content wow fadeInUp mt-20">
              <Tab.Pane
              className="tab-pane fade"
              eventKey="descrptions"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src="assets/images/gallery/gallery-1.jpg"
                          alt="Gallery Image"
                        />
                        <div className="hover-overlay">
                          <a
                            href="assets/images/gallery/gallery-1 .jpg"
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src="assets/images/gallery/gallery-2.jpg"
                          alt="Gallery Image"
                        />
                        <div className="hover-overlay">
                          <a
                            href="assets/images/gallery/gallery-2.jpg"
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src="assets/images/gallery/gallery-3.jpg"
                          alt="Gallery Image"
                        />
                        <div className="hover-overlay">
                          <a
                            href="assets/images/gallery/gallery-3.jpg"
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane
              className="tab-pane fade"
              eventKey="information"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src="assets/images/gallery/gallery-4.jpg"
                          alt="Gallery Image"
                        />
                        <div className="hover-overlay">
                          <a
                            href="assets/images/gallery/gallery-4.jpg"
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src="assets/images/gallery/gallery-5.jpg"
                          alt="Gallery Image"
                        />
                        <div className="hover-overlay">
                          <a
                            href="assets/images/gallery/gallery-5.jpg"
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                  {/*=== Single Gallery Item ===*/}
                  <div className="single-gallery-item mb-30 wow fadeInUp">
                    <div className="gallery-img">
                      <img
                        src="assets/images/gallery/gallery-6.jpg"
                        alt="Gallery Image"
                      />
                      <div className="hover-overlay">
                        <a
                          href="assets/images/gallery/gallery-6.jpg"
                          className="icon-btn img-popup"
                        >
                          <i className="far fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane
            className="tab-pane fade"
            eventKey="reviews"
            >
              <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src="assets/images/gallery/gallery-1.jpg"
                          alt="Gallery Image"
                        />
                        <div className="hover-overlay">
                          <a
                            href="assets/images/gallery/gallery-2.jpg"
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src="assets/images/gallery/gallery-2.jpg"
                          alt="Gallery Image"
                        />
                        <div className="hover-overlay">
                          <a
                            href="assets/images/gallery/gallery-2.jpg"
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src="assets/images/gallery/gallery-3.jpg"
                          alt="Gallery Image"
                        />
                        <div className="hover-overlay">
                          <a
                            href="assets/images/gallery/gallery-3.jpg"
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          {/*====== Start Tab  Section ======*/}
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Gallery;

