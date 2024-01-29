package com.mysgi.portal.pharma.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Slf4j
public class LoggingController {

    @PutMapping("/logs")
    public void putLog(@RequestBody String message) {
        log.info(String.format("##### %s", message));
    }
}
