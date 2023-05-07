import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EnmEventSchema = new Schema({
    id: Number,
    name: String,
    address: String,
    city: String,
    state: String,
    country: String,
    start: String,
    end: {
        type: String,
        required: false
    },
    day: String,
    month: String,
    year: String,
});

const EnmEventModel = mongoose.model("EnmEvent", EnmEventSchema);

export default EnmEventModel;