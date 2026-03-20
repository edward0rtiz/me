import React from 'react'

export default function Skills() {
    return (
            <div>
                <section id="skills" className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
                                <span className="heading-meta">My Specialty</span>
                                <h2 className="colorlib-heading animate-box">My Skills</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box">
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap">
                                    <h3>Program Management, OKRs, Agile/Scrum, LEAN</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="95"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap">
                                    <h3>Jira, Confluence, Azure DevOps, GitLab</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap">
                                    <h3>Python, SQL, Flask, DjangoREST</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap">
                                    <h3>AWS, Docker, Kubernetes, CI/CD, Grafana</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-4" role="progressbar" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap">
                                    <h3>TensorFlow, Keras, Scikit-learn, Pandas</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-5" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <div className="progress-wrap">
                                    <h3>LangChain, Spec-Driven Dev, AI Workflows</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-6" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
}
