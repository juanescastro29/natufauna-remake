package natufauna.backend.service;

import natufauna.backend.model.Sponsorship;

import java.util.List;
import java.util.Map;

public interface SponsorshipService {

    public Sponsorship save(Map<String, Integer> sponsorshipData);
    public List<Sponsorship> getAll();
    public Sponsorship get(int id);
    public Sponsorship delete(int id);
    public void update(Sponsorship sponsorship);

}
