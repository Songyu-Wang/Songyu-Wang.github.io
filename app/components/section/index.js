'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Work = require('./work');
const Education = require('./education');
const Skills = require('./skills');
const Footer = require('./footer');

const Section = React.createClass({
	propTypes: {
		basics: ResumePropTypes.basics,
		work: ResumePropTypes.workSet,
		education: ResumePropTypes.educationSet,
		skills: ResumePropTypes.skillsSet
	},

	render: function () {
		const skillsContent = {
			skills: this.props.skills,
			languages: this.props.languages
		};

		return (
			<div>
			<About content={this.props.basics}/>
			<Work content={this.props.work}/>
			<Education content={this.props.education}/>
			<Footer content={this.props.basics}/>
			</div>
			);
	}
});

module.exports = Section;
