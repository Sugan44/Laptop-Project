package com.example.laptop.Brand;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController 
@RequestMapping(value="/brand")
public class LaptopBrandController {
	
	@Autowired
	LaptopBrandRepository lbr;
	
	//-------- Logger Creation -----------
	static Logger log = Logger.getLogger(LaptopBrandController.class);
	
	//----------------------------------
	
	@PostMapping(value="/LaptopBrand")
	public LaptopBrand addLaptopBrand(@RequestBody LaptopBrand l) {
		log.info("BrandAdd Method Working");
		java.util.Date date = new java.util.Date();
		l.setCreatedDate(date);
		l.setCreatedBy("SUGAN");
		l.setModifiedDate(date);
		l.setModifiedBy("SuGaN");
		return lbr.save(l);
	}
	//----------------------------------
	
	@GetMapping(value="/LaptopBrand/{id}")
	public LaptopBrand getById(@PathVariable int id) {
		log.info("GetBy Id Working");
		return lbr.findById(id).get();
	}
	//----------------------------------
	
	@GetMapping(value="/LaptopBrand")
	public List <LaptopBrand> getallbrand() {
		log.info("Get All Brand Method Working");
		return lbr.findAll();
	}
	//---------------------------------
	@DeleteMapping(value="/LaptopBrand/{id}")
	public ResponseEntity<LaptopBrand> deleteById(@PathVariable int id) {
		log.info("Delete By ID Method Working");
		LaptopBrand lap = lbr.findById(id).get();
		lbr.deleteById(id);
		return ResponseEntity.ok(lap);
	}
	//-----------------------------------
	@PutMapping(value="/LaptopBrand/{id}")
	public ResponseEntity<LaptopBrand> updateById(@PathVariable int id, @RequestBody LaptopBrand l) {
	log.info("Update By Id Method Working");
	LaptopBrand lap = lbr.findById(id).get()	;
	lap.setBrandName(l.getBrandName());
	lap.setBrandCode(l.getBrandCode());
	lap.setStatus(l.getStatus());
	LaptopBrand lap2 = lbr.save(lap);
	return ResponseEntity.ok(lap2);
	}
	//----------------------------------
	@GetMapping(value="/ActiveBrand")
	public List<LaptopBrand> getActiveBrands() {
	 log.info("Get ActiveBrands Method Working");
	 return lbr.getActiveBrands();
	}
	//-----------------------------------
	@GetMapping(value="/getBrandCode/{brandName}")
	public String getBrandCode(@PathVariable String brandName) {
		log.info("Get Brand Code Method Working");
		return lbr.getBrandCode(brandName);
	}
	
}
