package com.example.split_bill_4.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.split_bill_4.entity.User;
import com.example.split_bill_4.repository.UserRepository;

public class UserService {
	@Autowired
	private UserRepository userRepository;
	public User saveUser(User user) {
        return userRepository.save(user);
    }	
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByEmail(String email) {
        return Optional.ofNullable(userRepository.findByEmail(email));
    }
}
