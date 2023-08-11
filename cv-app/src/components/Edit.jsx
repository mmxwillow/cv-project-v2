import EditGeneral from "./EditGeneral";
import EditEducation from "./EditEducation";
import EditExperience from "./EditExperience";

function Edit({cv}){
    return (
        <>
        <EditGeneral general={cv.general}/>
        <EditEducation education={cv.education}/>
        <EditExperience experience={cv.experience}/>
        </>
    )
}

export default Edit;