'use strict';

const React = require('react');
const Gallery = require('../gallery');

const ResumePropTypes = require('../../prop_types/resume');

const About = React.createClass({
    propTypes: {
        content: ResumePropTypes.basics
    },

    render: function () {
        return (
            <section id='about'>
            <div className='row'>
            <div className='two columns'>
            <img className='profile-pic' src={this.props.content.picture} alt={this.props.content.name}/>
            </div>
            <div className='ten columns main-col'>
            <h2>About Me</h2>
            {this.props.content.summary.map(function (content, index) {
                return (
                    <p key={index}>
                    {content}
                    </p>
                    );
            })}
            <div className="row" style={{width:'50%'}}>
            <div className='columns'>
            <h2>Certifications</h2>
            <Gallery />
            </div>
            </div>
            <br/>
            <div className='row'>
            <div className='columns contact-details'>
            <h2>Contact Details</h2>
            <p className='address'>
            <a href={`skype:${this.props.content.phone}`}>
            <span>{this.props.content.phone}</span>
            </a>
            <br/>
            <a href={`mailto:${this.props.content.email}`}>
            <span>{this.props.content.email}</span>
            </a>
            <br/>
            <span>{this.props.content.location.city}</span>
            &nbsp;
            <span>{this.props.content.location.countryCode}</span>
            <br/>
            </p>

            </div>
            <div className='columns download'>
            <p>&nbsp;
            <a href='../../public/Songyu_Wang_Resume.pdf' className='button' target="_blank">
            <i className='fa fa-download'></i>
            Download Resume (.pdf)
            </a>
            <br/>
            <a href='../../public/Songyu_Wang_Resume.docx' className='button' target="_blank">
            <i className='fa fa-download'></i>
            Download Resume (.docx)
            </a>
            </p>
            </div>
            </div>

            </div>


            </div>
            </section>
            );
    }
});

module.exports = About;
