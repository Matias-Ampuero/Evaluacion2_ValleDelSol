import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styles: [`
    .fade-in { animation: fadeIn 0.4s ease-in; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    
    .glass-card-pro { background: rgba(15, 23, 42, 0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(16, 185, 129, 0.15); border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .neon-shadow { box-shadow: 0 0 15px rgba(16, 185, 129, 0.4); }
    .text-emerald-neon { color: #34d399; text-shadow: 0 0 8px rgba(52, 211, 153, 0.5); }
    
    .dash-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; margin-bottom: 24px; }
    .kpi-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 24px; }
    .apex-line-container { width: 100%; height: 220px; position: relative; }
    .apex-donut-container { width: 100%; height: 220px; display: flex; align-items: center; justify-content: center; position: relative; }
    
    /* ESTILOS DE LA TABLA REPARADOS */
    .primeng-table { width: 100%; border-collapse: collapse; text-align: left; }
    .primeng-table th { background: rgba(0,0,0,0.4); color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; padding: 12px 16px; border-bottom: 1px solid rgba(16,185,129,0.2); }
    .primeng-table td { padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem; color: #cbd5e1; }
    .primeng-table tr:hover { background: rgba(16,185,129,0.05); }

    circle.interactive-point { cursor: pointer; transition: all 0.2s ease; }
    circle.interactive-point:hover { fill: #10b981; filter: drop-shadow(0 0 8px #10b981); }

    /* TOOLTIP REPARADO */
    .custom-tooltip {
      position: fixed; z-index: 9999; background: rgba(2, 6, 23, 0.95); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(16, 185, 129, 0.5); border-radius: 12px; padding: 16px; box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
      pointer-events: none; min-width: 200px; color: #cbd5e1;
    }
    .custom-tooltip h4 { color: #34d399; font-size: 0.95rem; margin: 0 0 8px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(16, 185, 129, 0.3); font-weight: 800; }
    .custom-tooltip p { margin: 6px 0; font-size: 0.8rem; display: flex; justify-content: space-between; align-items: center; }
    .custom-tooltip span.label { font-weight: 700; color: #64748b; text-transform: uppercase; }
    .custom-tooltip span.val { color: #fff; }
    .custom-tooltip span.qty { color: #34d399; font-weight: 900; font-size: 0.9rem; }
  `]
})
export class DashboardComponent {
    tooltipVisible: boolean = false;
    tooltipX: number = 0;
    tooltipY: number = 0;
    tooltipData = { catastrofe: '', hora: '', porcentaje: '', cantidad: 0 };

    mockHistorial = [
        { id: 'REP-088', dir: 'Curva El Venado, Ruta 5', tipo: 'Incendio Forestal', emoji: '🔥' },
        { id: 'REP-089', dir: 'Puente San Jorge', tipo: 'Desborde Río', emoji: '🌊' },
        { id: 'REP-090', dir: 'Centro Chimbarongo', tipo: 'Sismo Fuerte', emoji: '🌋' },
        { id: 'REP-091', dir: 'Cruce Los Pinos', tipo: 'Asistencia Policial', emoji: '🚓' }
    ];

    showTooltip(event: MouseEvent, catastrofe: string, hora: string, porcentaje: string, cantidad: number) {
        this.tooltipVisible = true;
        this.tooltipX = event.clientX + 15;
        this.tooltipY = event.clientY - 40;
        this.tooltipData = { catastrofe, hora, porcentaje, cantidad };
    }

    hideTooltip() {
        this.tooltipVisible = false;
    }
}