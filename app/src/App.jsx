import { useState } from 'react'
import { initialCodeTypes, initialCodes } from './data/mockData'
import CodeTypeList from './components/CodeTypeList'
import CodeList from './components/CodeList'

export default function App() {
  const [codeTypes, setCodeTypes] = useState(initialCodeTypes)
  const [codes, setCodes] = useState(initialCodes)
  const [selectedTypeId, setSelectedTypeId] = useState(initialCodeTypes[0]?.id ?? null)

  // Update a field on a code type
  function updateCodeType(id, field, value) {
    setCodeTypes((prev) =>
      prev.map((ct) => (ct.id === id ? { ...ct, [field]: value } : ct))
    )
  }

  // Update a field on a code
  function updateCode(id, field, value) {
    setCodes((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    )
  }

  const selectedType = codeTypes.find((ct) => ct.id === selectedTypeId) ?? null
  const filteredCodes = codes.filter((c) => c.codeTypeId === selectedTypeId)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">Code Types &amp; Codes</h1>
        <p className="text-xs text-gray-500 mt-0.5">Click any cell to edit inline · Changes are saved to local state</p>
      </header>

      {/* Main split layout */}
      <main className="flex flex-1 overflow-hidden gap-0">
        {/* Left panel — Code Types */}
        <div className="w-2/5 bg-white border-r border-gray-200 flex flex-col overflow-hidden shadow-sm">
          <CodeTypeList
            codeTypes={codeTypes}
            selectedId={selectedTypeId}
            onSelect={setSelectedTypeId}
            onUpdate={updateCodeType}
          />
        </div>

        {/* Right panel — Codes */}
        <div className="flex-1 bg-white flex flex-col overflow-hidden shadow-sm">
          <CodeList
            selectedType={selectedType}
            codes={filteredCodes}
            onUpdate={updateCode}
          />
        </div>
      </main>
    </div>
  )
}
