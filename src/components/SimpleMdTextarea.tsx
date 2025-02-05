import { KeyboardEvent } from "react";

export function SimpleMdTextarea({ className, rows, name, placeholder, value, onChange }: { className?: string, rows: number, name: string, placeholder: string, value: string, onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void }) {
  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.ctrlKey) {
      if (e.key === 'b' || e.key === 'B') {
        if (e.ctrlKey) {
          e.preventDefault();
          const textarea = e.target as HTMLTextAreaElement;
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const text = textarea.value;
          const selection = text.slice(start, end);
          textarea.value = text.slice(0, start) + `**${selection}**` + text.slice(end);
          textarea.setSelectionRange(start + 2, end + 2);
        }
      } else if (e.key === 'i' || e.key === 'I') {
        e.preventDefault();
        const textarea = e.target as HTMLTextAreaElement;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selection = text.slice(start, end);
        textarea.value = text.slice(0, start) + `*${selection}*` + text.slice(end);
        textarea.setSelectionRange(start + 1, end + 1);
      }
    }
  }

  return (
    <textarea className={className}
      rows={rows}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      onKeyDown={(e) => { handleKeyDown(e) }} />
  );
}