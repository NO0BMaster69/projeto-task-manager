package com.taskflow.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "users") // evita conflito com "user" reservado em algumas bases de dados
public class User {

    @Id
    @Column(name = "id", nullable = false, unique = true)
    private String id; // FirebaseAuth ID

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    private String fotoUrl;

    // Relação com UserEquipa
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserEquipa> equipas;

    // Relação com TarefaUser
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TarefaUser> tarefasAssociadas;

    // Relação com NotaTarefa
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NotaTarefa> notasCriadas;

    // Getters e Setters (podes gerar com o IDE)
    public User() {}

    // Construtor, Getters e Setters omitidos por brevidade
}

