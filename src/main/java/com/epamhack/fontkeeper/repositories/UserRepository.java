package com.epamhack.fontkeeper.repositories;

import com.epamhack.fontkeeper.model.db.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
