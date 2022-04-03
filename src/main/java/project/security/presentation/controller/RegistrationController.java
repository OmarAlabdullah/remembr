package project.security.presentation.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import project.security.application.UserService;
import project.security.presentation.dto.Registration;

@RestController
@RequestMapping(value="/register")
public class RegistrationController {
    private final UserService userService;

    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void register(@Validated @RequestBody Registration registration)  {
        System.out.println("..........................................");
            this.userService.register(
                    registration.username,
                    registration.password,
                    registration.firstname,
                    registration.lastname,
                    registration.email,
                    registration.role
            );}}






