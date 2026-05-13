# Conclusión del test de performance sobre `pokeapi.co/api/v2/pokemon/pikachu`

### Análisis de resultados

- **Umbrales y checks definidos**
    - **checks**: Se requería que más del 95% de las validaciones fueran exitosas (`rate > 0.95`).  
      🔴 **No se cumplió**: la tasa de éxito fue de 93.47%.
    - **http_req_duration (p95 < 500 ms, p50 < 300 ms)**:  
      🟢 **Cumplido**: El 95% de las respuestas estuvieron por debajo de los 487 ms y el 50% por debajo de 228 ms.


- **Estabilidad:** La API respondió sin errores de red y manejó correctamente la carga simulada de hasta 20 usuarios virtuales.
- **Rendimiento:** El 95% de las respuestas fue menor a 487ms y el 50% menor a 228ms, por lo que los umbrales principales de tiempo se cumplieron.
- **Checks:** El porcentaje global de checks exitosos fue de 93.47%, por debajo del objetivo (95%). Las fallas se debieron principalmente a respuestas que superaron el límite de 400ms en algunos casos.
- **Recomendación:** Se sugiere monitorear posibles retrasos bajo carga, ajustar thresholds según la capacidad real de la API, y revisar si alguna optimización es viable.

**Resumen:**  
La API es estable y rápida en la mayoría de los casos, pero tiene margen de mejora en la consistencia del tiempo de respuesta bajo carga alta.



# Conclusión del test de performance sobre `fakestoreapi/auth/login (con CSV)`

### Análisis de resultados

- **Umbrales y checks definidos**
    - **checks**: Se requería que más del 95% de las validaciones fueran exitosas (`rate > 0.95`).  
      🟢 **Cumplido**: la tasa de éxito fue de 97.34%.
    - **http_req_duration (p95 < 500 ms, p50 < 300 ms)**:  
      🔴 **No se cumplió**: El 95% alcanzo hasta 667ms (superando los thresholds definidos).

- **Estabilidad:** La API respondió correctamente a todas las solicitudes, sin errores de red ni fallos de conexión.
- **Checks:** El 97.34% de las validaciones fueron exitosas, superando el umbral objetivo del 95%.
- **Rendimiento:** La mediana de tiempo de respuesta fue de 398ms, pero el 95% de las respuestas alcanzó hasta 667ms (superando los thresholds definidos de 500ms para p(95) y 300ms para p(50)).
- **Validación:** El check de status 201 se cumplió en todas las iteraciones; sin embargo, el tiempo de respuesta fue el principal motivo de fallas en las validaciones estrictas de rendimiento.
- **Recomendación:** Aunque el sistema fue funcionalmente correcto con alta tasa de éxito, sería ideal investigar los casos de mayor latencia y ajustar thresholds o mejorar el backend si se requiere asegurar tiempos más bajos.

**Resumen:**  
La API `fakestoreapi/login` es confiable y estable en condiciones de carga moderada, pero presenta respuestas lentas ocasionales que impidieron cumplir todos los objetivos de rendimiento más exigentes.
