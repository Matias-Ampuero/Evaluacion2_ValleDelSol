package cl.duoc.vallesol.ms;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class AppTest {

    @Test
    void contextoYBaseDeDatosCarganCorrectamente() {
        // Si la conexión a PostgreSQL falla, esta prueba unitaria fallará.
        // Si llega a este punto, significa que la BD y el microservicio están
        // conectados.
        System.out.println("¡Prueba Unitaria Ejecutada: Conexión a BD Exitosa!");
        assertTrue(true);
    }
}