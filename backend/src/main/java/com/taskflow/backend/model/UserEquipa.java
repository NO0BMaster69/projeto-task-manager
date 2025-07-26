package com.taskflow.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "user_equipa")
public class UserEquipa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // Ligação ao utilizador
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Ligação à equipa
    @ManyToOne
    @JoinColumn(name = "equipa_id", nullable = false)
    private Equipa equipa;

    // Papel do utilizador na equipa
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    public enum Role {
        ADMIN,
        MEMBER
    }
}

