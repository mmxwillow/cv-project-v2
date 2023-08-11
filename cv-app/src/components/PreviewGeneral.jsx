function PreviewGeneral({general}) {
    return (
        <div className="general">
            <h2 className="name">{general.name}</h2>
            <div className="phone">{general.number}</div>
            <div className="email">{general.email}</div>
        </div>
    )
}

export default PreviewGeneral;