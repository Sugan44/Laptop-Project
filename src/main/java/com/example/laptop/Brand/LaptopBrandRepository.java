package com.example.laptop.Brand;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LaptopBrandRepository extends JpaRepository<LaptopBrand, Integer>{

	@Query(value="select * from laptopdetails.brand \r\n"
			+ "where brand.status=true", nativeQuery = true)
	 public  List<LaptopBrand> getActiveBrands() ;
	
	@Query(value="select brand.brand_code from brand\r\n"
			+ "where brand.brand_name=:brandName", nativeQuery = true)
	public String getBrandCode(@Param("brandName") String brandName);
}
