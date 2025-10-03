import * as React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalClose,
} from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import AdvancedThemeEditor from './AdvancedThemeEditor';

function ThemeModal() {
  const {
    open,
    setOpen,
    setTheme,
    theme: currentTheme,
    presets,
  } = useTheme();

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle className="inline-flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Theme settings
          </ModalTitle>
          <ModalDescription>
            Pick a preset or fine-tune the accent. Changes persist to
            localStorage.
          </ModalDescription>
        </ModalHeader>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {presets.map((p) => (
            <Card
              key={p.name}
              onClick={() => {
                setTheme({ name: p.name, vars: p.vars });
                setOpen(false);
              }}
              className={`cursor-pointer p-3 text-left hover:bg-muted ${
                currentTheme?.name === p.name ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="font-medium">{p.name}</div>
              <div className="mt-2 flex items-center gap-1">
                <span
                  className="h-5 w-5 rounded bg-primary ring-1 ring-border"
                  style={p.vars}
                />
                <span
                  className="h-5 w-5 rounded bg-secondary ring-1 ring-border"
                  style={p.vars}
                />
                <span
                  className="h-5 w-5 rounded bg-accent ring-1 ring-border"
                  style={p.vars}
                />
                <span
                  className="h-5 w-5 rounded bg-muted ring-1 ring-border"
                  style={p.vars}
                />
              </div>
            </Card>
          ))}
        </div>
        <AdvancedThemeEditor />
        <ModalClose asChild>
          <Button variant="ghost" className="mt-4 w-full">
            Close
          </Button>
        </ModalClose>
      </ModalContent>
    </Modal>
  );
}

export default ThemeModal;