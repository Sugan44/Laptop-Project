package com.example.laptop.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import lombok.extern.log4j.Log4j2;

@ControllerAdvice @Log4j2
public class LaptopExceptions {
	
	@ExceptionHandler(value=IndujuvalExceptions.class)
	public ResponseEntity<Object> exe() {
		log.error("Laptop Not Found Working");
		return new ResponseEntity<>("No Laptop is There", HttpStatus.NOT_FOUND);
	}

}
