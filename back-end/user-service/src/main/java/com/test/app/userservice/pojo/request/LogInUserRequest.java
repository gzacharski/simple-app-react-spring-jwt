package com.test.app.userservice.pojo.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@JsonIgnoreProperties(ignoreUnknown = true)
public class LogInUserRequest {

    @JsonProperty("username")
    @Email
    @NotNull(message = "Email field cannot be blank")
    private String email;

    @NotNull(message = "Password field cannot be black")
    @Size(min = 8,max = 24,message = "Password should have from 8 to 24 characters.")
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
