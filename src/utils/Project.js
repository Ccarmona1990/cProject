import React from 'react'

const Project = ({img, techName, URL}) => {
    return (
        <>
            <a className="projectURL" href={URL}>
                <img className="projectImg" 
                    src={img}
                    alt={techName}
                />
                <h2 className="projectName"> {techName}</h2>
            </a>
        </>
    )
}

export default Project
