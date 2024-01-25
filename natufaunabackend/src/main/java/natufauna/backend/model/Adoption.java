package natufauna.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "adoptions")
public class Adoption {

    @Id
    @Column(name = "adoptionId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adoptionId;

    @Column(name = "date")
    @JsonFormat(pattern="dd-MM-yyyy HH:mm", timezone="GMT-5")
    private Date adoptionDate;

    @Column(name = "lastUpdate")
    @JsonFormat(pattern="dd-MM-yyyy HH:mm", timezone="GMT-5")
    private Date adoptionDateUpdate;

    @Column(name = "adoptionComments", nullable = false)
    private String adoptionComments;

    @Column(name = "status")
    private String adoptionStatus;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = {"userAddress", "userPassword", "userRole", "adoptions", "sponsorships",})
    @JoinColumn(name = "userId", referencedColumnName = "id", nullable = false)
    private User user;

    @OneToOne
    @JsonIgnoreProperties(value = {"petAge", "petSize", "petHistory", "adoptionStatus", "adoption", "sponsorship"})
    @JoinColumn(name = "petId", referencedColumnName = "id", nullable = false)
    private Pet pet;

    @PrePersist
    public void prePersist() {
        this.adoptionDate = new Date();
        this.adoptionStatus = "In process";
        this.adoptionComments = "The process of adoption is on progress.";
    }

    @PreUpdate
    public void preUpdate() {
        this.adoptionDateUpdate = new Date();
    }

    public Adoption() {
    }

    public int getAdoptionId() {
        return adoptionId;
    }

    public void setAdoptionId(int adoptionId) {
        this.adoptionId = adoptionId;
    }

    public Date getAdoptionDate() {
        return adoptionDate;
    }

    public void setAdoptionDate(Date adoptionDate) {
        this.adoptionDate = adoptionDate;
    }

    public Date getAdoptionDateUpdate() {
        return adoptionDateUpdate;
    }

    public void setAdoptionDateUpdate(Date adoptionDateUpdate) {
        this.adoptionDateUpdate = adoptionDateUpdate;
    }

    public String getAdoptionComments() {
        return adoptionComments;
    }

    public void setAdoptionComments(String adoptionComments) {
        this.adoptionComments = adoptionComments;
    }

    public String getAdoptionStatus() {
        return adoptionStatus;
    }

    public void setAdoptionStatus(String adoptionStatus) {
        this.adoptionStatus = adoptionStatus;
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
