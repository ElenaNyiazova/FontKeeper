package com.epamhack.fontkeeper.repositories;

import com.epamhack.fontkeeper.model.db.Rule;
import org.springframework.data.repository.CrudRepository;

public interface RuleRepository extends CrudRepository<Rule, Long> {
}
