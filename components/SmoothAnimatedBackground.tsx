'use client';

export function SmoothAnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 - Base gradient */}
      <div className="absolute inset-0 bg-gradient-layer-1 animate-fade-1" />
      
      {/* Layer 2 - Morphing gradient */}
      <div className="absolute inset-0 bg-gradient-layer-2 animate-fade-2" />
      
      {/* Layer 3 - Morphing gradient */}
      <div className="absolute inset-0 bg-gradient-layer-3 animate-fade-3" />
      
      {/* Layer 4 - Morphing gradient */}
      <div className="absolute inset-0 bg-gradient-layer-4 animate-fade-4" />
    </div>
  );
}
