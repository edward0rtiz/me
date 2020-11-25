import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-blog" data-section="blog">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Read</span>
                                <h2 className="colorlib-heading">Recent publications</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <a href="https://medium.com/analytics-vidhya/time-series-forecasting-of-exchange-currency-with-tensor-flow-f475927a68b8" className="blog-img"><img src="images/blog_1.jpeg" className="img-responsive" alt="image_blog1" /></a>
                                    <div className="desc">
                                        <span><small>September 21, 2020 </small> | <small> Forecasting with TensorFlow </small> {/*| <small> <i className="icon-bubble3" /> 4</small>*/}</span>
                                        <h3><a href="https://medium.com/analytics-vidhya/time-series-forecasting-of-exchange-currency-with-tensor-flow-f475927a68b8">Time series forecasting of exchange currency with Tensor Flow</a></h3>
                                        <p>Case of study for the single step implementation of a time series forecast model using RNN-LSTM.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="blog-entry">
                                    <a href="https://medium.com/analytics-vidhya/achieve-bayesian-optimization-for-tuning-hyper-parameters-df1aad6cb49a" className="blog-img"><img src="images/blog_2.png" className="img-responsive" alt="image_blog2" /></a>
                                    <div className="desc">
                                        <span><small>August 26, 2020 </small> | <small> Machine Learning </small> {/*| <small> <i className="icon-bubble3" /> 4</small>*/}</span>
                                        <h3><a href="https://medium.com/analytics-vidhya/achieve-bayesian-optimization-for-tuning-hyper-parameters-df1aad6cb49a">Achieve Bayesian optimization for tuning hyper-parameters</a></h3>
                                        <p>A comprehensive guide to understanding hyper-parameter optimization using Bayesian optimization with GPyOpt library in deep neural networks</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <a href="https://medium.com/analytics-vidhya/understanding-transfer-learning-as-an-methodology-for-efficiency-in-training-cnns-models-1322d316173a" className="blog-img"><img src="images/blog_3.png" className="img-responsive" style={{ width: '40%', height: '120%' }} alt="image_blog3" /></a>
                                    <div className="desc">
                                        <span><small>July 03, 2020 </small> | <small> Inspiration </small> {/*| <small> <i className="icon-bubble3" /> 4</small>*/}</span>
                                        <h3><a href="https://medium.com/analytics-vidhya/understanding-transfer-learning-as-an-methodology-for-efficiency-in-training-cnns-models-1322d316173a">Understanding Transfer Learning as an methodology for efficiency in training CNN’s models</a></h3>
                                        <p>Transfer Learning practical application. Case study CFAR-10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}