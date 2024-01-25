package natufauna.backend.service;

import natufauna.backend.model.Adoption;
import org.hibernate.id.IncrementGenerator;

import java.util.List;
import java.util.Map;

public interface AdoptionService {

    public Adoption save(Map<String, Integer> adoptionData);
    public List<Adoption> getAll();
    public Adoption get(int id);
    public Adoption delete(int id);
    public void update(Adoption adoption);

}
