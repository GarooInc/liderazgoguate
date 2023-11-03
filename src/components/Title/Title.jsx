import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ text, color = 'text-white', textAlign = 'text-right', textsecondary }) => {
    return (
        <h1 className={`text-4xl md:text-5xl ${color} uppercase my-6 ${textAlign}`}>
            {text}
            {textsecondary && <span className="font-bold text-mcn-skyblue"> {textsecondary}</span>}
        </h1>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    textAlign: PropTypes.string
}

export default Title
