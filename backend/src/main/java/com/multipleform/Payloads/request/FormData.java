package com.multipleform.Payloads.request;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record FormData(@NotBlank @Size(min = 3, max = 20) String fullName,
                @NotBlank @Size(max = 50) String projectname, String mobile,
                @NotBlank @Size(min = 0, max = 10) String Teamleader, @NotBlank @Size(max = 50) String project_manager,
                @NotBlank @Size(max = 50) String projectdirector,
                @NotBlank String current_status, @NotBlank LocalDate workassign,
                @NotBlank LocalDate complete_project) {
}
