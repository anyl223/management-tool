package com.multipleform.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.multipleform.MOdels.Forms;
import com.multipleform.Repositories.Formsrepo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/register")
public class MultiForms {

    @Autowired
    private Formsrepo fmrepo;

    @PostMapping("/formtool")
    public String formtools(@RequestBody List<Map<String, Object>> formData) {
        try {
            for (Map<String, Object> data : formData) {
                String workAssign = (String) data.get("workassign");
                String completeProject = (String) data.get("complete_project");
                Forms form = new Forms();
                form.setFullName((String) data.get("fullName"));
                form.setMobile((String) data.get("mobile"));
                form.setProjectname((String) data.get("projectname"));
                form.setTeamleader((String) data.get("Teamleader"));
                form.setProject_manager((String) data.get("project_manager"));
                form.setProjectdirector((String) data.get("projectdirector"));
                form.setCurrent_status((String) data.get("current_status"));
                form.setWorkassign(workAssign);
                form.setComplete_project(completeProject);
                fmrepo.save(form);
            }

            return "Form submitted successfully";

        } catch (Exception e) {
            // e.printStackTrace();
            System.out.println("error dfgd  " + e);
            return "Failed to submit form";
        }
    }

}
