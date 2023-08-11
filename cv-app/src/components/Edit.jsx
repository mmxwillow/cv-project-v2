import EditGeneral from "./EditGeneral";
import EditEducation from "./EditEducation";
import EditExperience from "./EditExperience";

function Edit({cv, updateGeneral, updateExperienceItem, deleteExperienceItem, addExperienceItem, updateEducationItem, deleteEducationItem, addEducationItem}){
    return (
        <>
        <EditGeneral general={cv.general} updateGeneral={updateGeneral}/>
        <EditEducation education={cv.education} updateExperienceItem={updateExperienceItem} deleteExperienceItem={deleteExperienceItem} addExperienceItem={addExperienceItem} />
        <EditExperience experience={cv.experience} updateEducationItem={updateEducationItem} deleteEducationItem={deleteEducationItem} addEducationItem={addEducationItem} />
        </>
    )
}

export default Edit;