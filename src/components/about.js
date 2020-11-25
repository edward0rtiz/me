import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I am Project manager with 7+ years experience and software engineer in Machine Learning focused in data science 📈 I believe in enhancing project performance by transforming data into useful analysis in financial stages and strategic operations.
                                                Application of Lean methodology to develop features. Passionate and eager to engage conversations with other SWE's and C-level staff to keep transparent communication, clear information of the project goals and deliverables.</p>
                                            <p>I am also a contributor at analytics-vidhya with articles related to Machine Learning and Data Science. Check out my publications <br />In my personal space I love to do ciclyng 🚲, climbing 🐐 and travel ✈️. My next destination will be chimborazo 🗻 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-trello" />
                                    </span>
                                    <div className="desc">
                                        <h3>Product Management </h3>
                                        <p>All projects needs to be managed based on the complexity and the impact to shareholders. Its not just PMI, Scrum or Agile. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-code-outline" />
                                    </span>
                                    <div className="desc">
                                        <h3>Programming</h3>
                                        <p>Background in C programming but I decided to focus my time coding in Pyhton and use Django, DjangoREST and DASH</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-bar-graph" />
                                    </span>
                                    <div className="desc">
                                        <h3>Data Science</h3>
                                        <p>By doing a lot financial analysis in Excel the next step was become a wizard in SQL, Pandas, and Numpy</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-lab2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Machine Learning</h3>
                                        <p>Modeling and expreiment DNN, CNN and RNN using Tensorflow. Currently working with kubeflow and mlflow to implement automated pipelines</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>DevOps</h3>
                                        <p>Honestly, after doing BI engineering DevOps is my other passion programming. Currently using Docker, K8s for my ML projects and AWS to deploy monolith otherwise GCP for K8s</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-cog2" />
                                    </span>
                                    <div className="desc">
                                        <h3>FrontEnd</h3>
                                        <p>I use ocassionaly DASH for make analytics dashboards and ReactJS for some small projects like this website. However my passsion is Machine Learning
                                            and Data Science ,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<div class="row">
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div class="hire">
                            <h2>I'm crazy to do things <br />Over 2.3k commits done, 291151+ lines of code and 28 repos </h2>
                            <a href="#" class="btn-hire">contact me</a>
                        </div>
                    </div>
        </div>*/}
                {/*<div id="colorlib-counter" class="colorlib-counters" style={{ backgroundImage: `url(images / cover_bg_1.jpg)` }} data-stellar-background-ratio="0.5">
                    <div class="overlay"></div>
                    <div class="colorlib-narrow-content">
                        <div class="row">
                        </div>
                        <div class="row">
                            <div class="col-md-3 text-center animate-box">
                                <span class="colorlib-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50"></span>
                                <span class="colorlib-counter-label">Cups of coffee</span>
                            </div>
                            <div class="col-md-3 text-center animate-box">
                                <span class="colorlib-counter js-counter" data-from="0" data-to="356" data-speed="5000" data-refresh-interval="50"></span>
                                <span class="colorlib-counter-label">Projects</span>
                            </div>
                            <div class="col-md-3 text-center animate-box">
                                <span class="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50"></span>
                                <span class="colorlib-counter-label">Clients</span>
                            </div>
                            <div class="col-md-3 text-center animate-box">
                                <span class="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
                                <span class="colorlib-counter-label">Partners</span>
                            </div>
                        </div>
                    </div>
        </div>*/}
            </div >

        )
    }
}