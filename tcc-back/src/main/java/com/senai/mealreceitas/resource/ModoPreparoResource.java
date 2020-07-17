package com.senai.mealreceitas.resource;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senai.mealreceitas.model.ModoPreparo;
import com.senai.mealreceitas.repository.ModoPreparoRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class ModoPreparoResource {

	@Autowired
	ModoPreparoRepository preparoRepo;
	
	@PostMapping("/modopreparo")
	public void createModoPreparo(@Valid @RequestBody ModoPreparo preparo) {
		preparoRepo.save(preparo);
	}
	
}
