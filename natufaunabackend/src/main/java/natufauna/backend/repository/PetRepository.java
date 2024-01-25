package natufauna.backend.repository;

import natufauna.backend.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Integer> {
}
