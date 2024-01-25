package natufauna.backend.service;

import natufauna.backend.model.Pet;
import natufauna.backend.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class PetServiceImplementation implements PetService{

    @Autowired
    private PetRepository petRepository;


    @Override
    public Pet save(Pet pet) {
        return petRepository.save(pet);
    }

    @Override
    public List<Pet> getAll() {
        return petRepository.findAll();
    }

    @Override
    public Pet get(Integer id) {
        Optional<Pet> optionalPet = petRepository.findById(id);
        Pet pet = optionalPet.orElse(null);
        return pet;
    }

    @Override
    public Pet delete(Integer id) {
        Optional<Pet> optionalPet = petRepository.findById(id);
        Pet pet = optionalPet.orElse(null);
        if(pet != null) {
            petRepository.delete(pet);
            return pet;
        }else {
            return null;
        }
    }
}
