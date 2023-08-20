import EditGeneral from "./EditGeneral";
import EditEducation from "./EditEducation";
import EditExperience from "./EditExperience";

function Edit({cv, updateGeneral, updateExperienceItem, deleteExperienceItem, addExperienceItem, updateEducationItem, deleteEducationItem, addEducationItem}){
    return (
        <>
        <EditGeneral general={cv.general} updateGeneral={updateGeneral}/>
        <EditEducation cv={cv} education={cv.education} updateEducationItem={updateEducationItem} deleteEducationItem={deleteEducationItem} addEducationItem={addEducationItem}/>
        <EditExperience experience={cv.experience} updateExperienceItem={updateExperienceItem} deleteExperienceItem={deleteExperienceItem} addExperienceItem={addExperienceItem} />
        </>
    )
}

export default Edit;