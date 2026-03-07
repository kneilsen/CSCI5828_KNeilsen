import InlineCell from './InlineCell'

/**
 * Left panel — lists all code types.
 * Props:
 *   codeTypes        – CodeType[]
 *   selectedId       – string | null
 *   onSelect         – (id) => void
 *   onUpdate         – (id, field, value) => void
 */
export default function CodeTypeList({ codeTypes, selectedId, onSelect, onUpdate }) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Code Types</h2>
      </div>

      <div className="overflow-auto flex-1">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <th className="px-3 py-2 text-left w-24">ID</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Description</th>
              <th className="px-3 py-2 text-center w-14">Active</th>
            </tr>
          </thead>
          <tbody>
            {codeTypes.map((ct) => {
              const isSelected = ct.id === selectedId
              return (
                <tr
                  key={ct.id}
                  onClick={() => onSelect(ct.id)}
                  className={`border-b border-gray-100 cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-blue-50 border-l-2 border-l-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {/* ID — not editable (it's the key) */}
                  <td
                    className="px-3 py-2 font-mono text-xs text-gray-500"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <InlineCell
                      value={ct.id}
                      onSave={(v) => onUpdate(ct.id, 'id', v)}
                    />
                  </td>

                  <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                    <InlineCell
                      value={ct.name}
                      onSave={(v) => onUpdate(ct.id, 'name', v)}
                      className="font-medium text-gray-800"
                    />
                  </td>

                  <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                    <InlineCell
                      value={ct.description}
                      onSave={(v) => onUpdate(ct.id, 'description', v)}
                      type="textarea"
                      className="text-gray-500"
                    />
                  </td>

                  <td className="px-3 py-2 text-center" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={ct.active}
                      onChange={(e) => onUpdate(ct.id, 'active', e.target.checked)}
                      className="accent-blue-500 w-4 h-4 cursor-pointer"
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {codeTypes.length === 0 && (
          <p className="text-center text-gray-400 py-8 text-sm">No code types.</p>
        )}
      </div>
    </div>
  )
}
