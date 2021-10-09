package com.epamHack.FontKeeper.repositories;

import com.epamHack.FontKeeper.model.db.Font;
import org.springframework.data.repository.CrudRepository;

public interface FontRepository extends CrudRepository<Font, Long> {
}
