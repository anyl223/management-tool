package com.multipleform.MOdels;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "multi_forms")
public class Forms implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String fullName;
    private String projectname;
    private String mobile;
    private String Teamleader;
    private String project_manager;
    private String projectdirector;
    private String current_status;
    private String workassign;
    private String complete_project;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getProjectname() {
        return projectname;
    }

    public void setProjectname(String projectname) {
        this.projectname = projectname;
    }

    public String getTeamleader() {
        return Teamleader;
    }

    public void setTeamleader(String teamleader) {
        Teamleader = teamleader;
    }

    public String getProject_manager() {
        return project_manager;
    }

    public void setProject_manager(String project_manager) {
        this.project_manager = project_manager;
    }

    public String getProjectdirector() {
        return projectdirector;
    }

    public void setProjectdirector(String projectdirector) {
        this.projectdirector = projectdirector;
    }

    public String getCurrent_status() {
        return current_status;
    }

    public void setCurrent_status(String current_status) {
        this.current_status = current_status;
    }

    public String getWorkassign() {
        return workassign;
    }

    public void setWorkassign(String workassign) {
        this.workassign = workassign;
    }

    public String getComplete_project() {
        return complete_project;
    }

    public void setComplete_project(String complete_project) {
        this.complete_project = complete_project;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

}
