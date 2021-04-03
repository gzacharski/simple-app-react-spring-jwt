package com.test.app.userservice.controller;

import com.test.app.userservice.dto.UserDTO;
import com.test.app.userservice.pojo.request.CreateUserRequest;
import com.test.app.userservice.pojo.response.CreateUserResponse;
import com.test.app.userservice.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {

    private final Environment environment;
    private final UserService userService;

    @Autowired
    public UserController(Environment environment, UserService userService) {
        this.environment = environment;
        this.userService = userService;
    }

    @GetMapping("/status")
    public String getStatus() {
        return "Working " + environment.getProperty("local.server.port");
    }

    @PostMapping(
            consumes = {MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public ResponseEntity<CreateUserResponse> createUser(@Valid @RequestBody CreateUserRequest createUserRequest) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        UserDTO userDTO = modelMapper.map(createUserRequest, UserDTO.class);

        UserDTO responseUserDTO = userService.createUser(userDTO);

        CreateUserResponse response = modelMapper.map(responseUserDTO, CreateUserResponse.class);
        response.setSuccess(true);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

}
