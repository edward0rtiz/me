import React from 'react';

const educationItems = [
  {
    id: 'software-engineering',
    title: 'Software Engineering – Computer Software Engineering',
    details:
      '18-month program with a machine learning specialization track. Project-driven model covering low and high-level programming, agile practices, and ML fundamentals including CNNs, RNNs, LSTM, regularization, and optimization techniques.',
    school: 'Holberton School',
    period: 'Jul 2019 – Jan 2021',
    color: '#e05c5c',
  },
  {
    id: 'it-project-management',
    title: 'IT Project Management',
    details:
      'Intensive program covering the full project lifecycle — initiation, planning, execution, monitoring, and closure. Focused on PMI methodologies, risk management, stakeholder alignment, and IT governance frameworks.',
    school: 'Softbank School Operator',
    period: 'Aug 2021 – Dec 2021',
    color: '#3fa7d6',
  },
  {
    id: 'bba-business',
    title: 'BBA, Business Administration and Management',
    details:
      '4-year dual-degree covering business management, supply chain, international project management, entrepreneurship, and financial analysis. Partnership between Université du Québec à Chicoutimi (Canada) and Escuela de Administración de Negocios (Colombia).',
    school: 'Université du Québec à Chicoutimi / EAN',
    period: '2009 – 2013',
    color: '#e8a838',
  },
  {
    id: 'intl-business-cert',
    title: 'International Business / Trade / Commerce',
    details:
      '6-month program on international trade practices with a focus on doing business in China. Exchanged insights with local managers on cross-cultural differences between Eastern and Western business practices.',
    school: 'China University of Mining and Technology',
    period: '2012',
    color: '#9b59b6',
  },
  {
    id: 'stanford-venture-lab',
    title: 'Stanford Venture Lab – Technology Entrepreneurship',
    details:
      'Programs covering technology entrepreneurship, sustainable product development, and design thinking. Applied lean startup principles and human-centered design to early-stage venture scenarios.',
    school: 'Stanford Venture Lab',
    period: '2013',
    color: '#5cb85c',
  },
];

function EducationCard({ item }) {
  return (
    <div style={{
      borderLeft: `4px solid ${item.color}`,
      padding: '16px 20px',
      background: 'rgba(255,255,255,0.04)',
      borderRadius: '0 6px 6px 0',
      width: '100%',
    }}>
      <h3 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '700', color: '#383535', lineHeight: '1.4' }}>
        {item.title}
      </h3>
      <p style={{ margin: '0 0 10px', fontSize: '11px', color: item.color, fontWeight: '600', letterSpacing: '0.5px' }}>
        {item.school} &nbsp;·&nbsp; {item.period}
      </p>
      <p style={{ margin: 0, fontSize: '12px', color: '#bbb', lineHeight: '1.6' }}>
        {item.details}
      </p>
    </div>
  );
}

export default function Education() {
  return (
    <div>
      <section id="education" className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div className="row animate-box">
            {educationItems.slice(0, 3).map((item) => (
              <div className="col-md-4 col-sm-6" key={item.id} style={{ marginBottom: '20px', display: 'flex' }}>
                <EducationCard item={item} />
              </div>
            ))}
          </div>
          <div className="row animate-box">
            <div className="col-md-offset-2 col-md-4 col-sm-6" style={{ marginBottom: '20px', display: 'flex' }}>
              <EducationCard item={educationItems[3]} />
            </div>
            <div className="col-md-4 col-sm-6" style={{ marginBottom: '20px', display: 'flex' }}>
              <EducationCard item={educationItems[4]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
