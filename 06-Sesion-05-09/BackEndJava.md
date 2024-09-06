# Backend Java - Package
1. Entity 
   * Persona 
  
    ```java
    package com.sena.EjemploAPI.Entity;

    import jakarta.persistence.*;

    @Entity
    @Table(name = "persona")
    public class Persona {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "nombre", length = 50)
        private  String nombre;

        @Column(name = "celular", length = 20)
        private  String celular;

        @Column(name = "correo", length = 50)
        private  String correo;

        @Column(name = "direccion", length = 50)
        private  String direccion;

        @Column(name = "estado")
        private  Boolean estado;

        @Column(name = "edad")
        private  Integer edad;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getCelular() {
            return celular;
        }

        public void setCelular(String celular) {
            this.celular = celular;
        }

        public String getCorreo() {
            return correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }

        public String getDireccion() {
            return direccion;
        }

        public void setDireccion(String direccion) {
            this.direccion = direccion;
        }

        public Boolean getEstado() {
            return estado;
        }

        public void setEstado(Boolean estado) {
            this.estado = estado;
        }

        public Integer getEdad() {
            return edad;
        }

        public void setEdad(Integer edad) {
            this.edad = edad;
        }
    }```
1. IRepository
   
   ```java
    package com.sena.EjemploAPI.IRepository;

    import com.sena.EjemploAPI.Entity.Persona;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;

    @Repository
        public interface IPersonaRepository extends JpaRepository<Persona, Long> {
    }```

2. IService
    ```java
    package com.sena.EjemploAPI.IService;

    import com.sena.EjemploAPI.Entity.Persona;

    import java.util.List;
    import java.util.Optional;

    public interface IPersonaService {

        //Retorna la lista de todos los datos de la entidad
        List<Persona> All();

        //Retorna el registro de la entidad por ID
        Optional<Persona> FindById(Long id);

        //Guardar un registro en la entidad
        Persona Save(Persona persona);

        //Modificar un registro de la entidad
        void  Update(Persona persona, Long id);

        //Eliminar un registro de la entidad
        void Datele(Long id);
    }
    ```
3. Service
    
    ```java
    package com.sena.EjemploAPI.Service;

    import com.sena.EjemploAPI.Entity.Persona;
    import com.sena.EjemploAPI.IRepository.IPersonaRepository;
    import com.sena.EjemploAPI.IService.IPersonaService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Service;

    import java.util.List;
    import java.util.Optional;

    @Service
    public class PersonaService implements IPersonaService {

        @Autowired
        private IPersonaRepository repository;

        @Override
        public List<Persona> All() {
            return repository.findAll();
        }

        @Override
        public Optional<Persona> FindById(Long id) {
            return repository.findById(id);
        }

        @Override
        public Persona Save(Persona persona) {
            return repository.save(persona);
        }

        @Override
        public void Update(Persona persona, Long id) {
            //Verificar si existe
            Optional<Persona> op = repository.findById(id);

            //Verficar si el objeto op esta lleno o vacio.
            if(op.isEmpty()){
                System.out.print("Registro no existe.");
            }else {
                Persona updatePersona = op.get();
                updatePersona.setNombre(persona.getNombre());
                updatePersona.setCorreo(persona.getCorreo());
                updatePersona.setCelular(persona.getCelular());
                updatePersona.setDireccion(persona.getDireccion());

                repository.save(updatePersona);
            }
        }

        @Override
        public void Datele(Long id) {
            repository.deleteById(id);
        }
    }
    ```

4. Controller

    ```java
    package com.sena.EjemploAPI.Controller;

    import com.sena.EjemploAPI.Entity.Persona;
    import com.sena.EjemploAPI.IService.IPersonaService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;
    import java.util.Optional;

    @CrossOrigin(originPatterns = "*")
    @RestController
    @RequestMapping("v1/api/persona")
    public class PersonaController {

        @Autowired
        private IPersonaService service;

        @GetMapping()
        public List<Persona> All() {
            return service.All();
        }

        @GetMapping("/{id}")
        public Optional<Persona> FindById(@PathVariable Long id) {
            return service.FindById(id);
        }

        @PostMapping()
        public Persona Save(@RequestBody Persona persona) {
            return service.Save(persona);
        }

        @PutMapping("/{id}")
        public void Update(@RequestBody Persona persona, @PathVariable Long id) {
            service.Update(persona,id);
        }

        @DeleteMapping("/{id}")
        public void Datele(@PathVariable Long id) {
            service.Datele(id);
        }
    }

    ```