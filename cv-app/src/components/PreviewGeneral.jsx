import PhoneIcon from "./PhoneIcon";
import EmailIcon from "./EmailIcon";

function PreviewGeneral({general}) {
    return (
        <div className="">
            <h2 className="name">{general.name}</h2>
            <div className="general">
            <div className="phone"><PhoneIcon />{general.number}</div>
            <div className="email"><EmailIcon />{general.email}</div>
            </div>
        </div>
    )
}

export default PreviewGeneral;