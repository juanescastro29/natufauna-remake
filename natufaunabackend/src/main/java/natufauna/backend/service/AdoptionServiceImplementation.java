package natufauna.backend.service;

import natufauna.backend.model.Adoption;
import natufauna.backend.model.Pet;
import natufauna.backend.model.User;
import natufauna.backend.repository.AdoptionRepository;
import natufauna.backend.repository.PetRepository;
import natufauna.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class AdoptionServiceImplementation implements AdoptionService{

    @Autowired
    private AdoptionRepository adoptionRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PetRepository petRepository;


    @Override
    public Adoption save(Map<String, Integer> adoptionData) {
        Optional<User> optionalUser = userRepository.findById(adoptionData.get("userId"));
        Optional<Pet> optionalPet = petRepository.findById(adoptionData.get("petId"));
        User user = optionalUser.orElse(null);
        Pet pet = optionalPet.orElse(null);
        if (user != null && pet != null) {
            try{
                Adoption adoption = new Adoption();
                adoption.setUser(user);
                adoption.setPet(pet);
                return adoptionRepository.save(adoption);
            }catch (RuntimeException e) {
                return null;
            }
        }else {
            return null;
        }

    }

    @Override
    public List<Adoption> getAll() {
        return adoptionRepository.findAll();
    }

    @Override
    public Adoption get(int id) {
        Optional<Adoption> adoptionOptional = adoptionRepository.findById(id);
        Adoption adoption = adoptionOptional.orElse(null);
        return adoption;
    }

    @Override
    public Adoption delete(int id) {
        Optional<Adoption> adoptionOptional = adoptionRepository.findById(id);
        Adoption adoption = adoptionOptional.orElse(null);
        if (adoption != null) {
            adoptionRepository.delete(adoption);
            return adoption;
        }else {
            return null;
        }
    }

    @Override
    public void update(Adoption adoption) {
        adoptionRepository.save(adoption);
    }

}
