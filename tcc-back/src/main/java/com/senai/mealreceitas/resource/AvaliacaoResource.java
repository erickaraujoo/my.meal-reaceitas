package com.senai.mealreceitas.resource;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.senai.mealreceitas.model.Avaliacao;
import com.senai.mealreceitas.repository.AvaliacaoRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AvaliacaoResource {
	
	@Autowired
	private AvaliacaoRepository avaliacaoRepo;
	
	@PostMapping("/avaliacoes")
	@ResponseStatus(HttpStatus.CREATED)
	public Avaliacao createAvaliacao(@Valid @RequestBody Avaliacao avaliacao) {
		Avaliacao novaAvaliacao = avaliacaoRepo.save(avaliacao);
		return novaAvaliacao;
	}

}
