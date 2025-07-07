import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSound, AiOutlineClose } from 'react-icons/ai';

const AudioPermissionModal = ({ onAccept }) => {
  const [visible, setVisible] = useState(true);
  const handleAccept = () => {
    // Salvar que o usuário aceitou no localStorage
    localStorage.setItem('audioPermission', 'granted');
    setVisible(false);
    onAccept();
  };
  
  const handleDecline = () => {
    // Salvar que o usuário recusou no localStorage
    localStorage.setItem('audioPermission', 'denied');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-24 right-4 z-40 max-w-sm"
    >
      <div className="bg-purple-900 bg-opacity-20 backdrop-blur-md p-4 rounded-xl border border-purple-400 border-opacity-50 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <AiOutlineSound className="text-purple-400 text-xl" />
          <h2 className="text-lg font-semibold text-gray-200">Permissão de Áudio</h2>
        </div>
          <p className="mb-4 text-sm text-gray-300">
          Para uma melhor experiência, permita o áudio de fundo.
        </p>
        
        <div className="mb-3 p-2 bg-blue-900 bg-opacity-30 rounded-lg border border-blue-500 border-opacity-50">
          <p className="text-xs text-blue-200">
            💡 <strong>Dica:</strong> Para não ver esta mensagem novamente, permita áudio nas configurações do navegador para este site.
          </p>
        </div>
        
        <div className="flex justify-end space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDecline}
            className="px-3 py-1.5 bg-gray-700 bg-opacity-50 text-gray-300 rounded-lg text-sm hover:bg-gray-600 transition-colors border border-gray-600"
          >
            Recusar
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAccept}
            className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors border border-purple-500"
          >
            Aceitar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
export default AudioPermissionModal;