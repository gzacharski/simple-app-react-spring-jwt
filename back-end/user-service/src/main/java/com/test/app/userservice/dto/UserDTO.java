package com.test.app.userservice.dto;

import java.util.Objects;

public class UserDTO {
    private String userId;
    private String name;
    private String surname;
    private String email;
    private String password;
    private String encryptedPassword;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

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

    public String getEncryptedPassword() {
        return encryptedPassword;
    }

    public void setEncryptedPassword(String encryptedPassword) {
        this.encryptedPassword = encryptedPassword;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDTO userDTO = (UserDTO) o;
        return Objects.equals(userId, userDTO.userId)
                && Objects.equals(name, userDTO.name)
                && Objects.equals(surname, userDTO.surname)
                && Objects.equals(email, userDTO.email)
                && Objects.equals(password, userDTO.password)
                && Objects.equals(encryptedPassword, userDTO.encryptedPassword);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, name, surname, email, password, encryptedPassword);
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "userId='" + userId + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", encryptedPassword='" + encryptedPassword + '\'' +
                '}';
    }
}
