package com.senai.mealreceitas.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_avaliacoes")
public class AvaliacaoReceitaListagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_avaliacao;

	private int nota;
	private long id_receita;

	public long getId_avaliacao() {
		return id_avaliacao;
	}

	public void setId_avaliacao(long id_avaliacao) {
		this.id_avaliacao = id_avaliacao;
	}

	public int getNota() {
		return nota;
	}

	public void setNota(int nota) {
		this.nota = nota;
	}

	public long getId_receita() {
		return id_receita;
	}

	public void setId_receita(long id_receita) {
		this.id_receita = id_receita;
	}

}
