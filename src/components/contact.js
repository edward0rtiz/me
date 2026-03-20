import React from 'react'

const contactItems = [
  {
    id: 'phone',
    icon: 'icon-phone',
    label: 'Phone',
    display: '+57-311-508-1966',
    href: 'tel:+573115081966',
  },
  {
    id: 'email',
    icon: 'icon-mail',
    label: 'Email',
    display: 'edwardarmandoortiz@gmail.com',
    href: 'mailto:edwardarmandoortiz@gmail.com',
  },
  {
    id: 'location',
    icon: 'icon-map',
    label: 'Location',
    display: 'Bogota, Colombia / Remote',
    href: null,
  },
  {
    id: 'linkedin',
    icon: 'icon-linkedin2',
    label: 'LinkedIn',
    display: 'linkedin.com/in/ortizedward',
    href: 'https://www.linkedin.com/in/ortizedward/',
  },
];

export default function Contact() {
  return (
    <div>
      <section id="contact" className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
              <span className="heading-meta">Get in Touch</span>
              <h2 className="colorlib-heading">Contact</h2>
            </div>
          </div>
          <div className="row animate-box">
            {contactItems.map((item) => (
              <div className="col-md-3 col-sm-6" key={item.id} style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '32px 20px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  height: '100%',
                }}>
                  <i className={item.icon} style={{ fontSize: '36px', color: '#2c98f0', marginBottom: '14px' }} />
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', marginBottom: '8px' }}>
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} target={item.id === 'linkedin' ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ fontSize: '15px', color: '#383535', wordBreak: 'break-all', lineHeight: '1.5' }}>
                      {item.display}
                    </a>
                  ) : (
                    <span style={{ fontSize: '15px', color: '#383535', lineHeight: '1.5' }}>{item.display}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
