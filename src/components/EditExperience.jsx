function EditExperience({experience, updateExperienceItem, deleteExperienceItem, addExperienceItem}) {
    return (
        <div className="experience">
        <h2>Experience</h2>
        {
            experience.map((item) => {
                return (
                    <div key={item.id} data-key={item.id}>
                        <input type="text" onChange={updateExperienceItem} name="company" placeholder="Company name" value={item.company} maxLength={50}/>
                        <input type="text" onChange={updateExperienceItem} name="position" placeholder="Position" value={item.position} maxLength={50}/>
                        <input type="text" onChange={updateExperienceItem} name="description" placeholder="Description" value={item.description}/>
                        <input type="text" onChange={updateExperienceItem} name="date" placeholder="Date" value={item.date} maxLength={20}/>
                        <button onClick={deleteExperienceItem}>Delete section</button>
                    </div>
                )
            })
        }
        <button onClick={addExperienceItem}>Add Experience</button>
    </div>
    )
}

export default EditExperience;