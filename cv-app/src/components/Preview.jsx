import PreviewGeneral from "./PreviewGeneral";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

function Preview({cv}){
    return (
        <>
        <PreviewGeneral general={cv.general}/>
        <PreviewEducation education={cv.education}/>
        <PreviewExperience experience={cv.experience}/>
        </>
    )
}

export default Preview;