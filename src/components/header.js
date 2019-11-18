import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import myFace from '../assets/images/kousik.jpg'
import { githubLink,
  stackoverflowLink,
  linkedinLink,
  instagramLink } from '../utils/links'


export default class Header extends React.Component {
    render() {
        return (
        <ul className="navbar">
          <li>
            <img src={myFace} className="Header-avatar" alt="avatar" />
          </li>
          <li>
            <Link to="/">Home Sweet Home</Link>
          </li>
          <li>
            <Link to="/about-me">What about me?</Link>
          </li>
          <li>
            <Link to="/projects">little things</Link>
          </li>
          <li>
            <Link to="/my-clicks">click click!</Link>
          </li>
          <li>
            <Link to="/others">other things...</Link>
          </li>
          <ul>
            <a
              className="Header-link"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon className="follow-me" icon={['fab', 'github']} />
              </li>
            </a>
            <a
              className="Header-link"
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
              <FontAwesomeIcon className="follow-me" icon={['fab', 'linkedin']} />
              </li>
            </a>
            <a
              className="Header-link"
              href={stackoverflowLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
              <FontAwesomeIcon className="follow-me" icon={['fab', 'stack-overflow']} />
              </li>
            </a>
            <a
              className="Header-link"
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
              <FontAwesomeIcon className="follow-me" icon={['fab', 'instagram']} />

              </li>
            </a>
            <a
              className="Header-link"
              href="https://docs.google.com/document/d/e/2PACX-1vTsr0vpPrxHTgxwXGyOdNgSnufh2Pgdum9iEs_XzRACad1meQiLLXG9ZM8qk3W6RxffTjtFqRhkRLHw/pub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="follow-me" icon="database" size="1" />
            </a>
            </ul>
        </ul>
        )
    }
};