package com.senai.mealreceitas.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_receitas")
public class Receita {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_receita;
	
	private String nome;
	private String descricao;
	private String modo_preparo;
	private String observacao;
	private String tempo_preparo;
	private String rendimento;
	private String imagem;
	private long id_usuario;

	public long getId_receita() {
		return id_receita;
	}

	public void setId_receita(int id_receita) {
		this.id_receita = id_receita;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getModo_preparo() {
		return modo_preparo;
	}

	public void setModo_preparo(String modo_preparo) {
		this.modo_preparo = modo_preparo;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public String getTempo_preparo() {
		return tempo_preparo;
	}

	public void setTempo_preparo(String tempo_preparo) {
		this.tempo_preparo = tempo_preparo;
	}

	public String getRendimento() {
		return rendimento;
	}

	public void setRendimento(String rendimento) {
		this.rendimento = rendimento;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(long id_usuario) {
		this.id_usuario = id_usuario;
	}

}

