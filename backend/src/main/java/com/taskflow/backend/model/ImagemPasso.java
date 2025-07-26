package com.taskflow.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "imagem_passo")
public class ImagemPasso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String url;

    // Ligação ao passo
    @ManyToOne
    @JoinColumn(name = "passo_id", nullable = false)
    private PassoDescricaoTarefa passo;
}

