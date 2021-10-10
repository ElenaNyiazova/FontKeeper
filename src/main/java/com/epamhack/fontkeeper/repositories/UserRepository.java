package com.epamhack.fontkeeper.repositories;

import com.epamhack.fontkeeper.model.db.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
