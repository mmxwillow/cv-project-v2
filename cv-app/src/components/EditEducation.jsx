function EditEducation({education, updateEducationItem, deleteEducationItem, addEducationItem}) {
    return (
        <div className="education">
            <h2>Education</h2>
            {
                education.map((item) => {
                    return (
                        <div key={item.id}>
                            <input type="text" onChange={updateEducationItem} name="schoolName" placeholder="School name" value={item.name}/>
                            <input type="text" onChange={updateEducationItem} name="studyTitle" placeholder="Study title" value={item.title}/>
                            <input type="text" onChange={updateEducationItem} name="date" placeholder="Date" value={item.date}/>
                            <button onClick={deleteEducationItem}>Delete section</button>
                        </div>
                    )
                })
            }
            <button onClick={addEducationItem}>Add Education</button>
        </div>
    )
}

export default EditEducation;