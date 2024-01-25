package natufauna.backend.service;

import natufauna.backend.model.Pet;

import java.util.List;

public interface PetService {

    public Pet save(Pet pet);
    public List<Pet> getAll();
    public Pet get(Integer id);
    public Pet delete(Integer id);

}
