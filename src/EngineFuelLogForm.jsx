
import React, { useState } from 'react';

const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export default function EngineFuelLogForm() {
  const [formData, setFormData] = useState({
    request: '',
    tenNine: '',
    cChannel: '',
    arrive: '',
    me1: '',
    me2: '',
    me3: '',
    me4: '',
    ps: '',
    sb: ''
  });

  const handleTimeClick = (field) => {
    setFormData({ ...formData, [field]: getCurrentTime() });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-bold mb-4">Engine & Fuel Log</h2>

      {[
        ['Request', 'request'],
        ['10-9', 'tenNine'],
        ['C/Channel', 'cChannel'],
        ['Arrive', 'arrive']
      ].map(([label, field]) => (
        <div key={field} className="flex items-center gap-2">
          <label className="w-24 font-medium">{label}:</label>
          <input
            type="text"
            className="border p-2 flex-1 rounded"
            value={formData[field]}
            onChange={(e) => handleChange(field, e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => handleTimeClick(field)}
          >
            Now
          </button>
        </div>
      ))}

      <h3 className="text-lg font-semibold mt-6">Running Hours (R/Hrs)</h3>
      {['me1', 'me2', 'me3', 'me4'].map((engine) => (
        <div key={engine} className="flex items-center gap-2">
          <label className="w-24 font-medium uppercase">{engine}:</label>
          <input
            type="text"
            className="border p-2 flex-1 rounded"
            value={formData[engine]}
            onChange={(e) => handleChange(engine, e.target.value)}
          />
        </div>
      ))}

      <h3 className="text-lg font-semibold mt-6">Fuel Balance (F/Bal)</h3>
      {[
        ['P/S (Portside)', 'ps'],
        ['S/B (Starboard)', 'sb']
      ].map(([label, field]) => (
        <div key={field} className="flex items-center gap-2">
          <label className="w-40 font-medium">{label}:</label>
          <input
            type="text"
            className="border p-2 flex-1 rounded"
            value={formData[field]}
            onChange={(e) => handleChange(field, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
