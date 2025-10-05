# Component Refactoring Audit & Plan

This document tracks the effort to refactor the component library for better composition, reusability, and separation of concerns.

## Audit Checklist & Goals

- [x] **Separation of Concerns:** Move hardcoded data from components into a dedicated `/data` directory.
- [x] **Logic Extraction:** Move component-specific logic into custom hooks (`/hooks`).
- [x] **Component Composition:** Ensure `sections` components compose `marketing` or `ui` components, passing data as props.
- [x] **Consistency:** Apply patterns uniformly across the entire component library.
- [x] **Props Purity:** Components should primarily receive data via props, not manage complex state internally where it can be lifted.

## Components Refactored

### Sections

- [x] **`Features.tsx`**:
    -   **Issue:** Hardcoded feature data (title, description, icon).
    -   **Resolution:** Extracted data to `src/data/features.ts` and created `useFeatures` hook.
- [x] **`PricingSection.tsx`**:
    -   **Issue:** Hardcoded pricing plan data and comparison features.
    -   **Resolution:** Extracted data to `src/data/pricing.ts` and created `usePricing` hook.
- [x] **`CustomerStories.tsx`**:
    -   **Issue:** Hardcoded case study content.
    -   **Resolution:** Extracted data to `src/data/customer-stories.ts` and created `useCustomerStories` hook.
- [x] **`Testimonials.tsx`**:
    -   **Issue:** Hardcoded testimonials.
    -   **Resolution:** Extracted data to `src/data/testimonials.ts` and created `useTestimonials` hook.
- [x] **`Logos.tsx`**:
    -   **Issue:** Audited for hardcoded data.
    -   **Resolution:** No issues found. Already uses `src/data/technologies.ts`.

### Marketing

- [x] **`NewsletterSignup.tsx`**:
    -   **Issue:** Lacked state management; logic was not separated.
    -   **Resolution:** Added form state logic and extracted it to a `useNewsletterSignup` hook.
- [x] **`Roadmap.tsx`**:
    -   **Issue:** Data was hardcoded in the pages where the component was used.
    -   **Resolution:** Extracted data to `src/data/roadmap.ts` and created `useRoadmap` hook. Refactored `MarketingPage.tsx` and `ProductPage.tsx` to use the hook.

## New Items for Future Refactoring

### Pages

- [ ] **`MarketingPage.tsx`**:
    -   **Issue:** Contains hardcoded data for `comparisonFeatures`, `galleryImages`, and `timelineItems`.
    -   **Plan:** Extract data to new files in `src/data` and create corresponding hooks.
- [ ] **`ProductPage.tsx`**:
    -   **Issue:** Contains hardcoded data for `comparisonFeatures`, `galleryImages`, and `CaseStudyTeaser` components.
    -   **Plan:** Extract data to new files in `src/data` and create corresponding hooks.

## Refactoring Phases

**Phase 1: Data and Logic Extraction (Completed)**
- Focused on `Features`, `PricingSection`, and `NewsletterSignup`.

**Phase 2: Verification and Refinement (Completed)**
- Audited and refactored `CustomerStories`, `Testimonials`, `Logos`, and `Roadmap`.
- Updated this `TODO.md` file.

**Phase 3: Review and Cleanup (Next)**
1.  Perform a full review of all changes.
2.  Run all tests and linting to ensure codebase health.
3.  Remove any dead code or unused files resulting from the refactor.
4.  Submit the final changes.