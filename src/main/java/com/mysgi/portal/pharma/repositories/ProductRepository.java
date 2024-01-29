package com.mysgi.portal.pharma.repositories;

import com.mysgi.portal.pharma.models.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
}
