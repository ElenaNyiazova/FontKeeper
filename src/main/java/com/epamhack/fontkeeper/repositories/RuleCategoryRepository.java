package com.epamhack.fontkeeper.repositories;

import com.epamhack.fontkeeper.model.db.RuleCategory;
import org.springframework.data.repository.CrudRepository;

public interface RuleCategoryRepository extends CrudRepository<RuleCategory, Long> {
}
