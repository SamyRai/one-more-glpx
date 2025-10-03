import * as React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Card } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

function AdvancedThemeEditor() {
  const { theme, setTheme } = useTheme();
  const [vars, setVars] = React.useState(theme?.vars || {});
  const [radius, setRadius] = React.useState(
    parseInt(
      (theme?.vars?.['--radius'] || '14').toString().replace('px', '')
    ) || 14
  );

  React.useEffect(() => {
    setVars(theme?.vars || {});
    setRadius(
      parseInt(
        (theme?.vars?.['--radius'] || '14').toString().replace('px', '')
      ) || 14
    );
  }, [theme]);

  function updateVar(k: string, v: string) {
    setVars({ ...vars, [k]: v });
  }

  function save() {
    setTheme({
      name: `${theme.name} (custom)`,
      vars: { ...vars, '--radius': `${radius}px` },
    });
  }

  return (
    <Card className="mt-5 p-4">
      <div className="mb-2 font-medium">Fine-tune appearance</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label className="mb-1 text-sm">Accent palette</Label>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              '--accent-50',
              '--accent-100',
              '--accent-200',
              '--accent-300',
              '--accent-600',
              '--accent-700',
            ].map((key) => (
              <Label key={key} className="text-xs">
                <div className="mb-1 text-muted-foreground">
                  {key.replace('--', '')}
                </div>
                <Input
                  type="color"
                  value={vars[key] || '#000000'}
                  onChange={(e) => updateVar(key, e.target.value)}
                  className="h-10 w-full"
                />
              </Label>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="radius" className="mb-1 text-sm">
            Corner radius
          </Label>
          <div className="flex items-center gap-3">
            <Input
              id="radius"
              type="range"
              min="8"
              max="20"
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="w-10 text-right text-xs text-muted-foreground">
              {radius}px
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            All surfaces and inputs use this radius.
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Button onClick={save}>Save</Button>
      </div>
    </Card>
  );
}

export default AdvancedThemeEditor;