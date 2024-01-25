package natufauna.backend.controller;

import natufauna.backend.model.Adoption;
import natufauna.backend.service.AdoptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/adoption")
public class AdoptionController {

    @Autowired
    private AdoptionService adoptionService;

    @PostMapping
    public ResponseEntity<Object> createAdoption(@RequestBody Map<String, Integer> adoptionData) {
        Map<String, Object> response = new HashMap<>();
        Adoption adoptionSaved = adoptionService.save(adoptionData);
        if(adoptionSaved != null) {
            response.put("Route", "/myAdoptions");
            response.put("Message", "Adoption registered successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Route", "");
            response.put("Message", "Adoption not registered");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getAdoptions() {
        Map<String, Object> response = new HashMap<>();
        List<Adoption> adoptions = adoptionService.getAll();

        if(!adoptions.isEmpty()) {
            response.put("Message", "Fetch Completed");
            response.put("Adoptions", adoptions);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Message", "The are no adoptions");
            response.put("Adoptions", null);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getPet(@PathVariable Integer id) {
        Map<String, Object> response = new HashMap<>();
        Adoption adoption = adoptionService.get(id);
        if(adoption != null) {
            response.put("Message", "Fetch completed");
            response.put("Adoption", adoption);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Message", "Adoption not found");
            response.put("Adoption", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateAdoption(@RequestBody Map<String, String> updatedData, @PathVariable Integer id) {
        Map<String, Object> response = new HashMap<>();
        Adoption adoption = adoptionService.get(id);

        if (adoption != null) {
            if (updatedData.get("adoptionComments") != null && !updatedData.get("adoptionComments").isEmpty() && !updatedData.get("adoptionComments").isBlank()) {
                adoption.setAdoptionComments(updatedData.get("adoptionComments"));
            }

            if (updatedData.get("adoptionStatus") != null && !updatedData.get("adoptionStatus").isEmpty() && !updatedData.get("adoptionStatus").isBlank()){
                adoption.setAdoptionStatus(updatedData.get("adoptionStatus"));
            }
            response.put("Route", "/adoptions");
            response.put("Message", "Adoption updated successfully");
            adoptionService.update(adoption);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Route", null);
            response.put("Message", "Adoption not updated");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAdoption(@PathVariable Integer id) {
        Adoption adoption = adoptionService.delete(id);
        if (adoption != null) {
            return new ResponseEntity<>("Adoption deleted successfully", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Adoption not deleted", HttpStatus.CONFLICT);
        }
    }

}
