'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const SocialMedia = require('../social_media');

const Footer = React.createClass({
    propTypes: {
        content: ResumePropTypes.basics
    },

    render: function () {
        return (
            <footer>
            <div className='row'>
            <div className='twelve columns'>
            <SocialMedia ulClass='social-links' profiles={this.props.content.profiles}/>
            <ul className='copyright'>
            <li>
            This site is developed in React.js and modified based on&nbsp;
            <a
            href='https://github.com/suddi/suddi.github.io'reformat
            title='Sudharshan Ravindran'
            target='_blank'
            rel='noopener noreferrer'>
            Sudharshan Ravindran's project
            </a> from the original design of Ceevee from&nbsp;
            <a
            href='http://www.styleshout.com/'
            title='Styleshout'
            target='_blank'backgroundbackground
            rel='noopener noreferrer'>
            Styleshout
            </a>
            </li>
            </ul>
            <ul>
            <div>
            Header and favicon.ico image from&nbsp;
            <a style={{ backgroundColor:'black',color:'white',textDecoration:'none',padding:'4px 6px',fontFamily:'-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',fontSize:'12px',fontWeight:'bold',lineHeight:'1.2',display:'inline-block',borderRadius:'3px' }} href='https://unsplash.com/@iriser?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge' target='_blank' rel='noopener noreferrer' title='Download free do whatever you want high-resolution photos from Irina Iriser'>
            <span style={{ display:'inline-block',padding:'2px 3px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={ '0 0 32 32' } style={{ height:'12px',width:'auto',position:'relative',verticalAlign:'middle',top:'-2px',fill:'white'}}>
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
            </span><span style={{ display:'inline-block',padding:'2px 3px' }}>Irina Iriser</span></a>
            </div>
            </ul>
            </div>
            <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open'/>
            </a>
            </div>
            </div>
            </footer>
            );
    }
});

module.exports = Footer;
