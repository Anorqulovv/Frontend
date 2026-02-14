import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: name } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: name }]);
    }

    setName("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setName(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">

      <div className="absolute inset-0 -z-20">
        <div className="stars"></div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="blob absolute w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
        <div className="blob absolute w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>
      </div>

      <div className="w-full max-w-2xl p-6 z-10">

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center text-white mb-10"
        >
          🚀 Space Todo
        </motion.h1>

        <motion.div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 mb-8">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Write your mission..."
              className="flex-1 px-5 py-3 rounded-2xl bg-white/20 text-white outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            >
              {editId !== null ? "Update" : "Add"}
            </motion.button>
          </form>
        </motion.div>

        <div className="space-y-5">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="group backdrop-blur-xl bg-white/10 border border-white/20 p-5 rounded-2xl flex items-center justify-between"
              >
                <span className="text-white text-lg">
                  {todo.text}
                </span>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="p-2 rounded-xl bg-yellow-400/20 hover:bg-yellow-400"
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="p-2 rounded-xl bg-red-500/20 hover:bg-red-500"
                  >
                    🗑️
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default App;
