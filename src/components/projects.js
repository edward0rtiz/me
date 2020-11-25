import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: 'url(images/Datafolio.jpg)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://t67-ptp-recosystem.herokuapp.com/">Place To Pay recommender System</a></h3>
                                            <span>Application</span>
                                            <p className="icon">
                                                {/*<span><a href="#"><i className="icon-share3" /></a></span> */}
                                                <span><a href="https://t67-ptp-recosystem.herokuapp.com/"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="https://github.com/edward0rtiz/team67-ptp"><i className="icon-github" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: 'url(images/commodoro.png)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://www.linkedin.com/pulse/development-full-stack-web-application-commodoro-edward-a-ortiz/">Commodoro</a></h3>
                                            <span>Web Application</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/edward0rtiz/commodoro"><i className="icon-eye" /> 30</a></span>
                                                <span><a href="https://github.com/edward0rtiz/commodoro"><i className="icon-github" /> 52</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{ backgroundImage: 'url(images/img-3.PNG)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/edward0rtiz/AirBnB_clone_v4">AirBnB Clone application</a></h3>
                                            <span>Web Application</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/edward0rtiz/AirBnB_clone_v4"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="https://github.com/edward0rtiz/AirBnB_clone_v4"><i className="icon-github" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                                <div className="project" style={{ backgroundImage: 'url(images/img-4.png)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://gist.github.com/edward0rtiz/07eae60a13d3a46c91fc38c4f6d90b6b">Hyperparameter Optimization model GPyOpt</a></h3>
                                            <span>Machine Learning model</span>
                                            <p className="icon">
                                                <span><a href="https://gist.github.com/edward0rtiz/07eae60a13d3a46c91fc38c4f6d90b6b"><i className="icon-eye" /> 54</a></span>
                                                <span><a href="https://gist.github.com/edward0rtiz/07eae60a13d3a46c91fc38c4f6d90b6b"><i className="icon-github" /> 4</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: 'url(images/img-5.png)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://gist.github.com/edward0rtiz/e980d565aad9853a4a9cc2ae2e20be10">Time series forecasting model with TensorFlow</a></h3>
                                            <span>Machine Learning model</span>
                                            <p className="icon">
                                                <span><a href="https://gist.github.com/edward0rtiz/e980d565aad9853a4a9cc2ae2e20be10"><i className="icon-share3" />120</a></span>
                                                <span><a href="https://gist.github.com/edward0rtiz/e980d565aad9853a4a9cc2ae2e20be10"><i className="icon-github" /> 10</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: 'url(images/img-6.PNG)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/edward0rtiz/Clustering_in_SCM/blob/master/battle_of_neighbors/Battle%20of%20neighboors%20week%205%20presentation.pdf">Machine Learning Clusterization model</a></h3>
                                            <span>Machine Learning model</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/edward0rtiz/Clustering_in_SCM/blob/master/battle_of_neighbors/Battle%20of%20neighboors%20week%205%20presentation.pdf"><i className="icon-eye" /> 100</a></span>
                                                <span><a href="https://github.com/edward0rtiz/Clustering_in_SCM/blob/master/battle_of_neighbors/Battle%20of%20neighboors%20week%205%20presentation.pdf"><i className="icon-github" /> 49</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
                            </div>
        </div>*/}
                    </div>
                </section>
            </div>
        )
    }
}