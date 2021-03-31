package com.test.app.userservice.service;

import com.test.app.userservice.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    UserDTO createUser(UserDTO userDetails);
    UserDTO getUserDetailsByEmail(String email);

}
