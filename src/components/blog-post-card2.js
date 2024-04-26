import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.label}</span>
        </div>
        <h1 className="blog-post-card2-text1">{props.title}</h1>
        <span className="blog-post-card2-text2">{props.description}</span>
        <button type="button" className="button">
          {props.button}
        </button>
        <div className="blog-post-card2-container2"></div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  author: 'Jane Doe',
  label: 'ENTERPRISE',
  imageAlt: 'image',
  when: '3 days ago',
  profileAlt: 'profile',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  button: 'Button',
  profileSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
}

BlogPostCard2.propTypes = {
  author: PropTypes.string,
  label: PropTypes.string,
  imageAlt: PropTypes.string,
  when: PropTypes.string,
  profileAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  profileSrc: PropTypes.string,
}

export default BlogPostCard2
