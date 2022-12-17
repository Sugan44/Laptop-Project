package com.example.laptop.Laptop;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LaptopRepository extends JpaRepository<Laptop, Integer>{
	
	@Query(value="select * from laptopdetails.laptops where laptopdetails.laptops.status=true\r\n"
			+ "order by laptopdetails.laptops.id desc", nativeQuery = true)
	public List<Laptop> getActiveLaptopList();
	
	@Query(value="select * from laptopdetails.laptops where laptopdetails.laptops.status=false\r\n"
			+ "order by laptopdetails.laptops.id desc", nativeQuery = true)
	public List<Laptop> getInActiveLaptopList();
	
}
