import { FilterQuery, Model, Types } from "mongoose";

class DatabaseService<TDocument> {
  constructor(private _model: Model<TDocument>) {
  }
  async create(document: Partial<TDocument>): Promise<TDocument> {
    return await this._model.create(document);
  }

  async findOne(filter: FilterQuery<TDocument>): Promise<TDocument | null> {
    return await this._model.findOne(filter);
  }

  async findById(id: Types.ObjectId): Promise<TDocument | null> {
    return await this._model.findById(id);
  }
  async find(filter?: FilterQuery<TDocument>): Promise<TDocument[]> {
    return await this._model.find(filter || {});
  }
}

export default DatabaseService;
