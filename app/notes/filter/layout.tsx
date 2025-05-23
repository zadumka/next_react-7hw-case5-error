import css from './layout.module.css';

type LayoutNotesProps = {
  children: React.ReactNode;
};

export default function LayoutNotes({ children }: LayoutNotesProps) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}></aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}
