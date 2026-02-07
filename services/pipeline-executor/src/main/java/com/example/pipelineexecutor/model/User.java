package com.example.pipelineexecutor.model;

import lombok.Data;

@Data
public class User {
    Long id;
    Long userId;
    String login;
    String pass;
}
