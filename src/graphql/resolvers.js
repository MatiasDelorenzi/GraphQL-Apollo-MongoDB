const Task = require('../models/Task');

const resolvers = {

    Query: {
        hello: () => 'Hello World',
        getAllTasks: async () => {
            const tasks = await Task.find();
            return tasks;
        },
        getTask: async (_, { id }) => {
            const task = await Task.findById(id);
            return task
        }
    },
    Mutation: {
        //_ is for PARENT property (parent, args, context, index)
        createTask: async (_, args) => {
            const { title, description } = args.task;
            const newTask = new Task({ title, description });
            await newTask.save();
            return newTask;
        },
        deleteTask: async (_, { id }) => {
            await Task.findByIdAndDelete(id);
            return 'Task Deleted'
        },
        updateTask: async (_, {task, id}) => {
            const updatedTask = await Task.findByIdAndUpdate(id, {
                $set: task
            }, { new: true });
            return updatedTask;
        }
    }

}

module.exports = { resolvers }