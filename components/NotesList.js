import Subtitle from "./widgets/subtitle";
export const Note = ({ note }) => <li>{note}</li>;

export const NotesList = ({ title, children }) => (
  <div>
    <Subtitle>{title}</Subtitle>
    <ul>{children}</ul>
  </div>
);
