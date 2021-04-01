package com.test.app.userservice.pojo.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@JsonIgnoreProperties(ignoreUnknown = true)
public class CreateUserRequest {

    @NotNull(message = "Name field cannot be blank.")
    @Size(min = 2, max = 30, message = "Name field should have from 2 to 30 characters")
    private String name;

    @NotNull(message = "Surname field cannot be blank.")
    @Size(min = 2, max = 30, message = "Surname field should have from 2 to 30 characters")
    private String surname;

    @Email
    @NotNull(message = "Email field cannot be blank")
    private String email;

    @NotNull(message = "Password field cannot be black")
    @Size(min = 8,max = 24,message = "Password should have from 8 to 24 characters.")
    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

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

    @Override
    public String toString() {
        return "CreateUserRequest{" +
                "name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
