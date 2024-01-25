package natufauna.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int petId;

    @Column(name = "name", nullable = false)
    private String petName;

    @Column(name = "image", nullable = false)
    private String petImage;

    @Column(name = "age", nullable = false)
    private String petAge;

    @Column(name = "size", nullable = false)
    private String petSize;

    @Column(name = "history", nullable = false)
    private String petHistory;

    @Column(name = "adoptionStatus")
    private Boolean adoptionStatus;
    @Column(name = "sponsorshipStatus")
    private Boolean sponsorshipStatus;

    @OneToOne(mappedBy = "pet", cascade = CascadeType.ALL)
    @JsonIgnore
    private Adoption adoption;

    @OneToOne(mappedBy = "pet", cascade = CascadeType.ALL)
    @JsonIgnore
    private Sponsorship sponsorship;

    @PreRemove
    public void preRemove() {
        adoption.setPet(null);
        sponsorship.setPet(null);
    }

    @PrePersist
    public void prePersist() {
        this.adoptionStatus = true;
        this.sponsorshipStatus = true;
        this.adoption = null;
        this.sponsorship = null;
    }

    public Pet() {

    }

    public int getPetId() {
        return petId;
    }

    public void setPetId(int petId) {
        this.petId = petId;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public String getPetImage() {
        return petImage;
    }

    public void setPetImage(String petImage) {
        this.petImage = petImage;
    }

    public String getPetAge() {
        return petAge;
    }

    public void setPetAge(String petAge) {
        this.petAge = petAge;
    }

    public String getPetSize() {
        return petSize;
    }

    public void setPetSize(String petSize) {
        this.petSize = petSize;
    }

    public String getPetHistory() {
        return petHistory;
    }

    public void setPetHistory(String petHistory) {
        this.petHistory = petHistory;
    }

    public Boolean getAdoptionStatus() {
        return adoptionStatus;
    }

    public void setAdoptionStatus(Boolean adoptionStatus) {
        this.adoptionStatus = adoptionStatus;
    }

    public Boolean getSponsorshipStatus() {
        return sponsorshipStatus;
    }

    public void setSponsorshipStatus(Boolean sponsorshipStatus) {
        this.sponsorshipStatus = sponsorshipStatus;
    }

    public Adoption getAdoption() {
        return adoption;
    }

    public void setAdoption(Adoption adoption) {
        this.adoption = adoption;
    }

    public Sponsorship getSponsorship() {
        return sponsorship;
    }

    public void setSponsorship(Sponsorship sponsorship) {
        this.sponsorship = sponsorship;
    }
}
