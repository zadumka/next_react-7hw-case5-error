import axios from 'axios';

const token = localStorage.getItem('auth_token');
axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

type NoteData = {
  title: string;
  content: string;
  tag: string;
};

export const getNotesWithFilters = async (
  searchText: string = '',
  page: number = 1,
  tag: string = ''
) => {
  const response = await axios.get('/notes', {
    params: {
      search: searchText,
      page: page,
      tag: tag,
    },
  });
  return response.data;
};

export const noteOperations = {
  create: async (data: NoteData) => {
    const response = await axios.post('/notes', data);
    return response.data;
  },
  getDetails: async (id: number) => {
    const response = await axios.get(`/notes/${id}`);
    return response.data;
  },
};

export const purgeNote = async (noteId: number): Promise<boolean> => {
  try {
    await axios.delete(`/notes/${noteId}`);
    return true;
  } catch {
    return false;
  }
};
