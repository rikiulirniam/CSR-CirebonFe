import React from "react"

const Buttons = ({text, icon, bgColor, color, focus, focusText, border, }) => {
    return(
        <React.Fragment>
            <button type="button" className= {`${color} bg-color-${bgColor} border border-color-textGray focus:ring-4 focus:outline-none focus:${focus} focus:${focusText   } font-medium rounded-lg text-sm px-4 py-3 mt-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2`}>
                <img src={icon} alt="" />
                {text}
            </button>
        </React.Fragment>
    )
}

export default Buttons