import { useEffect, useState } from "react";
import Nav from "../layout/Nav";
import UserSideBar from "./UserSideBar";
import NameInput from "../signup/NameInput";
import BirthInput from "../signup/BirthInput";
import GenderInput from "../signup/GenderInput";
import JobInput from "../signup/JobInput";
import EmailInput from "../signup/EmailInput";
import RegionInput from "../signup/RegionInput";
import EducationInput from "../signup/EducationInput";
import AwardInput from "../signup/AwardInput";
import SkillStackInput from "../signup/SkillStackInput";
import ProjectRecordInput from "../signup/ProjectRecordInput";
import Footer from "../layout/Footer";
import "./MyPageResume.css";
import axios from "axios";
function MyPageResume() {
    const [nickName, setNickName] = useState(null);
    const [introduction, setIntroduction] = useState(null);
    const [resumeId, setResumeId] = useState(null);
    const [name, setName] = useState(null);
    const [date, setDate] = useState(null);
    const [gender, setGender] = useState(null);
    const [job, setJob] = useState(null);
    const [city, setCity] = useState(null);
    const [district, setDistrict] = useState(null);
    const [school, setSchool] = useState(null);
    const [eduState, setEduState] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("010-1234-5678");
    const [awards, setAwards] = useState([]);
    const [congress, setCongress] = useState(null);
    const [awardYear, setAwardYear] = useState(null);
    const [awardType, setAwardType] = useState(null);
    const [awardFile, setAwardFile] = useState(null);
    const [skills, setSkills] = useState([]);
    const [techType, setTechType] = useState(null);
    const [tech, setTech] = useState(null);
    const [techDescription, setTechDescription] = useState(null);
    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState(null);
    const [projectDescription, setProjectDescription] = useState(null);
    const [gitAddress, setGitAddress] = useState(null);

    const getProfileData = async() => {
        try {
            const response = await axios.get(
                `/user/${localStorage.getItem("userId")}`
            );
            setResumeId(response.data.responseDto.resumeId);
            setName(response.data.responseDto.name);
            setEmail(response.data.responseDto.email);
            setNickName(response.data.responseDto.nickName);
            setIntroduction(response.data.responseDto.introduction);
            setPhoneNumber("010-1234-5678");
        } catch (error) {
            console.log("Error fetching profile data: ", error);
        }
    }

    const getResumeData = async() => {
        try {
            const url = `/resume/${resumeId}`;
            const resumeResponse = await axios.get(url);
            console.log(resumeResponse.data.responseDto);
            setDate(resumeResponse.data.responseDto.birth);
            if (resumeResponse.data.responseDto.gender === true) {
                setGender(true);
            } else if (resumeResponse.data.responseDto.gender === false) {
                setGender(false);
            } else {
                setGender("");
            }
            setJob(resumeResponse.data.responseDto.job);
            setCity(resumeResponse.data.responseDto.siId);
            setDistrict(resumeResponse.data.responseDto.guId);
            setSchool(resumeResponse.data.responseDto.schoolInfo.name);
            if (
                resumeResponse.data.responseDto.schoolInfo.schoolRegister === "재학"
            ) {
                setEduState("ENROLLED");
            } else if (
                resumeResponse.data.responseDto.schoolInfo.schoolRegister === "중퇴"
            ) {
                setEduState("DROPOUT");
            } else if (
                resumeResponse.data.responseDto.schoolInfo.schoolRegister === "졸업"
            ) {
                setEduState("GRADUATE");
            } else {
                setEduState("");
            }
            setAwards(resumeResponse.data.responseDto.awards);
            setProjects(resumeResponse.data.responseDto.projects);
            resumeResponse.data.responseDto.techStacks.forEach((each)=>{
                if(each.techType === "Front-End"){
                    skills.push({techType: 'FRONT', description: each.description, tech: each.tech});
                }
                else if(each.techType === "Back-End"){
                    skills.push({techType: 'BACK', description: each.description, tech: each.tech});
                }
                else if(each.techType === "기타"){
                    skills.push({techType: 'ETC', description: each.description, tech: each.tech});
                }
                else if(each.techType === "AI"){
                    skills.push({techType: each.techType, description: each.description, tech: each.tech});
                }
            })
        } catch (error) {
            console.log("Error fetching resume data: ", error);
        }
    }
    useEffect(()=>{
        getProfileData();
    },[])
    useEffect(()=>{
        if(resumeId){
            getResumeData();
        }
    },[resumeId])

    const modifyResumeData = async ()=> {
            try {
                const response = await axios.put(`/resume/${resumeId}`, {
                    job: job,
                    birth: date,
                    gender: gender,
                    guId: district,
                    schoolInfo: {
                        name: school,
                        schoolRegister: eduState,
                    },
                    // awards: awards,
                    // techStacks: skills,
                    // projects: projects,
                })
                if(response.status === 200){
                    const response = await axios.put(`/user/${localStorage.getItem('userId')}`,{
                        nickName: nickName,
                        introduction: introduction,
                        name: name,
                        phoneNumber: phoneNumber,
                        email: email,
                    })
                    if(response.status === 200){
                        window.alert('이력서 수정이 완료되었습니다.');
                    }
                    else{
                        window.alert(response.data.error.message);
                    }
                }
                else{
                    window.alert(response.data.error.message);
                }
            }catch(error){
                window.alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
            }
    };
    return (
        <div>
            <Nav/>
            <main className="flex-element">
                <UserSideBar />
                <div className="main-container">
                    <div className="container-top">
                        <h2>이력서 수정</h2>
                    </div>
                    <div className="main-content">
                        <div className="grid-container">
                            <NameInput name={name} setName={setName} />
                            <BirthInput date={date} setBirth={setDate} />
                            <GenderInput gender={gender} setGender={setGender} />
                            <JobInput job={job} setJob={setJob} />
                            <RegionInput
                                city={city}
                                district={district}
                                setCity={setCity}
                                setDistrict={setDistrict}
                            />
                            <EducationInput
                                school={school}
                                eduState={eduState}
                                setSchool={setSchool}
                                setEduState={setEduState}
                            />
                            <EmailInput email={email} setEmail={setEmail} />
                            <AwardInput
                                awards={awards}
                                congress={congress}
                                awardYear={awardYear}
                                awardType={awardType}
                                awardFile={awardFile}
                                setAwards={setAwards}
                                setCongress={setCongress}
                                setAwardYear={setAwardYear}
                                setAwardType={setAwardType}
                                setAwardFile={setAwardFile}
                            />
                            <SkillStackInput
                                skills={skills}
                                techType={techType}
                                tech={tech}
                                techDescription={techDescription}
                                setSkills={setSkills}
                                setTech={setTech}
                                setTechType={setTechType}
                                setTechDescription={setTechDescription}
                            />
                            <ProjectRecordInput
                                projects={projects}
                                projectName={projectName}
                                description={projectDescription}
                                gitAddress={gitAddress}
                                setProjects={setProjects}
                                setProjectName={setProjectName}
                                setDescription={setProjectDescription}
                                setGitAddress={setGitAddress}
                            />
                        </div>
                        <button id="resumeModifyButton" onClick={modifyResumeData}>수정</button>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
export default MyPageResume;
