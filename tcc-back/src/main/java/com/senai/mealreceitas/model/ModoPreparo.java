package com.senai.mealreceitas.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_modo_preparo")
public class ModoPreparo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_preparo;

	private String etapa;
	private long id_receita;

	public long getId_preparo() {
		return id_preparo;
	}

	public void setId_preparo(long id_preparo) {
		this.id_preparo = id_preparo;
	}

	public String getEtapa() {
		return etapa;
	}

	public void setEtapa(String etapa) {
		this.etapa = etapa;
	}

	public long getId_receita() {
		return id_receita;
	}

	public void setId_receita(long id_receita) {
		this.id_receita = id_receita;
	}

}
