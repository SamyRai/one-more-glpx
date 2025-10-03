import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

function AdvancedThemeEditor() {
  const { theme, setTheme } = useTheme();
  const [vars, setVars] = useState(theme?.vars || {});
  const [radius, setRadius] = useState(
    parseInt((theme?.vars?.["--radius"] || "14").toString().replace('px', '')) || 14
  );

  useEffect(() => {
    setVars(theme?.vars || {});
    setRadius(
      parseInt((theme?.vars?.["--radius"] || "14").toString().replace('px', '')) || 14
    );
  }, [theme]);

  function updateVar(k: string, v: string) {
    setVars({ ...vars, [k]: v });
  }

  function save() {
    setTheme({ name: `${theme.name} (custom)`, vars: { ...vars, "--radius": `${radius}px` } });
  }

  return (
    <div className="mt-5 rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] p-4 bg-[var(--bg-soft)]">
      <div className="font-medium mb-2">Fine‑tune appearance</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-sm font-medium mb-1">Accent palette</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["--accent-50", "--accent-100", "--accent-200", "--accent-300", "--accent-600", "--accent-700"].map(key => (
              <label key={key} className="text-xs">
                <div className="mb-1 text-[var(--muted)]">{key.replace('--', '')}</div>
                <input
                  type="color"
                  value={vars[key] || "#000000"}
                  onChange={e => updateVar(key, e.target.value)}
                  className="h-10 w-full border rounded"
                />
              </label>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium mb-1">Corner radius</div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="8"
              max="20"
              value={radius}
              onChange={e => setRadius(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-xs text-[var(--muted)] w-10 text-right">{radius}px</span>
          </div>
          <p className="text-xs text-[var(--muted-2)] mt-1">
            All surfaces and inputs use this radius.
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={save}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-600)] hover:bg-[var(--accent-700)] text-white px-4 py-2"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AdvancedThemeEditor;