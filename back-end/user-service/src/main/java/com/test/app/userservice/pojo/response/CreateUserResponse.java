package com.test.app.userservice.pojo.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateUserResponse {
    private boolean success;

    @JsonProperty("id")
    private String userId;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "CreateUserResponse{" +
                "success=" + success +
                ", userId='" + userId + '\'' +
                '}';
    }
}
