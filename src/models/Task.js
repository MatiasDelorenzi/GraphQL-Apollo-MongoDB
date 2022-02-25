const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Task', TaskSchema);

