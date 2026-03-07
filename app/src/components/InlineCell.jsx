import { useState, useRef, useEffect } from 'react'

/**
 * A table cell that renders as plain text and switches to an input on click.
 * Props:
 *   value        – current value (string | number)
 *   onSave       – (newValue) => void  called on Enter / blur
 *   type         – 'text' | 'number' | 'textarea'  (default 'text')
 *   className    – extra classes for the display span
 */
export default function InlineCell({ value, onSave, type = 'text', className = '' }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(String(value ?? ''))
  const inputRef = useRef(null)

  useEffect(() => {
    if (editing) inputRef.current?.focus()
  }, [editing])

  // Keep draft in sync if parent value changes while not editing
  useEffect(() => {
    if (!editing) setDraft(String(value ?? ''))
  }, [value, editing])

  function commit() {
    setEditing(false)
    const saved = type === 'number' ? Number(draft) : draft
    if (saved !== value) onSave(saved)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && type !== 'textarea') commit()
    if (e.key === 'Escape') {
      setDraft(String(value ?? ''))
      setEditing(false)
    }
  }

  if (editing) {
    const shared = {
      ref: inputRef,
      value: draft,
      onChange: (e) => setDraft(e.target.value),
      onBlur: commit,
      onKeyDown: handleKeyDown,
      className:
        'w-full px-1 py-0.5 border border-blue-400 rounded text-sm outline-none focus:ring-1 focus:ring-blue-400 bg-white text-gray-900',
    }
    return type === 'textarea' ? (
      <textarea rows={2} {...shared} />
    ) : (
      <input type={type} {...shared} />
    )
  }

  return (
    <span
      onClick={() => setEditing(true)}
      title="Click to edit"
      className={`cursor-text block w-full px-1 py-0.5 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors ${className}`}
    >
      {value ?? <span className="text-gray-400 italic">—</span>}
    </span>
  )
}
