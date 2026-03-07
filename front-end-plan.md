# Front-End Plan: Code Types & Codes Page

## Status Legend
- [ ] Pending
- [~] In Progress
- [x] Done

---

## Overview

A React page for managing **lookup/reference codes** grouped by **code types**.
Uses a master-detail layout: select a code type on the left, manage its codes on the right.
All editing is done **inline** (click a field to edit in place).

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Vite | Build tool / dev server |
| React 18 | UI framework |
| Tailwind CSS | Utility-first styling |
| Local state (useState) | Data management (mock data, no API) |

---

## Data Models

### CodeType
```ts
{
  id: string;          // user-defined short code, e.g. "STATUS"
  name: string;        // human-readable label, e.g. "Status Codes"
  description: string; // optional notes
  active: boolean;     // enabled/disabled flag
}
```

### Code
```ts
{
  id: string;           // auto-generated uuid
  codeTypeId: string;   // FK to CodeType.id
  value: string;        // the actual code, e.g. "ACTIVE"
  description: string;  // optional notes
  sortOrder: number;    // controls display order
  active: boolean;      // enabled/disabled flag
}
```

---

## Page Layout

```
┌──────────────────────────────────────────────────────────────┐
│  Code Types & Codes                                          │
├───────────────────────┬──────────────────────────────────────┤
│  CODE TYPES           │  CODES  (for selected type)          │
│  ┌─────────────────┐  │  ┌────────────────────────────────┐  │
│  │ [ID]  Name  ✓  │  │  │ Value │ Description │ Sort │ ✓ │  │
│  │ ...             │  │  │ ...   │ ...         │ ...  │   │  │
│  └─────────────────┘  │  └────────────────────────────────┘  │
└───────────────────────┴──────────────────────────────────────┘
```

---

## File Structure

```
app/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── data/
│   │   └── mockData.js        # seed data for code types & codes
│   ├── components/
│   │   ├── CodeTypeList.jsx   # left panel — list of code types
│   │   ├── CodeList.jsx       # right panel — codes for selected type
│   │   └── InlineCell.jsx     # reusable inline-editable cell
│   └── index.css              # Tailwind directives
```

---

## Implementation Tasks

- [x] Create front-end-plan.md
- [x] Scaffold Vite + React + Tailwind in `/app`
- [x] Create mock data (`mockData.js`)
- [x] Build `InlineCell` — reusable click-to-edit component
- [x] Build `CodeTypeList` — left panel with inline editing
- [x] Build `CodeList` — right panel with inline editing
- [x] Wire `App.jsx` — shared state, selection, layout
- [x] Verify build succeeds (`npm run build` — clean, no errors)
- [x] Commit and push to `claude/create-new-branch-gNkX1`

---

## Inline Editing Behaviour

- Clicking any editable cell replaces it with an `<input>` (or `<textarea>` for descriptions)
- `Enter` or blur saves the value back to state
- `Escape` cancels and reverts
- Active toggle uses a checkbox (no click-to-edit needed)
- Selected code type row is highlighted

---

## Mock Seed Data

**Code Types:**
- `STATUS` — Status Codes
- `PRIORITY` — Priority Levels
- `CATEGORY` — Category Tags

**Codes per type** (3–4 each), e.g. for STATUS:
- `ACTIVE`, `INACTIVE`, `PENDING`, `ARCHIVED`
