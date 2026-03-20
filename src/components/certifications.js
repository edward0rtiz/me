import React from 'react';

const certificationItems = [
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    color: '#e8a838',
  },
  {
    id: 'cspo',
    title: 'Certified Scrum Product Owner® (CSPO®)',
    issuer: 'Scrum Alliance',
    year: '2022',
    color: '#3fa7d6',
  },
  {
    id: 'csm',
    title: 'Certified ScrumMaster® (CSM®)',
    issuer: 'Scrum Alliance',
    year: '2021',
    color: '#3fa7d6',
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning Specialization',
    issuer: 'Deeplearning.AI — Coursera',
    year: '2020',
    color: '#e05c5c',
  },
  {
    id: 'efset-c2',
    title: 'EF SET English Certificate C2 Proficient',
    issuer: 'EF Education First',
    year: '2020',
    color: '#5cb85c',
  },
  {
    id: 'ds4a',
    title: 'Data Scientist Certificate',
    issuer: 'DS4A / Correlation One',
    year: '2020',
    color: '#9b59b6',
  },
  {
    id: 'ibm-ds',
    title: 'Data Science Professional Certificate',
    issuer: 'IBM — Coursera',
    year: '2019',
    color: '#1f78d1',
  },
  {
    id: 'datacamp-python',
    title: 'Python Programmer',
    issuer: 'DataCamp',
    year: '2019',
    color: '#05998c',
  },
  {
    id: 'datacamp-analyst',
    title: 'Data Analyst with Python',
    issuer: 'DataCamp',
    year: '2019',
    color: '#05998c',
  },
];

export default function Certifications() {
  return (
    <div>
      <section id="certifications" className="colorlib-education" data-section="certifications">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
              <span className="heading-meta">Credentials</span>
              <h2 className="colorlib-heading animate-box">Certifications</h2>
            </div>
          </div>
          <div className="row animate-box" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
            {certificationItems.map((cert) => (
              <div className="col-xs-12 col-sm-4 col-md-4" key={cert.id} style={{ marginBottom: '12px', display: 'flex' }}>
                <div style={{
                  borderLeft: `3px solid ${cert.color}`,
                  padding: '10px 14px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '0 4px 4px 0',
                  height: '100%',
                }}>
                  <p style={{ margin: 0, fontWeight: '600', fontSize: '13px', lineHeight: '1.4', color: '#383535' }}>
                    {cert.title}
                  </p>
                  <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#aaa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{cert.issuer}</span>
                    <span style={{
                      background: cert.color,
                      color: '#fff',
                      borderRadius: '3px',
                      padding: '1px 6px',
                      fontSize: '10px',
                      fontWeight: '700',
                      marginLeft: '8px',
                      whiteSpace: 'nowrap',
                    }}>{cert.year}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
