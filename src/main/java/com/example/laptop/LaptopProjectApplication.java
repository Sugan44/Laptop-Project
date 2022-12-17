package com.example.laptop;

import org.apache.log4j.PropertyConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LaptopProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(LaptopProjectApplication.class, args);
		PropertyConfigurator.configure("LaptopLogFile");
	}

}
