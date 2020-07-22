import mongoose from "mongoose";

const connectionAddress = "mongodb://localhost/PH2Mongo";
mongoose.connect(connectionAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.pluralize(null);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Ошибка соединения с MongoDB"));

const Admins = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Engine = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  volume: Number,
  power: Number,
  enginePistons: String,
  type: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Carcass = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Transmission = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  gearstages: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Color = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  urlimage: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Configuration = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  engine: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Engine",
  },
  carcass: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Carcass",
  },
  transmission: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Transmission",
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Color",
  },
  flag: {
    type: Boolean,
    default: false,
  },
  numberofseats: String,
  groundclearance: String,
  carrying: Number,
  price: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Сompetitors = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  engine: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Engine",
  },
  carcass: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Carcass",
  },
  transmission: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Transmission",
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Color",
  },
  numberofseats: String,
  groundclearance: String,
  carrying: Number,
  price: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const AdminsModel = mongoose.model("Admins", Admins);
const EngineModel = mongoose.model("Engine", Engine);
const CarcassModel = mongoose.model("Carcass", Carcass);
const TransmissionModel = mongoose.model("Transmission", Transmission);
const ColorModel = mongoose.model("Color", Color);
const ConfigurationModel = mongoose.model("Configuration", Configuration);
const СompetitorsModel = mongoose.model("Сompetitors", Сompetitors);

export default {
  AdminsModel,
  EngineModel,
  CarcassModel,
  TransmissionModel,
  ColorModel,
  ConfigurationModel,
  СompetitorsModel,
};
