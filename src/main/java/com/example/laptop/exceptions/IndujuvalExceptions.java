package com.example.laptop.exceptions;

import lombok.extern.log4j.Log4j2;

@Log4j2
public class IndujuvalExceptions extends RuntimeException{
	
	public IndujuvalExceptions() {
		super();
		log.error("Laptop Not Found Indujuval Exception");
	}
	
}
