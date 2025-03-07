package com.example.shopweb_backend.services;

import com.example.shopweb_backend.entities.UserEntity;
import com.example.shopweb_backend.models.DTO.UserDTO;

public interface IUserService {
    UserEntity createUser(UserDTO userDTO) throws Exception;
    String login(String phoneNumber, String password) throws Exception;
    UserEntity getUser(String phoneNumber) throws Exception;
}
