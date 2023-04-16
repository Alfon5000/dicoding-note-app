import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { getData, formattedDate } from "./utils/data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
      search: "",
      title: "",
      body: "",
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onMoveNote = this.onMoveNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
  }

  onSearchChange(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  onAddNote(event) {
    event.preventDefault();

    const newNote = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      createdAt: formattedDate(Date()),
      archived: false,
    };

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote],
        title: "",
        body: "",
      };
    });
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value.slice(0, 50),
    });
  }

  onBodyChange(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onMoveNote(id) {
    const noteIndex = this.state.notes.findIndex((note) => note.id === id);
    const movedNote = this.state.notes[noteIndex];
    movedNote.archived = !movedNote.archived;

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes.filter((note) => note.id !== id), movedNote],
      };
    });
  }

  onDeleteNote(id) {
    const filteredNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: filteredNotes });
  }

  render() {
    return (
      <div className="note-app">
        <Header
          search={this.state.search}
          onSearchChange={this.onSearchChange}
        />
        <Main
          notes={this.state.notes}
          search={this.state.search}
          title={this.state.title}
          body={this.state.body}
          onAdd={this.onAddNote}
          onTitleChange={this.onTitleChange}
          onBodyChange={this.onBodyChange}
          onMove={this.onMoveNote}
          onDelete={this.onDeleteNote}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
