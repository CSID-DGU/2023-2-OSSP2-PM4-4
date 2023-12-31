package project.manager.server.dto.request.post.building;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BuildingPostRequestDto {

    @NotNull
    private Long userId;
    @NotNull
    private String title;
    @NotNull
    private String content;
    @NotNull
    private boolean usePoint;
    @NotEmpty
    @Valid
    private List<PartRequestDto> partList;
}
