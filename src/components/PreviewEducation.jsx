function PreviewEducation({education}) {
    return (
        <div className="education">
        <h2>Education</h2>
        {education.map((item) => {
            return(
                <div className="education-item" key={item.id}>
                   <div>{item.name}</div>
                   <div>{item.title}</div>
                   <div>{item.date}</div>
                </div>
            )
        })}
    </div>
    )
}

export default PreviewEducation;