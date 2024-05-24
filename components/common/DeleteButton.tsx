// components/DeleteButton.tsx
// import { createClient } from '@/utils/supabase/server';
import { FC } from 'react';

interface DeleteButtonProps {
  id: string;
  onDeleted: () => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ id, onDeleted }) => {
  // const handleDelete = async () => {
  //   const supabase = createClient();
  //   const { error } = await supabase
  //     .from('games')
  //     .delete()
  //     .eq('id', id);

  //   if (error) {
  //     console.error('Error deleting record:', error);
  //   } else {
  //     onDeleted();
  //   }
  // };


  return (
    <button onClick={onDeleted}>
      Delete
    </button>
  );
};

export default DeleteButton;