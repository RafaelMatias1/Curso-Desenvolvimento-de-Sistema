import React, { useState, FormEvent, ChangeEvent } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse' as const,
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
};

// Interface para definir a estrutura de uma entrada no catálogo telefônico
interface PhoneBookEntry {
  firstName: string;
  lastName: string;
  phone: string;
}

// Interface para as propriedades do formulário
interface PhoneBookFormProps {
  addEntryToPhoneBook: (entry: PhoneBookEntry) => void;
}

// Componente do formulário para adicionar entradas ao catálogo telefônico
function PhoneBookForm({ addEntryToPhoneBook }: PhoneBookFormProps) {
  // Estados para os campos do formulário
  const [firstName, setFirstName] = useState<string>('Coder');
  const [lastName, setLastName] = useState<string>('Byte');
  const [phone, setPhone] = useState<string>('8885559999');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEntryToPhoneBook({ firstName, lastName, phone });
    setFirstName('Coder');
    setLastName('Byte');
    setPhone('8885559999');
  };

  // Função auxiliar para lidar com mudanças nos campos do formulário
  const handleChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>Nome:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={firstName}
        onChange={handleChange(setFirstName)}
      />
      <br />
      <label>Sobrenome:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={lastName}
        onChange={handleChange(setLastName)}
      />
      <br />
      <label>Telefone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={phone}
        onChange={handleChange(setPhone)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Adicionar Usuário"
      />
    </form>
  );
}

// Interface para as propriedades da tabela de informações
interface InformationTableProps {
  phoneBookEntries: PhoneBookEntry[];
}

// Componente da tabela de informações
function InformationTable({ phoneBookEntries }: InformationTableProps) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>Nome</th>
          <th style={style.tableCell}>Sobrenome</th>
          <th style={style.tableCell}>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {phoneBookEntries.map((entry, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{entry.firstName}</td>
            <td style={style.tableCell}>{entry.lastName}</td>
            <td style={style.tableCell}>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Componente principal da aplicação
function Application() {
  const [phoneBookEntries, setPhoneBookEntries] = useState<PhoneBookEntry[]>(
    []
  );

  // Função para adicionar uma nova entrada ao catálogo telefônico e ordenar por sobrenome
  const addEntryToPhoneBook = (entry: PhoneBookEntry) => {
    // __define-ocg__ Esta função lida com a adição e ordenação das entradas
    const varOcg: PhoneBookEntry[] = [...phoneBookEntries, entry];
    varOcg.sort((a, b) => a.lastName.localeCompare(b.lastName));
    setPhoneBookEntries(varOcg);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable phoneBookEntries={phoneBookEntries} />
    </section>
  );
}

// Renderiza o componente principal na página
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Application />);
}
