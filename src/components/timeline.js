import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Recent work experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Machine Learning Engineer <span>2019-present</span></h2>
                                                <ul>
                                                    <li>Machine Learning programs: Developed ML models with convolutional neural architectures as well as implementation of regularization
                                                        and optimization techniques for face recognition and object verification. </li>
                                                    <li>IntelligentWarehouse: Unsupervised model that shows the optimal location to set a warehouse based on client consumption in order
                                                    to reduce shipping times and gas consumption. Case of study a vegetable warehouse in Toronto, Canada. This model used scrapping
                                                        from foursquare API and it is implemented in jupyter notebook. </li>
                                                    <li>Commodoro: Web app that serves as professional network community for coffee farmers. (ReactJS, DjangoREST, PostgreSQL, Docker) </li>
                                                    <li>Airbnb-clone: Web app implementation of Airbnb platform in Python and SqlAlchemy</li>
                                                    <li>ptp recommender system: Recommender system for profiling merchant and users. MVP for place to pay.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Management PM-FI Consultant<span>2013-present</span></h2>
                                                <p>Worked with clients in strategic business development, business valuation, financial evaluation for -investment and advice on effective
                                                    project management some of the clients I've worked are:</p>
                                                <ul>
                                                    <li>ABA Colombia: Development of strategic and design financial business plan for 2015 over a budget of 1M. For 2019 I developed the
                                                        valuation plan for the acquisition of the company by FCB & FIRE</li>
                                                    <li>IntelligentWarehouse: Unsupervised model that shows the optimal location to set a warehouse based on client consumption in order
                                                    to reduce shipping times and gas consumption. Case of study a vegetable warehouse in Toronto, Canada. This model used scrapping
                                                        from foursquare API and it is implemented in jupyter notebook. </li>
                                                    <li>Genval: Mentorship in financial valuation for the program "Productive Migration" in cooperation with CCB (Bogota Chamber of Commerce) </li>
                                                    <li>Responsify: Implementation of financial strategics, VC fundraising plan.</li>
                                                    <li>National University of Colombia: Controlling and monitoring over two projects along other public institutions in measuring the impact
                                                    of entrepreneurship by refugees in Colombia and quality of K12 education in Bogota public schools. Reduced the deliverable deadlines
                                                        in 15%.</li>
                                                    <li>SK Othila: Accelerated the management strategy of the company by training the C-level staff as well as developed their financial
                                                        budget leading an optimization of 30% in their expenses.</li>
                                                    <li>1400gr Agency: Designed the financial plan of expansion business plan for LATAM.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Partner and Strategy Director at Whitecam Studio <span>2017-2019</span></h2>
                                                <p>Managed the financial and strategic activities ensuring the company core operations. Execution of operations, production processes in video
                                                    content projects and 10 RPAS operations (commercial and industrial).</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-6">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Director of Operations at Forward Fare Coffee Company LLC <span>2015-2017</span></h2>
                                                <p>Managed supply chain and operations for purchases and importation of specialty coffee from coffee farmers in Colombia to United States.
                                                Audited over 30 coffee farms using a model that monitored the sustainability of farms, thus creating a fair and long term trade and
                                                relationship between the company and the farmer. Due the logistic process implemented the company generated an additional 5% revenue
                                                    over the projected</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}