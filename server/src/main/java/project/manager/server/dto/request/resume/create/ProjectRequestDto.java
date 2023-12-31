package project.manager.server.dto.request.resume.create;

import jakarta.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProjectRequestDto {

    @NotNull
    private Long userId;

    @NotNull(message = "[Project Request] Github url can not be null")
    private String gitUrl;

    @NotNull(message = "[Project Request] Project description can not be null")
    private String description;

    @NotNull(message = "[Project Request] Project name can not be null")
    private String projectName;
}
