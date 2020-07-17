package com.senai.mealreceitas.resource;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/ingredientes")
	public void createIngrediente(@Valid @RequestBody Ingrediente ingrediente) {
		ingredienteRepo.save(ingrediente);
	}
	
}