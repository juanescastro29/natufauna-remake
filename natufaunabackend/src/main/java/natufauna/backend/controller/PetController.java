package natufauna.backend.controller;

import jakarta.persistence.Column;
import natufauna.backend.model.Pet;
import natufauna.backend.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/pet")
public class PetController {

    @Autowired
    private PetService petService;

    @PostMapping
    public ResponseEntity<Object> createPet(@RequestBody Pet pet) {
        Map<String, Object> response = new HashMap<>();
        Pet petSaved = petService.save(pet);
        if (petSaved != null) {
            response.put("Route", "/pets");
            response.put("Message", "Pet registered successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Route", null);
            response.put("Message", "Pet not registered");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getPets() {
        Map<String, Object> response = new HashMap<>();
        List<Pet> pets = petService.getAll();

        if (!pets.isEmpty()) {
            response.put("Message", "Fetch completed");
            response.put("Pets", pets);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Message", "There are no registered pets");
            response.put("Pets", null);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPet(@PathVariable Integer id) {
        Map<String, Object> response = new HashMap<>();
        Pet pet = petService.get(id);

        if (pet != null) {
            response.put("Message", "Fetch complete");
            response.put("Pet", pet);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Message", "Pet not found");
            response.put("Pet", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updatePet(@RequestBody Map<String, String> updatedData, @PathVariable Integer id) {
        Map<String, Object> response = new HashMap<>();
        Pet pet = petService.get(id);
        if(pet != null) {
            if(updatedData.get("petName") != null && !updatedData.get("petName").isBlank() && !updatedData.get("petName").isEmpty()) {
                pet.setPetName(updatedData.get("petName"));
            }
            if (updatedData.get("petImage") !=null && updatedData.get("petImage").isBlank() && !updatedData.get("petImage").isEmpty()) {
                pet.setPetImage(updatedData.get("petImage"));
            }
            if(updatedData.get("petAge") != null && !updatedData.get("petAge").isBlank() && !updatedData.get("petAge").isEmpty()) {
                pet.setPetAge(updatedData.get("petAge"));
            }
            if(updatedData.get("petSize") != null && !updatedData.get("petSize").isBlank() && !updatedData.get("petSize").isEmpty()) {
                pet.setPetSize(updatedData.get("petSize"));
            }
            if (updatedData.get("petHistory") != null && !updatedData.get("petHistory").isBlank() && !updatedData.get("petHistory").isEmpty()) {
                pet.setPetHistory(updatedData.get("petHistory"));
            }
            petService.save(pet);
            response.put("Route", "/pets");
            response.put("Message", "Pet updated successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Route", null);
            response.put("Message", "Pet not updated");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

}
