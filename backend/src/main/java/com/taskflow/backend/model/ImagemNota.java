package com.taskflow.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "imagem_nota")
public class ImagemNota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String url;

    // Ligação à nota
    @ManyToOne
    @JoinColumn(name = "nota_id", nullable = false)
    private NotaTarefa nota;
}

