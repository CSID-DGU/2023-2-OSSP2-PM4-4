package project.manager.server.dto.reponse.resume;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import project.manager.server.domain.resume.School;

@Getter
@NoArgsConstructor
public class SchoolDto {
    Long id;
    String name;
    String schoolRegister;
    String major;
    String schoolImage;

    @Builder
    public SchoolDto(School school) {
        this.id = school.getId();
        this.name = school.getName();
        this.major = school.getMajor();
        this.schoolImage = school.getSchoolImage().getUrl();
        this.schoolRegister = school.getSchoolRegister().getToKorean();
    }
}
