import React, { useState } from 'react';
import { Network, Zap, RefreshCw, AlertTriangle, CheckCircle2, Cpu, Server } from 'lucide-react';

// Pre-defined nodes and links for the network routing demo
const initialNodes = [
  { id: 'R1', name: 'R1: Villeurbanne (TCL)', x: 15, y: 30, status: 'active' },
  { id: 'R2', name: 'R2: Lyon Part-Dieu', x: 45, y: 20, status: 'active' },
  { id: 'R3', name: 'R3: Hub Central INSA', x: 50, y: 70, status: 'active' },
  { id: 'R4', name: 'R4: Gateway Transit', x: 80, y: 35, status: 'active' },
  { id: 'R5', name: 'R5: Le Tampon (Run)', x: 85, y: 80, status: 'active' },
];

const initialLinks = [
  { from: 'R1', to: 'R2', weight: 4, status: 'active' },
  { from: 'R1', to: 'R3', weight: 12, status: 'active' },
  { from: 'R2', to: 'R4', weight: 8, status: 'active' },
  { from: 'R2', to: 'R3', weight: 3, status: 'active' },
  { from: 'R3', to: 'R5', weight: 15, status: 'active' },
  { from: 'R4', to: 'R5', weight: 6, status: 'active' },
];

export default function RoutingSimWidget() {
  const [nodes, setNodes] = useState(initialNodes);
  const [links, setLinks] = useState(initialLinks);
  const [selectedStart, setSelectedStart] = useState('R1');
  const [selectedEnd, setSelectedEnd] = useState('R5');
  const [failedNode, setFailedNode] = useState(null);

  // Simple Dijkstra calculation for shortest path
  const computeShortestPath = () => {
    const activeNodes = nodes.filter(n => n.status === 'active').map(n => n.id);
    if (!activeNodes.includes(selectedStart) || !activeNodes.includes(selectedEnd)) {
      return { path: [], cost: Infinity };
    }

    const distances = {};
    const previous = {};
    const unvisited = new Set(activeNodes);

    activeNodes.forEach(nodeId => {
      distances[nodeId] = Infinity;
      previous[nodeId] = null;
    });
    distances[selectedStart] = 0;

    while (unvisited.size > 0) {
      let current = null;
      let minDistance = Infinity;

      unvisited.forEach(nodeId => {
        if (distances[nodeId] < minDistance) {
          minDistance = distances[nodeId];
          current = nodeId;
        }
      });

      if (current === null || current === selectedEnd) break;
      unvisited.delete(current);

      // Find active neighbors
      const activeNeighbors = links.filter(l => 
        l.status === 'active' && (l.from === current || l.to === current)
      );

      activeNeighbors.forEach(link => {
        const neighbor = link.from === current ? link.to : link.from;
        if (unvisited.has(neighbor)) {
          const alt = distances[current] + link.weight;
          if (alt < distances[neighbor]) {
            distances[neighbor] = alt;
            previous[neighbor] = current;
          }
        }
      });
    }

    // Reconstruct path
    const path = [];
    let curr = selectedEnd;
    while (curr !== null) {
      path.unshift(curr);
      curr = previous[curr];
    }

    return {
      path: path[0] === selectedStart ? path : [],
      cost: distances[selectedEnd] === Infinity ? 'Inaccessible' : `${distances[selectedEnd]} ms`
    };
  };

  const toggleNodeFailure = (nodeId) => {
    if (nodeId === 'R1' || nodeId === 'R5') return; // Don't fail origin/destination

    if (failedNode === nodeId) {
      // Restore
      setFailedNode(null);
      setNodes(nodes.map(n => ({ ...n, status: 'active' })));
      setLinks(links.map(l => ({ ...l, status: 'active' })));
    } else {
      // Fail node
      setFailedNode(nodeId);
      setNodes(nodes.map(n => n.id === nodeId ? { ...n, status: 'failed' } : { ...n, status: 'active' }));
      setLinks(links.map(l => (l.from === nodeId || l.to === nodeId) ? { ...l, status: 'failed' } : { ...l, status: 'active' }));
    }
  };

  const resetSimulation = () => {
    setFailedNode(null);
    setNodes(initialNodes);
    setLinks(initialLinks);
  };

  const result = computeShortestPath();

  return (
    <div className="rounded-xl bg-tech-card border border-tech-border p-6 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-tech-border">
        <div>
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-tech-cyan" />
            <h3 className="font-display font-bold text-xl text-tech-light">
              Démonstrateur Réseau Live (Simulateur MapMyNet)
            </h3>
          </div>
          <p className="text-tech-muted text-xs font-mono mt-1">
            // Modélisation d'algorithmes de routage Dijkstra avec injection de pannes (Chaos Engineering).
          </p>
        </div>

        <button 
          onClick={resetSimulation}
          className="font-mono text-xs px-3 py-1.5 rounded bg-tech-darkest border border-tech-border hover:border-tech-cyan text-tech-muted hover:text-tech-light flex items-center gap-1.5 self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Réinitialiser le Réseau
        </button>
      </div>

      {/* Interactive Topology Visualizer */}
      <div className="relative h-64 bg-tech-darkest rounded-lg border border-tech-border/80 overflow-hidden p-4 flex flex-col justify-between">
        
        {/* Topology Map Canvas (SVG Lines + Node Pills) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {links.map((link, idx) => {
            const n1 = nodes.find(n => n.id === link.from);
            const n2 = nodes.find(n => n.id === link.to);
            if (!n1 || !n2) return null;

            const isInPath = result.path.includes(link.from) && result.path.includes(link.to) && 
              Math.abs(result.path.indexOf(link.from) - result.path.indexOf(link.to)) === 1;

            return (
              <line
                key={idx}
                x1={`${n1.x}%`}
                y1={`${n1.y}%`}
                x2={`${n2.x}%`}
                y2={`${n2.y}%`}
                stroke={link.status === 'failed' ? '#ef4444' : isInPath ? '#00E5FF' : '#232F47'}
                strokeWidth={isInPath ? "3" : "1.5"}
                strokeDasharray={link.status === 'failed' ? "4" : "0"}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>

        {/* Nodes Layer */}
        <div className="relative z-10 w-full h-full">
          {nodes.map((node) => {
            const isSelectedPath = result.path.includes(node.id);
            const isFailed = node.status === 'failed';

            return (
              <button
                key={node.id}
                onClick={() => toggleNodeFailure(node.id)}
                disabled={node.id === 'R1' || node.id === 'R5'}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all duration-300 flex items-center gap-1.5 shadow-lg ${
                  isFailed
                    ? 'bg-red-950/80 border-red-500 text-red-400 animate-pulse'
                    : isSelectedPath
                    ? 'bg-tech-dark border-tech-cyan text-tech-cyan shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                    : 'bg-tech-darkest border-tech-border text-tech-muted hover:border-tech-cyan/50'
                }`}
                title={node.id === 'R1' || node.id === 'R5' ? 'Nœud origine/destination' : 'Cliquer pour simuler une panne'}
              >
                <Server className="w-3.5 h-3.5" />
                <span>{node.id}</span>
                {isFailed && <AlertTriangle className="w-3 h-3 text-red-400 ml-1" />}
              </button>
            );
          })}
        </div>

        {/* Canvas Footer Telemetry */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] bg-tech-dark/90 p-2.5 rounded border border-tech-border/60">
          <div className="flex items-center gap-2">
            <span className="text-tech-muted">Origine: <strong className="text-tech-light">R1 (Villeurbanne)</strong></span>
            <span className="text-tech-subtle">➜</span>
            <span className="text-tech-muted">Destination: <strong className="text-tech-light">R5 (Le Tampon)</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-tech-muted">Chemin Dijkstra Optimal:</span>
            <span className="text-tech-cyan font-bold px-2 py-0.5 rounded bg-tech-cyan/10 border border-tech-cyan/20">
              {result.path.length > 0 ? result.path.join(' ➔ ') : 'AUCUN CHEMIN'}
            </span>
          </div>
        </div>

      </div>

      {/* Control & Chaos Injection Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
        <div className="p-3 rounded bg-tech-darkest border border-tech-border">
          <div className="text-tech-muted mb-1 text-[11px]">Coût Optimal calculé :</div>
          <div className="text-lg font-bold text-tech-cyan">{result.cost}</div>
        </div>

        <div className="p-3 rounded bg-tech-darkest border border-tech-border">
          <div className="text-tech-muted mb-1 text-[11px]">Injection de Chaos :</div>
          <div className="text-xs text-tech-amber font-semibold">
            {failedNode ? `Routeur ${failedNode} Hors-Service` : 'Réseau Nominal (100% Fonctionnel)'}
          </div>
        </div>

        <div className="p-3 rounded bg-tech-darkest border border-tech-border flex items-center justify-between">
          <div>
            <div className="text-tech-muted text-[11px]">Algorithme appliqué :</div>
            <div className="text-xs text-tech-emerald font-bold">Dijkstra Shortest Path</div>
          </div>
          <Zap className="w-5 h-5 text-tech-cyan animate-pulse" />
        </div>
      </div>

    </div>
  );
}
