const TodoLists = require('../models/todo_list');

module.exports.home = async function (req, res) {
    // return res.end('<h1>Express is up for Todo-List</h1>');
    try {
        const todoLists = await TodoLists.find();
        return res.render('home', {
            title: 'Todo List',
            todoList: todoLists,
        });
    } catch (err) {
        console.log('Error in fetching todo lists from db:', err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports.update_content = async function(req, res) {
    const id = req.params.id;
    try {
        await TodoLists.findByIdAndUpdate(id, {
        content: req.body.content,
        category: req.body.category,
        dueDate: req.body.dueDate,
    });
        const toDos = await TodoLists.find({});
        res.render("update_content.ejs", { title: 'Todo List',todoLists: toDos, idTask: id });
        return;
    } catch (err) {
        console.log("error in updating Todo!", err);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports.createTodo = async function (req, res) {
    try {
        const newTodoList = await TodoLists.create({
            content: req.body.content,
            category: req.body.category,
            dueDate: req.body.dueDate,
        });
        return res.redirect('/');
    } catch (err) {
        console.log('error in creating a Todo!', err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports.delete_content = async function (req, res) {
    try {
        const id = req.query.content;
        await TodoLists.findByIdAndDelete(id);
        return res.redirect('/');
    } catch (err) {
        console.log('Error in deleting todo item from db:', err);
        return res.status(500).send('Internal Server Error');
    }
};