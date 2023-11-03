import React from "react"
import PropTypes from "prop-types"

const Speaker = ({ speaker }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-md h-96">
            <img src={speaker.picture} alt={speaker.name} className="w-40 h-40 rounded-full object-fill"/>
            <h3 className="text-xl font-bold text-center mt-8 text-mcn-blue">{speaker.name}</h3>
        </div>
    )
}

Speaker.propTypes = {
    speaker: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    }).isRequired
}

export default Speaker