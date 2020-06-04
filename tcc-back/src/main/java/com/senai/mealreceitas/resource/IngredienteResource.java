package com.senai.mealreceitas.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.mealreceitas.model.Ingrediente;
import com.senai.mealreceitas.repository.IngredienteRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class IngredienteResource {

	@Autowired
	IngredienteRepository ingredienteRepo;
	
	@GetMapping("/ingredientes")
	public List<Ingrediente> getIngredientes(){
		return ingredienteRepo.findAll();
	}
	
}
