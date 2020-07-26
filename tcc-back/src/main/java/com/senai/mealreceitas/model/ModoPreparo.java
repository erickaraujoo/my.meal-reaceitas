package com.senai.mealreceitas.model;

import javax.persistence.Column;
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
	@Column(name = "id_preparo")
	private long idPreparo;

	private String etapa;
	
	@Column(name = "id_receita")
	private long idReceita;

	public long getIdPreparo() {
		return idPreparo;
	}

	public void setIdPreparo(long idPreparo) {
		this.idPreparo = idPreparo;
	}

	public String getEtapa() {
		return etapa;
	}

	public void setEtapa(String etapa) {
		this.etapa = etapa;
	}

	public long getIdReceita() {
		return idReceita;
	}

	public void setIdReceita(long idReceita) {
		this.idReceita = idReceita;
	}

}
