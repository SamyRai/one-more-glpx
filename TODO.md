# Component Refactoring and Audit Plan

This document tracks the progress of refactoring the component library to enforce clean code, separation of concerns, and consistent use of primitive UI components. The goal is to create a system that is accessible, internationalized, fully responsive, and strictly adheres to the design theme.

## Phase 1: Foundation

- [x] **Establish a Robust Styling Foundation**
  - `class-variance-authority`, `tailwind-merge`, and `tailwindcss-animate` installed.
  - `cn` utility function created in `src/lib/utils.ts`.
  - `tailwind.config.js` enhanced with a comprehensive set of design tokens.
  - Global CSS variables for theming defined in `src/styles/globals.css`.

## Phase 2: Primitive Component Audit & Refactor

- [x] **Button.tsx**: Refactor to use CVA as a blueprint for other components.
- [x] **Card.tsx**: Refactored into a flexible compound component.
- [x] **Container.tsx**: Refactored to use theme-based container styles.
- [x] **Input.tsx**: Refactored into a composable, theme-aligned primitive.
- [x] **Modal.tsx**: Replaced custom logic with Radix UI for accessibility and robustness.
- [x] **Page.tsx**: Refactored for consistency and flexibility.
- [x] **ProofCard.tsx**: Deleted in favor of composing the `Card` primitive.
- [x] **Section.tsx**: Refactored for consistency.
- [x] **Textarea.tsx**: Refactored into a composable, theme-aligned primitive.

## Phase 3: New Primitive Component Creation

This phase focuses on building a comprehensive set of 15 new, reusable primitive components to form a complete design system.

### Form Components
- [x] **Label.tsx**: For accessible form field labeling.
- [x] **Checkbox.tsx**: For boolean selections.
- [x] **RadioGroup.tsx**: For selecting one option from a set.
- [x] **Select.tsx**: A customizable dropdown.
- [x] **Switch.tsx**: For on/off toggles.

### Layout & Content
- [x] **Accordion.tsx**: For collapsible content sections.
- [x] **Tabs.tsx**: For organizing content into switchable views.
- [x] **Separator.tsx**: A visual divider.
- [x] **Avatar.tsx**: For user images.
- [x] **Sheet.tsx**: A side panel that slides out.

### Feedback & Status
- [x] **Alert.tsx**: For important messages (e.g., success, warning, error).
- [x] **Tooltip.tsx**: For showing information on hover.
- [x] **Badge.tsx**: For displaying statuses or tags.
- [x] **Progress.tsx**: For showing completion or loading progress.
- [x] **Skeleton.tsx**: For loading state placeholders.

## Phase 4: Composite Component Audit

After the new primitives are created, the audit will resume on higher-order components to ensure they correctly compose our new, richer set of primitives.

### Layout Components (`src/components/layout/`)
- [x] **Footer.tsx**: Audit for primitive composition and style consistency.
- [x] **Header.tsx**: Audit for primitive composition and style consistency.

### Section Components (`src/components/sections/`)
- [x] **EvidenceTeaser.tsx**: Audit for primitive composition and style consistency.
- [x] **FAQ.tsx**: Audit for primitive composition and style consistency.
- [x] **FeaturedArticles.tsx**: Audit for primitive composition and style consistency.
- [x] **Hero.tsx**: Audit for primitive composition and style consistency.
- [x] **HowItWorks.tsx**: Audit for primitive composition and style consistency.
- [x] **Logos.tsx**: Audit for primitive composition and style consistency.

## Phase 5: Legacy Notes

- **ProofCard Pattern**: The functionality of the deleted `ProofCard.tsx` should be reimplemented where needed by composing the refactored `Card` component. This will be addressed during the composite component audit.