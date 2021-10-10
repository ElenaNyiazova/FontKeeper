package com.epamhack.fontkeeper.repositories;

import com.epamhack.fontkeeper.model.db.Letter;
import org.springframework.data.repository.CrudRepository;

public interface LetterRepository extends CrudRepository<Letter, Long> {
}
