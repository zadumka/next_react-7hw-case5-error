import Link from 'next/link';
import css from './sidebarNotes.module.css';
import { Tag } from '@/types/note.js';

const tags: Tag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default async function SidebarNotes() {
  return (
    <div className={css.container}>
      <div>All notes</div>
      {tags.map((tag) => (
        <div key={tag}>{tag}</div>
      ))}
    </div>
  );
}
