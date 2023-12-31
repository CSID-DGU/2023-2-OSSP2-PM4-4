package project.manager.server.service.report;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import project.manager.server.domain.User;
import project.manager.server.domain.post.contest.ContestPost;
import project.manager.server.domain.report.ContestReport;
import project.manager.server.dto.reponse.post.PageInfo;
import project.manager.server.dto.reponse.report.ReportTitle;
import project.manager.server.dto.request.report.ContestReportRequestDto;
import project.manager.server.enums.UserState;
import project.manager.server.exception.ApiException;
import project.manager.server.exception.ErrorDefine;
import project.manager.server.repository.UserRepository;
import project.manager.server.repository.post.contest.ContestPostRepository;
import project.manager.server.repository.report.ContestReportRepository;

@Service
@Transactional
@RequiredArgsConstructor
public class ContestReportService {

    private final ContestReportRepository contestReportRepository;
    private final UserRepository userRepository;
    private final ContestPostRepository contestPostRepository;

    //신고 시점 데이터 받아오기
    /** */
    public Boolean creatContestReport(ContestReportRequestDto contestReportRequestDto) {
        User reporter = userRepository.findById(contestReportRequestDto.getReporterId())
                .orElseThrow(() -> new ApiException(ErrorDefine.USER_NOT_FOUND));
        User defendant = userRepository.findById(contestReportRequestDto.getDefendantId())
                .orElseThrow(() -> new ApiException(ErrorDefine.USER_NOT_FOUND));
        ContestPost contest = contestPostRepository.findById(contestReportRequestDto.getContestPostId())
                .orElseThrow(() -> new ApiException(ErrorDefine.ENTITY_NOT_FOUND));

        ContestReport newContestReport = ContestReport.builder()
                .reporter(reporter)
                .defendant(defendant)
                .reportReason(contestReportRequestDto.getReportReason())
                .description(contestReportRequestDto.getDescription())
                .reportedContest(contest)
                .build();

        contestReportRepository.save(newContestReport);

        return true;
    }

    public Map<String, Object> readReportList(Integer page, Integer size) {

        Page<ContestReport> reports = contestReportRepository.findAll(PageRequest.of(page, size, Sort.by("createAt").descending()));

        PageInfo pageInfo = PageInfo.builder()
                .currentPage(reports.getNumber() + 1)
                .totalPages(reports.getTotalPages())
                .pageSize(reports.getSize())
                .currentItems(reports.getNumberOfElements())
                .totalItems(reports.getTotalElements())
                .build();

        Map<String, Object> result = new HashMap<>();
        result.put("reportTitles", reports.stream()
                .map(report -> ReportTitle.builder()
                        .reportId(report.getId())
                        .reporterId(report.getReporter().getId())
                        .contentId(report.getReportedContest().getId())
                        .reporterNickName(report.getReporter().getNickName())
                        .defendantId(report.getDefendant().getId())
                        .defendantNickName(report.getDefendant().getNickName())
                        .reportReason(report.getReportReason().getMessage())
                        .createAt(report.getCreateAt().toInstant().atZone(ZoneId.systemDefault()).toLocalDate())
                        .build())
                .collect(Collectors.toList()));

        result.put("pageInfo", pageInfo);

        return result;
    }

    public Boolean executeUser(Long reportId, Long penalty) {
        ContestReport contestReport = contestReportRepository.findByIdWithDefendant(reportId)
                .orElseThrow(() -> new ApiException(ErrorDefine.ENTITY_NOT_FOUND));

        contestReport.getDefendant().updateUserState(UserState.PENALTY, LocalDate.now().plusDays(penalty));

        return true;
    }

    public Boolean expelUser(Long reportId) {
        ContestReport contestReport = contestReportRepository.findByIdWithDefendant(reportId)
                .orElseThrow(() -> new ApiException(ErrorDefine.ENTITY_NOT_FOUND));

        contestReport.getDefendant().updateUserState(UserState.EXPEL, LocalDate.now());

        return true;
    }

    public Boolean deleteReport(Long reportId) {
        ContestReport contestReport = contestReportRepository.findByIdWithDefendant(reportId)
                .orElseThrow(() -> new ApiException(ErrorDefine.ENTITY_NOT_FOUND));

        contestReportRepository.delete(contestReport);

        return true;
    }
}
