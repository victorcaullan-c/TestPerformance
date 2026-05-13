import http from 'k6/http';
import {sleep,check} from 'k6';
import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
import { parse } from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const baseUrl='https://pokeapi.co/api/v2';

export const options = {
  scenarios: {
    metodo_get_pokemon_escenario: {
      executor: 'ramping-vus',
      startVUs: 10,
      stages: [
        { duration: '10s', target: 10 },
        { duration: '10s', target: 20 },
        { duration: '10s', target: 0 },
      ],
      exec: 'default', // Nombre de la función a ejecutar
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(50)<300'],
    checks: ['rate > 0.95'],
  }
};


export default function () {
const response = http.get(baseUrl + '/pokemon/pikachu',
{ headers:
  {'Content-Type': 'application/json'}
  });

    // Ejecuta validaciones sobre la respuesta HTTP
    // Verifica que el status sea 200 y que el tiempo de respuesta sea menor a 400ms
    const checks = check(response, {
    'validacion de status 200': (r) => r.status === 200,
    'validacion de tiempo de respuesta < 400ms': (r) => r.timings.duration < 400,
    });

// Registra en consola si las validaciones pasaron o fallaron
if(!checks){
    console.error(`VU ${__VU} at iteration ${__ITER} failed checks: ${JSON.stringify(checks)}`);
}
else{
    console.log(`VU ${__VU} at iteration ${__ITER} passed checks: ${JSON.stringify(checks)}`);
    console.log(`VU ${__VU} at iteration ${__ITER} STATUS ${response.status}  tiempo ${response.timings.duration} ms`);
}
 // Pausa de 1 segundo entre iteraciones para simular el tiempo de espera del usuario
    sleep(1);



}

export function handleSummary(data){
console.log('Generando el reporte HTML...');
return  {
"reports/pokeget.html": htmlReport(data),
};
}
