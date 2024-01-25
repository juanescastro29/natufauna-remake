package natufauna.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "sponsorships")
public class Sponsorship {

    @Id
    @Column(name = "sponsorshipId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sponsorshipId;

    @Column(name = "comments")
    private String sponsorshipComments;

    @Column(name = "status")
    private String sponsorshipStatus;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = {"userAddress", "userPassword", "userRole", "adoptions", "sponsorships",})
    @JoinColumn(name = "userId", referencedColumnName = "id", nullable = false)
    private User user;

    @OneToOne
    @JsonIgnoreProperties(value = {"petAge", "petSize", "petHistory", "sponsorshipStatus", "adoption", "sponsorship"})
    @JoinColumn(name = "petId", referencedColumnName = "id", nullable = false)
    private Pet pet;

    @PrePersist
    public void prePersist() {
        this.sponsorshipStatus = "Active";
        this.sponsorshipComments = "The user is sponsoring the pet.";
    }

    public Sponsorship() {
    }

    public int getSponsorshipId() {
        return sponsorshipId;
    }

    public void setSponsorshipId(int sponsorshipId) {
        this.sponsorshipId = sponsorshipId;
    }

    public String getSponsorshipComments() {
        return sponsorshipComments;
    }

    public void setSponsorshipComments(String sponsorshipComments) {
        this.sponsorshipComments = sponsorshipComments;
    }

    public String getSponsorshipStatus() {
        return sponsorshipStatus;
    }

    public void setSponsorshipStatus(String sponsorshipStatus) {
        this.sponsorshipStatus = sponsorshipStatus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }
}
