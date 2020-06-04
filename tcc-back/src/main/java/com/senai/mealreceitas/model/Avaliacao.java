package com.senai.mealreceitas.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_avaliacoes")
public class Avaliacao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_avaliacao;

	private int nota;
	private String comentario;
	private long id_receita;
	private long id_usuario;

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

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public long getId_receita() {
		return id_receita;
	}

	public void setId_receita(long id_receita) {
		this.id_receita = id_receita;
	}

	public long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(long id_usuario) {
		this.id_usuario = id_usuario;
	}

}