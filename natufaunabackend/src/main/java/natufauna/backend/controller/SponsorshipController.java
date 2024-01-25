package natufauna.backend.controller;

import natufauna.backend.model.Sponsorship;
import natufauna.backend.service.SponsorshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/sponsorship")
public class SponsorshipController {

    @Autowired
    private SponsorshipService sponsorshipService;

    @PostMapping
    public ResponseEntity<Object> createSponsorship(@RequestBody Map<String, Integer> sponsorshipData) {
        Map<String, Object> response = new HashMap<>();
        Sponsorship sponsorship = sponsorshipService.save(sponsorshipData);
        if(sponsorship != null) {
            response.put("Route", "/mySponsorships");
            response.put("Message", "Sponsorship created successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Route", null);
            response.put("Message", "Sponsorship nor created");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getSponsorships() {
        Map<String, Object> response = new HashMap<>();
        List<Sponsorship> sponsorships = sponsorshipService.getAll();
        if (!sponsorships.isEmpty()) {
            response.put("Message", "Fetch completed");
            response.put("Sponsorships", sponsorships);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Message", "There are no sponsorships");
            response.put("Sponsorships", null);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getSponsorship(@PathVariable Integer id) {
        Map<String, Object> response = new HashMap<>();
        Sponsorship sponsorship = sponsorshipService.get(id);
        if (sponsorship != null) {
            response.put("Message", "Fetch completed");
            response.put("Sponsorship", sponsorship);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Message", "Sponsorship not found");
            response.put("Sponsorship", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateSponsorship(@RequestBody Map<String, String> updatedData, @PathVariable Integer id) {
        Map<String, Object> response = new HashMap<>();
        Sponsorship sponsorship = sponsorshipService.get(id);
        if (sponsorship != null) {
            if (updatedData.get("sponsorshipComments") != null && !updatedData.get("sponsorshipComments").isEmpty() && !updatedData.get("sponsorshipComments").isBlank()) {
                sponsorship.setSponsorshipComments(updatedData.get("sponsorshipComments"));
            }
            if (updatedData.get("sponsorshipStatus") != null && !updatedData.get("sponsorshipStatus").isEmpty() && !updatedData.get("sponsorshipStatus").isBlank()) {
                sponsorship.setSponsorshipStatus(updatedData.get("sponsorshipStatus"));
            }
            response.put("Route", "/sponsorships");
            response.put("Message", "Sponsorship updated successfully");
            sponsorshipService.update(sponsorship);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Route", null);
            response.put("Message", "Sponsorship not updated");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSponsorship(@PathVariable Integer id) {
        Sponsorship sponsorship = sponsorshipService.delete(id);
        if (sponsorship != null) {
            return new ResponseEntity<>("Sponsorship deleted successfully", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Sponsorship not deleted", HttpStatus.CONFLICT);
        }
    }

}
