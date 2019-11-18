import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { githubLink,
  stackoverflowLink,
  linkedinLink,
  instagramLink } from '../utils/links'
import Clock from './clock'

export default class DefaultPage extends React.Component {
    render() {
        return (
            <div className="Default-header">
            <Clock></Clock>
              <p>
                &lt; Still in progress /&gt;
              </p>
              <p>&darr;</p>
              <div className="follow-me-conatiner">
                <a
                  className="Default-link"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="follow-me" icon={['fab', 'github']} />
                </a>
                <a
                  className="Default-link"
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="follow-me" icon={['fab', 'linkedin']} />
                </a>
                <a
                  className="Default-link"
                  href={stackoverflowLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="follow-me" icon={['fab', 'stack-overflow']} />
                </a>
                <a
                  className="Default-link"
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="follow-me" icon={['fab', 'instagram']} />
                </a>
                <a
                  className="Default-link"
                  href="https://docs.google.com/document/d/e/2PACX-1vTsr0vpPrxHTgxwXGyOdNgSnufh2Pgdum9iEs_XzRACad1meQiLLXG9ZM8qk3W6RxffTjtFqRhkRLHw/pub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="follow-me" icon="database" size="1" />
                </a>
                </div>
            </div>
        )
    }
}