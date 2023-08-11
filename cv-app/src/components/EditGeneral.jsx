function EditGeneral({general, updateGeneral}) {
    return (
        <div>
            <input type="text" value={general.name} name="name" placeholder="Name" onChange={updateGeneral}/>
            <input type="email" value={general.email} name="email" placeholder="Email" onChange={updateGeneral}/>
            <input type="text" value={general.number} name="number" placeholder="Phone number" onChange={updateGeneral}/>
        </div>
    )
}

export default EditGeneral;