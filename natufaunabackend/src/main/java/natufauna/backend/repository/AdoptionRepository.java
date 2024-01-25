package natufauna.backend.repository;

import natufauna.backend.model.Adoption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdoptionRepository extends JpaRepository<Adoption, Integer> {
}
