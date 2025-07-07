import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className={`navbar-logo text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.title}</div>
      <ul className="navbar-links">
        <li><a href="/" className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Home</a></li>
        {/*<li><a href="/about" className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.about}</a></li>*/}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`} >
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable light mode</label>
    </div>
    </nav>

  )
}

Navbar.prototypes = {
    title : PropTypes.string.isRequried,
    About : PropTypes.string.isRequried
}

Navbar.defaultProps = {
    title : 'Set title here',
    About : 'Set About Us'
};