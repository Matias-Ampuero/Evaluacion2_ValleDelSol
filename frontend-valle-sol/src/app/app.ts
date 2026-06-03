import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="font-family: Arial; padding: 20px;">
      <h1>🌲 Sistema de Gestión de Emergencias - Valle del Sol</h1>
      <h3>Implementación de Patrón Observador (RxJS)</h3>
      <div style="padding: 15px; border-radius: 8px; background-color: #ffebee; border: 1px solid #f44336; max-width: 400px;">
        <h2 style="color: #d32f2f; margin-top: 0;">🔥 Alerta en Tiempo Real:</h2>
        <p style="font-size: 18px; font-weight: bold;">{{ ultimaAlerta }}</p>
        <p style="color: #666; font-size: 12px;">El componente está "suscrito" al flujo asíncrono sin congelar la pantalla.</p>
      </div>
    </div>
  `
})
export class App implements OnInit, OnDestroy {
  ultimaAlerta: string = 'Esperando conexión con BFF...';
  private alertaSubscription!: Subscription;

  // 1. Creamos el "Sujeto" Observable (Simula datos llegando del servidor BFF)
  private flujoAlertasBFF$: Observable<string> = interval(3000).pipe(
    map(contador => `Reporte ciudadano #${contador + 1}: Posible foco detectado en el Sector Sur.`)
  );

  ngOnInit() {
    // 2. Nos "Suscribimos" (Patrón Observador en acción)
    this.alertaSubscription = this.flujoAlertasBFF$.subscribe({
      next: (nuevaAlerta) => {
        this.ultimaAlerta = nuevaAlerta;
        console.log('✅ Observador recibió datos:', nuevaAlerta);
      },
      error: (err) => console.error('Error en el flujo:', err)
    });
  }

  ngOnDestroy() {
    // Buenas prácticas: desuscribirse para evitar fugas de memoria
    if (this.alertaSubscription) {
      this.alertaSubscription.unsubscribe();
    }
  }
}