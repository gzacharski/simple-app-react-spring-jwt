package com.test.app.userservice.repository;

import com.test.app.userservice.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface UserDAO extends CrudRepository<UserEntity,Long> {
    UserEntity findByEmail(String email);
}
