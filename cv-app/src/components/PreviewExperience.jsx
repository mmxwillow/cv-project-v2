function PreviewExperience({experience}) {
    return (
        <div className="experience">
            <h2>Experience</h2>
            {experience.map((item) => {
                return(
                    <div className="experience-item" key={item.id}>
                       <div>{item.company}</div>
                       <div>{item.position}</div>
                       <div>{item.date}</div>
                       <div>{item.description}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default PreviewExperience;