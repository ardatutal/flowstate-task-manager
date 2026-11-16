import React, { useEffect, useState } from "react";

export default function App() {
  // LocalStorage'dan kayıtlı görevleri çekme
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("flowstate_tasks");
    return saved ? JSON.parse(saved) : [
      { id: 1, text: "Sabah odaklanma seansı ", completed: true },
      { id: 2, text: "Yazılım mimarisi gözden geçirme", completed: false }
    ];
  });
  
  const [input, setInput] = useState("");

  // Görevler her değiştiğinde LocalStorage'a kaydetme
  useEffect(() => {
    localStorage.setItem("flowstate_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0F172A", color: "#F8FAFC", fontFamily: "sans-serif", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: "500px", backgroundColor: "#1E293B", padding: "30px", borderRadius: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}>
        
        {/* Başlık */}
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1 style={{ color: "#06B6D4", fontSize: "24px", margin: "0 0 5px 0" }}>flowstate</h1>
          <p style={{ color: "#94A3B8", fontSize: "14px", margin: 0 }}>Akıllı Odak ve Görev Yönetim Paneli</p>
        </div>

        {/* Form */}
        <form onSubmit={addTask} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Yeni odak görevi ekle..." 
            style={{ flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#0F172A", color: "#fff", outline: "none" }}
          />
          <button type="submit" style={{ backgroundColor: "#06B6D4", color: "#0F172A", border: "none", padding: "10px 18px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>Ekle</button>
        </form>

        {/* Görev Listesi */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", backgroundColor: "#0F172A", marginBottom: "10px", borderRadius: "8px", borderLeft: task.completed ? "4px solid #10B981" : "4px solid #06B6D4" }}>
              <span 
                onClick={() => toggleTask(task.id)} 
                style={{ cursor: "pointer", textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "#64748B" : "#F8FAFC", flex: 1 }}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} style={{ background: "transparent", border: "none", color: "#EF4444", cursor: "pointer", fontSize: "16px" }}>×</button>
            </li>
          ))}
        </ul>

        {/* Alt Bilgi */}
        <div style={{ marginTop: "20px", textAlign: "center", fontSize: "12px", color: "#64748B" }}>
          Veriler tarayıcı belleğinde (LocalStorage) güvenle saklanır.
        </div>

      </div>
    </div>
  );
}
