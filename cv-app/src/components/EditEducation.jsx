function EditEducation({education, updateEducationItem, deleteEducationItem, addEducationItem}) {
    return (
        <div className="education">
            <h2>Education</h2>
            {
                education.map((item) => {
                    return (
                        <div key={item.id} data-key={item.id}>
                            <input type="text" onChange={updateEducationItem} name="name" placeholder="School name" value={item.name} maxLength={50}/>
                            <input type="text" onChange={updateEducationItem} name="title" placeholder="Study title" value={item.title} maxLength={50}/>
                            <input type="text" onChange={updateEducationItem} name="date" placeholder="Date" value={item.date} maxLength={20}/>
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