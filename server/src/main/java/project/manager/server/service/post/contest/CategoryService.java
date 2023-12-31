package project.manager.server.service.post.contest;

import java.util.*;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import project.manager.server.domain.post.contest.Category;
import project.manager.server.dto.reponse.post.contest.CategoryDto;
import project.manager.server.dto.request.post.contest.PostTypeRequestDto;
import project.manager.server.repository.post.contest.CategoryRepository;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public Boolean createCategory(PostTypeRequestDto.CategoryDto categoryDto) {

        Category newCategory = Category.builder().category(categoryDto.getCategory()).build();
        categoryRepository.save(newCategory);

        return true;
    }

    public Map<String, Object> readCategoryList() {

        List<Category> categories = categoryRepository.findAll();

        return Collections.singletonMap("categories", categories.stream()
                .map(category -> CategoryDto.builder()
                        .category(category)
                        .build())
                .collect(Collectors.toList()));
    }

}
