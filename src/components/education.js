import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section class="colorlib-education" data-section="education">
                    <div class="colorlib-narrow-content">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span class="heading-meta">Education</span>
                                <h2 class="colorlib-heading animate-box">Education</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div class="fancy-collapse-panel">
                                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingOne">
                                                <h4 class="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Software Engineering in Machine Learning
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                <div class="panel-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <p>2 year software engineering with a path of specialization (I chose machine learning) curriculum based in a disruptive educational model where each day
                                                            the students face real projects according the skills of the tech industries covering low and high languages programming, enhancing the analytical
                                                            skills, soft skills, problem solving skills, agile skills and programming skills. I learned about Convolutional networks, RNNs, LSTM, Adam, Dropout, BatchNorm,
                                                            Xavier/He initialization, and more. I am currently exploring the development of an MVP using ML techniques
                                                            using either RNN of timeseries forecasting. I've done recently a time forecasting predictor for currency exchange taking as study case BTC vs USD</p>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p style={{ textAlign: 'center' }} ><strong>Holberton School<br />2019 - 2021</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingTwo">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Data Science professional Certificate
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div class="panel-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <p> Intensive 3-month program where I learned by doing real projects that solve real-world data challenges scoped by today’s leading companies and public sector organizations.
                                                            From, linear regression, to PostreSQL, Pandas, Clustering analysis to deployment in AWS, I honed my skills to solve a real AI challenge, by developing a recommender system for
                                                            a private company in LATAM that handle online payments.</p>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p style={{ textAlign: 'center' }} ><strong>Correlation ONE - Ministry of Technology and Communications<br />2020</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingThree">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Deep Learning Specialization
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <p>In five courses, I complemented my education at Holberton School by building more neural networks. Case studies made: healthcare, autonomous driving, sign language
                                                                reading, music generation, and natural language processing. Also made these cass using Python and TensorFlow.</p>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p style={{ textAlign: 'center' }} ><strong>Deeplearning AI - coursera<br />2020</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingFour">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Data Science Specialization
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                <div class="panel-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <p>Program of 9 coursers where I covered the first steps in Data Science. Numpy, SQL, Pandas, regression models and developing real case studies with Watson platform.</p>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p style={{ textAlign: 'center' }} ><strong>IBM - coursera<br />2019-2020</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingFive">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Bachelor in Business Management
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                                <div class="panel-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <p>4 year program where I covered Business management processes, SCM, international project management, entrepreneurship and financial analysis for private companies.</p>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p style={{ textAlign: 'center' }} ><strong>Uninversite Du Quebec a Chicoutimi - EAN University<br />2009-2013</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingSix">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">International Business Professional Certificate
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                                <div class="panel-body">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <p>6 month program in partnership with Universite Du Quebec a Chicoutimi where I learned the processes involved for doing busines in China as an Expat.
                                                                Also I interchanged information with managers in China on how through their culture they are effective managers and differentiate with west management practices.</p>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p style={{ textAlign: 'center' }} ><strong>China University of Mining and Technology<br />2012</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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