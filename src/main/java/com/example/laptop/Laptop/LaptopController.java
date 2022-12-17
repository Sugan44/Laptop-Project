package com.example.laptop.Laptop;

import java.util.List;

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

import com.example.laptop.Brand.LaptopBrand;
import com.example.laptop.Brand.LaptopBrandRepository;
import com.example.laptop.Dto.LaptopDto;
import com.example.laptop.exceptions.IndujuvalExceptions;


import org.apache.log4j.Logger;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value="/api") 
public class LaptopController {
	@Autowired
	LaptopRepository lr;
	@Autowired
	LaptopBrandRepository lb;
	
	
	//--------Logger Creation------------------------
		static Logger log = Logger.getLogger(LaptopController.class);
	//-----------------------------------------------
	@PostMapping(value="/laptop")
	public Laptop addlaptop(@RequestBody LaptopDto l) {
		log.info("Add Laptop Method Working");
		Laptop lap=new Laptop();
		LaptopBrand laptopBrand= lb.findById(l.getBrandKey()).get();
		lap.setLaptopBrand(laptopBrand);
		lap.setColour(l.getColour());
		lap.setRam(l.getRam());
		lap.setPrice(l.getPrice());
		java.util.Date date = new java.util.Date();
		lap.setCreatedDate(date);
		lap.setCreatedBy("SUGAN");
		lap.setModifiedDate(date);
		lap.setModifiedBy("SuGaN");
		lap.setStatus(true);
		return lr.save(lap);
	}
	//-------------------------------------------------
	@GetMapping(value="/laptop")
	public List <Laptop> getValues() {
		return lr.findAll();
		}
	//------------------------------------------------
	@GetMapping(value="/laptop/{a}")
	public Laptop getById(@PathVariable int a) {
		log.info("Get Laptop By ID Method Working");
		return lr.findById(a).orElseThrow(()-> new IndujuvalExceptions());
	}
	//------------------------------------------------
	@DeleteMapping(value="/laptop/{id}") 
	public ResponseEntity<Laptop> deleteById(@PathVariable int id)
	{
		log.info("Delete Laptop BY ID Method Working");
		Laptop lap =lr.findById(id).get();
		lr.deleteById(id);
		return ResponseEntity.ok(lap);
	}
	//------------------------------------------------
	@PutMapping(value="/laptop/{id}")
	public ResponseEntity<Laptop> updateById(@PathVariable int id, @RequestBody Laptop l) {
		log.info("Update Laptop BY ID Method Working");
		
		Laptop lap = lr.findById(id).get();
		lap.setBrandCode(l.getBrandCode());
		lap.setColour(l.getColour());
		lap.setPrice(l.getPrice());
		lap.setRam(l.getRam());
		java.util.Date date = new java.util.Date();
		lap.setModifiedDate(date);
		lap.setModifiedBy("SuGaN");
		
		Laptop newlap = lr.save(lap);
		return ResponseEntity.ok(newlap);	
	}
	//------------------------------------------------
	@GetMapping(value="getActiveLaptopList")
	public List<Laptop> getActiveLaptopList() {
		return lr.getActiveLaptopList();	
		}
	//------------------------------------------------
		@GetMapping(value="getInActiveLaptopList")
		public List<Laptop> getInActiveLaptopList() {
			return lr.getInActiveLaptopList();	
			}
	//------------------------------------------------
	@DeleteMapping(value="/makeLaptopInactive/{id}")
	public ResponseEntity<Laptop> makeLaptopInactive(@PathVariable int id)
	{
		log.info("Delete Laptop BY ID Method Working");
		Laptop lap =lr.findById(id).get();
		lap.setStatus(false);
		lr.save(lap);
		return ResponseEntity.ok(lap);
	}
	//-------------------------------------------------
	@DeleteMapping(value="/makeLaptopActive/{id}")
	public ResponseEntity<Laptop> makeLaptopActive(@PathVariable int id)
	{
		log.info("Delete Laptop BY ID Method Working");
		Laptop lap =lr.findById(id).get();
		lap.setStatus(true);
		lr.save(lap);
		return ResponseEntity.ok(lap);
	}
	//--------------------------------------------------
}
