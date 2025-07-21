package com.taskflow.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "equipa")
public class Equipa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nome;

    private String descricao;

    // Relação com UserEquipa
    @OneToMany(mappedBy = "equipa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserEquipa> membros;

    // Relação com Tarefa
    @OneToMany(mappedBy = "equipa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Tarefa> tarefas;

    public Equipa() {}

    // Construtor, Getters e Setters omitidos por brevidade
}

