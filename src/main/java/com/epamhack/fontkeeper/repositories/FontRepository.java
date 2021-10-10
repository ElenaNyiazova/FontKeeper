package com.epamhack.fontkeeper.repositories;

import com.epamhack.fontkeeper.model.db.Font;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FontRepository extends CrudRepository<Font, Long> {
}
