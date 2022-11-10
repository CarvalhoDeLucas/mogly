/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mogly.backend.services;

import com.mogly.backend.entities.Person;
import com.mogly.backend.repositories.PersonRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Usuario
 */
@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public List<Person> findAll() {
        return personRepository.findAll();
    }

    public Person findPersonById(Long id) {
        Optional<Person> optional = personRepository.findById(id);
        return optional.get();
    }

    public Person save(Person person) {
        return personRepository.save(person);
    }

    public void delete(Long id) {
        personRepository.deleteById(id);
    }

    public Person update(Long id, Person person) {
        Person findPerson = personRepository.getById(id);
        updateData(findPerson, person);
        return personRepository.save(findPerson);
    }

    private void updateData(Person entity, Person person) {
        entity.setFullName(person.getFullName());
        entity.setEmail(person.getEmail());
        entity.setBirthDate(person.getBirthDate());
        entity.setCell(person.getCell());
        entity.setCpf(person.getCpf());
        entity.setRg(person.getRg());
        entity.setObservation(person.getObservation());
    }
}
