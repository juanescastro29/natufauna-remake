package natufauna.backend.repository;

import natufauna.backend.model.Sponsorship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SponsorshipRepository extends JpaRepository<Sponsorship, Integer> {
}
