import Subtitle from "./ui/Subtitle";

export const Note = ({ note }) => <li className="list-disc mb-2">{note}</li>;

export const NotesList = ({ title, children }) => (
  <div>
    <Subtitle>{title}</Subtitle>
    <ul className="list-inside">{children}</ul>
  </div>
);
