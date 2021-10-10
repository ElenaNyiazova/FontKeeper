package com.epamhack.fontkeeper.repositories;

import com.epamhack.fontkeeper.model.db.Rule;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RuleRepository extends CrudRepository<Rule, Long> {
}
