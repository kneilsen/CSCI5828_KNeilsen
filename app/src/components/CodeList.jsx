import InlineCell from './InlineCell'

/**
 * Right panel — lists codes for the selected code type.
 * Props:
 *   selectedType  – CodeType | null
 *   codes         – Code[]  (already filtered to this type)
 *   onUpdate      – (id, field, value) => void
 */
export default function CodeList({ selectedType, codes, onUpdate }) {
  if (!selectedType) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400 text-sm">
        <div className="text-center">
          <div className="text-4xl mb-3">←</div>
          <p>Select a code type to view its codes</p>
        </div>
      </div>
    )
  }

  const sorted = [...codes].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
        <span className="font-mono text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
          {selectedType.id}
        </span>
        <h2 className="text-sm font-semibold text-gray-700">{selectedType.name}</h2>
        <span className="ml-auto text-xs text-gray-400">{codes.length} code{codes.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="overflow-auto flex-1">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="px-3 py-2 text-left w-32">Value</th>
              <th className="px-3 py-2 text-left">Description</th>
              <th className="px-3 py-2 text-center w-20">Sort</th>
              <th className="px-3 py-2 text-center w-14">Active</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((code) => (
              <tr
                key={code.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-3 py-2 font-mono">
                  <InlineCell
                    value={code.value}
                    onSave={(v) => onUpdate(code.id, 'value', v)}
                    className="font-mono text-gray-800 font-medium"
                  />
                </td>

                <td className="px-3 py-2">
                  <InlineCell
                    value={code.description}
                    onSave={(v) => onUpdate(code.id, 'description', v)}
                    type="textarea"
                    className="text-gray-500"
                  />
                </td>

                <td className="px-3 py-2 text-center">
                  <InlineCell
                    value={code.sortOrder}
                    onSave={(v) => onUpdate(code.id, 'sortOrder', v)}
                    type="number"
                    className="text-gray-600 text-center"
                  />
                </td>

                <td className="px-3 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={code.active}
                    onChange={(e) => onUpdate(code.id, 'active', e.target.checked)}
                    className="accent-blue-500 w-4 h-4 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {sorted.length === 0 && (
          <p className="text-center text-gray-400 py-8 text-sm">No codes for this type.</p>
        )}
      </div>
    </div>
  )
}
