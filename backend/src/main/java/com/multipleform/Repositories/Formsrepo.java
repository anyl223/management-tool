package com.multipleform.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multipleform.MOdels.Forms;

@Repository
public interface Formsrepo extends JpaRepository<Forms, Long> {

}
