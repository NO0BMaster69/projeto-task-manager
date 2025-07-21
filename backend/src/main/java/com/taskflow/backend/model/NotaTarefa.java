package com.taskflow.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "nota_tarefa")
public class NotaTarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "TEXT")
    private String conteudo;

    private LocalDateTime dataCriacao;

    // Ligação à tarefa
    @ManyToOne
    @JoinColumn(name = "tarefa_id", nullable = false)
    private Tarefa tarefa;

    // Ligação ao autor da nota
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Imagens associadas à nota
    @OneToMany(mappedBy = "nota", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ImagemNota> imagens;

    public NotaTarefa() {}

    // Getters e setters omitidos por brevidade
}

