package com.example.pipelineexecutor.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@AllArgsConstructor
public class PipelineExecutorController {
    private static final Logger log = Logger.getLogger(String.valueOf(PipelineExecutorController.class));
}
