import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import Authors from "../Authors/Authors";
import bookShopService from "../../repository/bookShopRepository";
import Books from "../Books/BookList/BookList";
import BookAdd from "../Books/BookAdd/BookAdd";
import BookEdit from "../Books/BookEdit/BookEdit";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            authors: [],
            books: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path={"/"} exact
                                   element={<Books books={this.state.books}/>}/>
                            <Route path={"/categories"} exact
                                   element={<Categories categories={this.state.categories}/>}/>
                            <Route path={"/authors"} exact
                                   element={<Authors authors={this.state.authors}/>}/>
                            <Route path={"/books/add"} exact
                                   element={<BookAdd categories={this.state.categories}
                                                     authors={this.state.authors}
                                                     onAddBook={this.addBook}/>}/>
                            <Route path={"/books/edit/:id"} exact
                                   element={<BookEdit categories={this.state.categories}
                                                      authors={this.state.authors}
                                                      onEditBook={this.editBook}
                                                      book={this.state.selectedBook}/>}/>
                            <Route path={"/books"} exact
                                   element={<Books books={this.state.books}
                                                   onDelete={this.deleteBook}
                                                   onEdit={this.getBook}
                                                   onTakeBook={this.takeBook}/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        );
    }



    loadCategories = () => {
        bookShopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    loadAuthors = () => {
        bookShopService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            })
    }

    loadBooks = () => {
        bookShopService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            })
    }

    deleteBook = (id) => {
        bookShopService.deleteBook(id)
            .then(() => {
                this.loadBooks()
            })
    }

    addBook = (name, category, author, availableCopies) => {
        bookShopService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    getBook = (id) => {
        bookShopService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        bookShopService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    takeBook = (id) => {
        bookShopService.takeBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    componentDidMount() {
        this.loadCategories();
        this.loadAuthors();
        this.loadBooks();
    }
}

export default App;