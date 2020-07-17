package com.senai.mealreceitas.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.mealreceitas.model.Categoria;
import com.senai.mealreceitas.repository.CategoriaRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class CategoriaResource {

	@Autowired
	CategoriaRepository categoriaRepo;
	
	@GetMapping("/categorias")
	public List<Categoria> getCategorias(){
		return categoriaRepo.findAll();
	}
	
}
