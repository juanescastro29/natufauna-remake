package natufauna.backend.service;

import natufauna.backend.model.Pet;
import natufauna.backend.model.Sponsorship;
import natufauna.backend.model.User;
import natufauna.backend.repository.PetRepository;
import natufauna.backend.repository.SponsorshipRepository;
import natufauna.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class SponsorshipServiceImplementation implements SponsorshipService{

    @Autowired
    private SponsorshipRepository sponsorshipRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PetRepository petRepository;


    @Override
    public Sponsorship save(Map<String, Integer> sponsorshipData) {
        Optional<User> userOptional = userRepository.findById(sponsorshipData.get("userId"));
        Optional<Pet> optionalPet = petRepository.findById(sponsorshipData.get("petId"));
        User user = userOptional.orElse(null);
        Pet pet = optionalPet.orElse(null);

        if(user != null && pet != null) {
            try {
                Sponsorship sponsorship = new Sponsorship();
                sponsorship.setUser(user);
                sponsorship.setPet(pet);
                sponsorshipRepository.save(sponsorship);
                return sponsorship;
            }catch (RuntimeException e) {
                return null;
            }
        }else {
            return null;
        }
    }

    @Override
    public List<Sponsorship> getAll() {
        return sponsorshipRepository.findAll();
    }

    @Override
    public Sponsorship get(int id) {
        Optional<Sponsorship> optionalSponsorship = sponsorshipRepository.findById(id);
        Sponsorship sponsorship = optionalSponsorship.orElse(null);
        return sponsorship;
    }

    @Override
    public Sponsorship delete(int id) {
        Optional<Sponsorship> optionalSponsorship = sponsorshipRepository.findById(id);
        Sponsorship sponsorship = optionalSponsorship.orElse(null);
        if (sponsorship != null) {
            sponsorshipRepository.delete(sponsorship);
            return sponsorship;
        }else {
            return null;
        }
    }

    @Override
    public void update(Sponsorship sponsorship) {
        sponsorshipRepository.save(sponsorship);
    }
}
