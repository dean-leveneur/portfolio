import React, { useState } from 'react';
import { Calculator, Award, CheckCircle2, AlertCircle, RefreshCw, BarChart2 } from 'lucide-react';
import { insa3ifData } from '../data/insaGradesData';

export default function GradeCalcWidget() {
  const [grades, setGrades] = useState(() => {
    const initial = {};
    insa3ifData.ues.forEach(ue => {
      ue.ecs.forEach(ec => {
        initial[ec.id] = ec.defaultGrade;
      });
    });
    return initial;
  });

  const handleGradeChange = (ecId, val) => {
    const num = Math.min(20, Math.max(0, parseFloat(val) || 0));
    setGrades(prev => ({ ...prev, [ecId]: num }));
  };

  // Calculate UE Averages and ECTS
  const computeUEStats = (ue) => {
    let totalPoints = 0;
    let totalWeight = 0;
    ue.ecs.forEach(ec => {
      const grade = grades[ec.id] || 0;
      totalPoints += grade * ec.weight;
      totalWeight += ec.weight;
    });
    const avg = totalWeight > 0 ? (totalPoints / totalWeight) : 0;
    const validated = avg >= 10.0;
    return { avg: avg.toFixed(2), validated, totalWeight };
  };

  // Compute Overall Semester Stats
  let overallPoints = 0;
  let overallEcts = 0;
  let totalECTSValidated = 0;

  insa3ifData.ues.forEach(ue => {
    const stats = computeUEStats(ue);
    overallPoints += parseFloat(stats.avg) * ue.ects;
    overallEcts += ue.ects;
    if (stats.validated) {
      totalECTSValidated += ue.ects;
    }
  });

  const overallAverage = overallEcts > 0 ? (overallPoints / overallEcts).toFixed(2) : '0.00';

  const resetGrades = () => {
    const reset = {};
    insa3ifData.ues.forEach(ue => {
      ue.ecs.forEach(ec => {
        reset[ec.id] = ec.defaultGrade;
      });
    });
    setGrades(reset);
  };

  return (
    <div className="rounded-xl bg-tech-card border border-tech-border p-6 shadow-2xl space-y-6">
      
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-tech-border">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-tech-amber" />
            <h3 className="font-display font-bold text-xl text-tech-light">
              Calculateur de Notes & ECTS INSA 3IF
            </h3>
          </div>
          <p className="text-tech-muted text-xs font-mono mt-1">
            // Simulation interactive des UEs et validation des crédits académiques.
          </p>
        </div>

        <button 
          onClick={resetGrades}
          className="font-mono text-xs px-3 py-1.5 rounded bg-tech-darkest border border-tech-border hover:border-tech-amber text-tech-muted hover:text-tech-light flex items-center gap-1.5 self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Réinitialiser les Notes
        </button>
      </div>

      {/* Main Stats Header Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
        
        <div className="p-4 rounded bg-tech-darkest border border-tech-border">
          <div className="text-tech-muted text-[11px] mb-1">Moyenne Générale Pondérée</div>
          <div className="text-2xl font-bold text-tech-cyan">{overallAverage} / 20</div>
        </div>

        <div className="p-4 rounded bg-tech-darkest border border-tech-border">
          <div className="text-tech-muted text-[11px] mb-1">Crédits ECTS Validés</div>
          <div className="text-2xl font-bold text-tech-emerald flex items-center gap-2">
            {totalECTSValidated} / {insa3ifData.totalEctsTarget} ECTS
            {totalECTSValidated === 30 && <Award className="w-5 h-5 text-tech-amber" />}
          </div>
        </div>

        <div className="p-4 rounded bg-tech-darkest border border-tech-border">
          <div className="text-tech-muted text-[11px] mb-1">Statut du Semestre 5</div>
          <div className={`text-sm font-bold mt-1 ${totalECTSValidated === 30 ? 'text-tech-emerald' : 'text-tech-amber'}`}>
            {totalECTSValidated === 30 ? '✓ SEMESTRE VALIDÉ' : '⚠ COMPENSATIONS EN COURS'}
          </div>
        </div>

      </div>

      {/* UEs List & Sliders */}
      <div className="space-y-4">
        {insa3ifData.ues.map((ue) => {
          const stats = computeUEStats(ue);

          return (
            <div key={ue.id} className="p-4 rounded-lg bg-tech-darkest border border-tech-border space-y-3">
              
              {/* UE Title bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-tech-border/50">
                <div className="font-display font-bold text-sm text-tech-light flex items-center gap-2">
                  {ue.name}
                  <span className="font-mono text-[11px] text-tech-muted px-2 py-0.5 rounded bg-tech-card">
                    {ue.ects} ECTS
                  </span>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-tech-muted">
                    Moyenne: <strong className="text-tech-light">{stats.avg} / 20</strong>
                  </span>
                  <span className={`px-2 py-0.5 rounded font-semibold text-[11px] ${
                    stats.validated 
                      ? 'bg-tech-emerald/10 text-tech-emerald border border-tech-emerald/30' 
                      : 'bg-red-950/60 text-red-400 border border-red-500/30'
                  }`}>
                    {stats.validated ? 'UE Validée' : 'Non Validée (< 10)'}
                  </span>
                </div>
              </div>

              {/* ECs Sliders Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {ue.ecs.map((ec) => (
                  <div key={ec.id} className="p-2.5 rounded bg-tech-dark border border-tech-border/60 font-mono text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-tech-muted truncate max-w-[180px]">{ec.name}</span>
                      <span className="text-tech-subtle">Coeff. {ec.weight}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <input 
                        type="range" 
                        min="0" 
                        max="20" 
                        step="0.5"
                        value={grades[ec.id] || 0}
                        onChange={(e) => handleGradeChange(ec.id, e.target.value)}
                        className="w-full accent-tech-cyan bg-tech-card h-1.5 rounded cursor-pointer"
                      />
                      <input 
                        type="number" 
                        min="0" 
                        max="20" 
                        step="0.5"
                        value={grades[ec.id] || 0}
                        onChange={(e) => handleGradeChange(ec.id, e.target.value)}
                        className="w-14 px-2 py-1 rounded bg-tech-card border border-tech-border text-tech-light font-bold text-center text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
