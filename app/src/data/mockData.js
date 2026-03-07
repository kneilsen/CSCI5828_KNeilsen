export const initialCodeTypes = [
  { id: 'STATUS',   name: 'Status Codes',    description: 'Record lifecycle statuses', active: true },
  { id: 'PRIORITY', name: 'Priority Levels', description: 'Task and issue priorities',  active: true },
  { id: 'CATEGORY', name: 'Category Tags',   description: 'General categorisation',     active: false },
]

export const initialCodes = [
  // STATUS
  { id: 's1', codeTypeId: 'STATUS', value: 'ACTIVE',   description: 'Record is active and in use',  sortOrder: 1, active: true },
  { id: 's2', codeTypeId: 'STATUS', value: 'INACTIVE', description: 'Record is disabled',           sortOrder: 2, active: true },
  { id: 's3', codeTypeId: 'STATUS', value: 'PENDING',  description: 'Awaiting approval',            sortOrder: 3, active: true },
  { id: 's4', codeTypeId: 'STATUS', value: 'ARCHIVED', description: 'Soft-deleted, kept for audit', sortOrder: 4, active: false },

  // PRIORITY
  { id: 'p1', codeTypeId: 'PRIORITY', value: 'LOW',      description: 'Low urgency',      sortOrder: 1, active: true },
  { id: 'p2', codeTypeId: 'PRIORITY', value: 'MEDIUM',   description: 'Normal urgency',   sortOrder: 2, active: true },
  { id: 'p3', codeTypeId: 'PRIORITY', value: 'HIGH',     description: 'High urgency',     sortOrder: 3, active: true },
  { id: 'p4', codeTypeId: 'PRIORITY', value: 'CRITICAL', description: 'Immediate action', sortOrder: 4, active: true },

  // CATEGORY
  { id: 'c1', codeTypeId: 'CATEGORY', value: 'BUG',     description: 'Defect or error',   sortOrder: 1, active: true },
  { id: 'c2', codeTypeId: 'CATEGORY', value: 'FEATURE', description: 'New functionality', sortOrder: 2, active: true },
  { id: 'c3', codeTypeId: 'CATEGORY', value: 'TASK',    description: 'General work item', sortOrder: 3, active: true },
]
